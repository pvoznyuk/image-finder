import React from 'react'
import { createRoot } from 'react-dom/client'
import Store from './context/store'
import App from './App'
import initialState from './context/initialState'
import './style/index.scss'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Store initialState={initialState}>
    <App />
  </Store>,
)
