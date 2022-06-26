import React from 'react'
import { IFormField } from 'src/types'
import styles from './Select.scss'

type SelectProps = {
  field: IFormField
  options: string[]
  disabled: boolean
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select = ({
  field: { name, value, label, placeholder, isValid },
  disabled,
  options = [],
  onChange = () => null,
}: SelectProps) => {
  return (
    <label className={styles.select}>
      <span className={styles.selectLabel}>{label}</span>

      <select
        className={`${styles.selectInput} ${!isValid ? styles.selectError : ''}`}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        <option value="">{placeholder}</option>

        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  )
}

export default Select
