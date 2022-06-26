import React from 'react'
import { IFormField } from 'src/types'
import styles from './TextField.scss'

type TextFieldProps = {
  field: IFormField
  disabled: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextField = ({
  field: { name, value, label, placeholder, isValid },
  disabled,
  onChange = () => null,
}: TextFieldProps) => {
  return (
    <label className={styles.textField}>
      <span className={styles.textFieldLabel}>{label}</span>

      <input
        className={`${styles.textFieldInput} ${!isValid ? styles.textFieldError : ''}`}
        type="text"
        name={name}
        id={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
        maxLength={50}
      />
    </label>
  )
}

export default TextField
