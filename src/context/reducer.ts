import deepmerge from 'deepmerge'
import { IFormField, IPhoto, Step } from '../types'
import initialState from './initialState'

export interface State {
  step: Step

  firstName: IFormField
  lastName: IFormField
  topic: IFormField
  customTopic: IFormField

  isLoading: boolean
  errorMessage?: string
  photo: IPhoto
}

export type Actions =
  | { type: 'SET_STEP'; payload: Step }
  | { type: 'SET_FIELDS'; payload: { [_key: string]: Partial<IFormField> } }
  | { type: 'SET_LOADING' }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'SET_PHOTO'; payload: IPhoto }
  | { type: 'RESET' }

const Reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, step: action.payload }

    case 'SET_FIELDS':
      const nextState = deepmerge(state, action.payload)

      if (nextState.topic.value !== 'Other') {
        nextState.customTopic.value = ''
      }

      return nextState

    case 'SET_LOADING':
      return { ...state, photo: null, isLoading: true, errorMessage: '' }

    case 'SET_ERROR':
      return { ...state, photo: null, isLoading: false, errorMessage: action.payload }

    case 'SET_PHOTO':
      return {
        ...state,
        step: Step.MATCH,
        photo: action.payload,
        isLoading: false,
        errorMessage: '',
      }

    case 'RESET': {
      return { ...initialState }
    }

    default:
      return state
  }
}

export default Reducer
