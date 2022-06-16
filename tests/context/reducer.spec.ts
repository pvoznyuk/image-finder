import { Step } from '../../src/types'
import initialState from '../../src/context/initialState'
import reducer, { Actions } from '../../src/context/reducer'

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {} as Actions)).toEqual(initialState)
  })

  it('should set the step', () => {
    expect(reducer(initialState, { type: 'SET_STEP', payload: Step.MATCH })).toEqual({
      ...initialState,
      step: Step.MATCH,
    })
  })

  it('should set the fields', () => {
    expect(reducer(initialState, { type: 'SET_FIELDS', payload: { firstName: { value: 'John' } } })).toEqual({
      ...initialState,
      firstName: {
        ...initialState.firstName,
        value: 'John',
      },
    })
  })

  it('should reset the custom topic if some topic is set in the dropdown', () => {
    expect(
      reducer(
        {
          ...initialState,
          customTopic: {
            ...initialState.customTopic,
            value: 'Food',
          },
        },
        { type: 'SET_FIELDS', payload: { topic: { value: 'Travel' } } },
      ),
    ).toEqual({
      ...initialState,
      topic: {
        ...initialState.topic,
        value: 'Travel',
      },
      customTopic: {
        ...initialState.customTopic,
        value: '',
      },
    })
  })

  it('should not reset the custom topic if Other is selected', () => {
    expect(
      reducer(
        {
          ...initialState,
          customTopic: {
            ...initialState.customTopic,
            value: 'Food',
          },
        },
        { type: 'SET_FIELDS', payload: { topic: { value: 'Other' } } },
      ),
    ).toEqual({
      ...initialState,
      topic: {
        ...initialState.topic,
        value: 'Other',
      },
      customTopic: {
        ...initialState.customTopic,
        value: 'Food',
      },
    })
  })

  it('should set the loading', () => {
    expect(reducer(initialState, { type: 'SET_LOADING' })).toEqual({
      ...initialState,
      isLoading: true,
    })
  })

  it('should set the error', () => {
    expect(reducer(initialState, { type: 'SET_ERROR', payload: 'error' })).toEqual({
      ...initialState,
      isLoading: false,
      errorMessage: 'error',
    })
  })

  it('should set the photo', () => {
    expect(reducer(initialState, { type: 'SET_PHOTO', payload: { id: '1', url: 'url', description: 'desc' } })).toEqual(
      {
        ...initialState,
        step: Step.MATCH,
        photo: { id: '1', url: 'url', description: 'desc' },
        isLoading: false,
        errorMessage: '',
      },
    )
  })
})
