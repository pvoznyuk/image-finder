import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import deepmerge from 'deepmerge'
import initialState from '../../src/context/initialState'
import Unsplash, { UnsplashProps } from '@components/Unsplash/Unsplash'
import Store from '../../src/context/store'
import { State } from '../../src/context/reducer'

describe('Unsplash component', () => {
  const handleReject = jest.fn()
  const handleAccept = jest.fn()
  const state = deepmerge(initialState, {
    photo: {
      id: '1',
      url: 'http://img',
      description: 'desc',
    },
  }) as State

  const dummyProps: UnsplashProps = {
    onReject: handleReject,
    onAccept: handleAccept,
  }

  beforeEach(() => {
    render(
      <Store initialState={state}>
        <Unsplash {...dummyProps} />
      </Store>,
    )
  })

  it('should render image and buttons', () => {
    expect(screen.getByText(/Reject/i)).toBeTruthy()
    expect(screen.getByText(/Accept/i)).toBeTruthy()
    const image = screen.getByAltText('desc')
    expect(image.getAttribute('src')).toContain('http://img')
  })

  it('should request another image on reject', () => {
    fireEvent.click(screen.getByText(/Reject/i))
    expect(handleReject).toBeCalled()
  })

  it('should accept image', () => {
    fireEvent.click(screen.getByText(/Accept/i))
    expect(handleAccept).toBeCalled()
  })
})
