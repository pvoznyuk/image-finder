import React from 'react'
import { render, screen } from '@testing-library/react'
import deepmerge from 'deepmerge'
import initialState from '../../src/context/initialState'
import Card from '@components/Card/Card'
import Store from '../../src/context/store'
import { State } from '../../src/context/reducer'

describe('Card component', () => {
  const state = deepmerge(initialState, {
    firstName: { value: 'Luke' },
    lastName: { value: 'Skywalker' },
    photo: {
      id: '1',
      url: 'http://img',
      description: 'desc',
    },
  }) as State

  render(
    <Store initialState={state}>
      <Card />
    </Store>,
  )

  it('should render image, Name and Surname', () => {
    const image = screen.getByAltText('desc')
    expect(image.getAttribute('src')).toContain('http://img')
    expect(screen.getByText(/Luke/i)).toBeTruthy()
    expect(screen.getByText(/Skywalker/i)).toBeTruthy()
  })
})
