import React from 'react'
import { render, screen } from '@testing-library/react'
import deepmerge from 'deepmerge'
import initialState from '../../src/context/initialState'
import App from '../../src/App'
import Store from '../../src/context/store'
import { State } from '../../src/context/reducer'
import { Step } from '../../src/types'

describe('App component', () => {
  const state = deepmerge(initialState, {
    photo: {
      id: '1',
      url: 'http://img',
      description: 'desc',
    },
  }) as State

  it('should render search form by default', () => {
    render(
      <Store initialState={state}>
        <App />
      </Store>,
    )

    expect(screen.getByText(/Search/i)).toBeTruthy()
  })

  it('should render image matcher for the second step', () => {
    render(
      <Store initialState={deepmerge(state, { step: Step.MATCH })}>
        <App />
      </Store>,
    )
    expect(screen.getByText(/Accept/i)).toBeTruthy()
  })

  it('should render image card for the third step', () => {
    render(
      <Store
        initialState={deepmerge(state, {
          step: Step.CARD,
          firstName: { value: 'Luke' },
          lastName: { value: 'Skywalker' },
        })}
      >
        <App />
      </Store>,
    )
    expect(screen.getByText(/Luke/i)).toBeTruthy()
  })
})
