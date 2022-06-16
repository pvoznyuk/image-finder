import React, { createContext, useReducer } from 'react'
import reducer, { State } from './reducer'

type StoreProps = {
  children: React.ReactNode
  initialState: State
}

const Store = ({ children, initialState }: StoreProps) => {
  const [state, dispatch] = useReducer(reducer, { ...initialState })
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
}

export const Context = createContext<{
  state: State
  dispatch: React.Dispatch<unknown>
}>({
  state: null,
  dispatch: () => null,
})

export default Store
