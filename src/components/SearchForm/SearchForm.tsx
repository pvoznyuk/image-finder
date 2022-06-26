import React, { useContext } from 'react'
import { Context } from '../../context/store'
import { TextField } from './components/TextField'
import { Select } from './components/Select'
import { IFormField } from '../../types'
import styles from './SearchForm.scss'
import { topics } from '../../common/const'

export type SearchFormProps = {
  onSubmit: () => void
}

const SearchForm = ({ onSubmit }: SearchFormProps) => {
  const {
    state: { firstName, lastName, topic, customTopic, isLoading, errorMessage },
    dispatch,
  } = useContext(Context)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    dispatch({
      type: 'SET_FIELDS',
      payload: {
        [e.target.name]: {
          value: e.target.value,
          isValid: true,
        },
      },
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // validation rules:
    // firstName, lastName and topic are required
    // customTopic is required if topic is 'Other'
    const nextFields = [firstName, lastName, topic, customTopic].reduce((validatedFields, field) => {
      const isValid =
        field.name === 'customTopic' ? topic.value !== 'Other' || customTopic.value : field.value.length > 0

      return {
        ...validatedFields,
        [field.name]: {
          ...field,
          isValid,
        },
      }
    }, {})

    dispatch({
      type: 'SET_FIELDS',
      payload: nextFields,
    })

    const isFormValid = Object.values(nextFields).every((field) => (field as IFormField).isValid)

    if (isFormValid) {
      onSubmit()
    } else {
      dispatch({
        type: 'SET_ERROR',
        payload: 'Please fill in all fields',
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <TextField field={firstName} onChange={handleChange} disabled={isLoading} />

      <TextField field={lastName} onChange={handleChange} disabled={isLoading} />

      <Select field={topic} options={topics} onChange={handleChange} disabled={isLoading} />

      {topic.value === 'Other' && <TextField field={customTopic} onChange={handleChange} disabled={isLoading} />}

      <button id="search" type="submit" disabled={isLoading}>
        Search
      </button>

      {isLoading && <div className={styles.searchFormInfo}>🔎 Searching...</div>}

      {errorMessage && <div className={styles.searchFormError}>{errorMessage}</div>}
    </form>
  )
}

export default SearchForm
