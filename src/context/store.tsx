import React, { createContext, useReducer } from 'react'
import reducer, { State } from './reducer'
import { Step } from '../types'

const initialState: State = {
  step: Step.FORM,

  firstName: {
    name: 'firstName',
    value: '',
    label: 'First Name',
    isValid: true,
    placeholder: 'First Name',
  },
  lastName: {
    name: 'lastName',
    value: '',
    label: 'Last Name',
    placeholder: 'Last Name',
    isValid: true,
  },
  topic: {
    name: 'topic',
    value: '',
    label: 'Topic',
    placeholder: 'Select topic',
    isValid: true,
  },
  customTopic: {
    name: 'customTopic',
    value: '',
    label: 'Custom Topic',
    placeholder: 'Custom Topic',
    isValid: true,
  },

  isLoading: false,
  errorMessage: '',
  photo: null,
}

type StoreProps = {
  children: React.ReactNode
}

const Store = ({ children }: StoreProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
}

export const Context = createContext<{
  state: State
  dispatch: React.Dispatch<unknown>
}>({
  state: initialState,
  dispatch: () => null,
})

export default Store
