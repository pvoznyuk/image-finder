export interface IFormField {
  name: string
  value: string
  placeholder?: string
  label?: string
  isValid: boolean
}

export interface IPhoto {
  id: string
  url: string
  description: string
}

export enum Step {
  FORM,
  MATCH,
  CARD,
}
