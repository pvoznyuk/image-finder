import { State } from './reducer'
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

export default initialState
