import { State } from './reducer'
import { Step } from '../types'

const initialState: State = {
  step: Step.FORM,

  firstName: {
    name: 'firstName',
    value: '',
    label: 'Name',
    isValid: true,
    placeholder: 'Name',
  },
  lastName: {
    name: 'lastName',
    value: '',
    label: 'Surname',
    placeholder: 'Surname',
    isValid: true,
  },
  topic: {
    name: 'topic',
    value: '',
    label: 'Preferred topic',
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
