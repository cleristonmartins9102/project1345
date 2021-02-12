import { Validation } from '../protocols/validation'

export class ValidationSpy implements Validation {
  errorMessage: string
  fieldName: string
  fieldValue: string
  validate (fieldName: string, fieldValue: string): string {
    this.fieldValue = fieldValue
    this.fieldName = fieldName
    this.errorMessage = 'fail'
    return this.errorMessage
  }
}
