import React from 'react'
import { cleanup, fireEvent, render, RenderResult } from '@testing-library/react'
import Login from './login'

import { Validation } from '@/presentation/protocols/validation'

type SutTypes = {
  sut: RenderResult
  validationSpy: ValidationSpy
}

class ValidationSpy implements Validation {
  errorMessage: string
  input: object
  validate (input: object): string {
    this.input = input
    this.errorMessage = 'fail'
    return this.errorMessage
  }
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const sut = render(<Login validation={validationSpy}/>)
  return {
    sut,
    validationSpy
  }
}

describe('Login Component', () => {
  afterEach(cleanup)

  test('Login', () => {
    const { sut } = makeSut()
    const errorWrap = sut.getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
    const submitButton = sut.getByTestId('submit') as HTMLInputElement
    expect(submitButton.disabled).toBe(true)
    // const emailStatus = getByTestId('email-status') as HTMLSpanElement
    // const statusNode = await getByTestId('email-status')
  })

  test('Should call validation with correct value email', () => {
    const { sut, validationSpy } = makeSut()
    const emailInput = sut.getByTestId('email')
    fireEvent.input(emailInput, { target: { value: 'any' } })
    expect(validationSpy.input).toEqual({
      email: 'any'
    })
  })

  test('Should call validation with correct value password', () => {
    const { sut, validationSpy } = makeSut()
    const passwordInput = sut.getByTestId('password')
    fireEvent.input(passwordInput, { target: { value: 'any' } })
    expect(validationSpy.input).toEqual({
      password: 'any'
    })
  })
})
