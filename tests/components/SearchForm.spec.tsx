import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import SearchForm, { SearchFormProps } from '@components/SearchForm/SearchForm'
import Store from '../../src/context/store'
import initialState from '../../src/context/initialState'

describe('SearchForm component', () => {
  const handleSubmit = jest.fn()

  const dummyProps: SearchFormProps = {
    onSubmit: handleSubmit,
  }

  beforeEach(() => {
    render(
      <Store initialState={initialState}>
        <SearchForm {...dummyProps} />
      </Store>,
    )
  })

  it('should render component with data from the context', () => {
    expect(screen.getByText('First Name')).toBeTruthy()
    expect(screen.getByText('Last Name')).toBeTruthy()
    expect(screen.getByText('Topic')).toBeTruthy()
  })

  it('should show a custom topic', () => {
    fireEvent.change(screen.getByDisplayValue(/Select topic/i), {
      target: { value: 'Other' },
    })

    expect(screen.getByText('Custom Topic')).toBeTruthy()
  })

  it('should show a validation error message', () => {
    fireEvent.click(screen.getByText(/Search/i), {
      target: { value: '' },
    })

    expect(screen.getByText('Please fill in all fields')).toBeTruthy()
  })

  it('should call submit if the form is valid', () => {
    fireEvent.change(screen.getByPlaceholderText(/First Name/i), {
      target: { value: 'Luke' },
    })
    fireEvent.change(screen.getByPlaceholderText(/Last Name/i), {
      target: { value: 'Skywalker' },
    })
    fireEvent.change(screen.getByDisplayValue(/Select topic/i), {
      target: { value: 'Travel' },
    })

    fireEvent.click(screen.getByText(/Search/i))

    expect(handleSubmit).toBeCalled()
  })
})
