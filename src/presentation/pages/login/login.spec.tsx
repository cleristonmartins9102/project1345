import React from 'react'
import { cleanup, fireEvent, render, RenderResult } from '@testing-library/react'
import { ValidationStub } from '@/presentation/test'
import faker from 'faker'
import Login from './login'

type SutTypes = {
  sut: RenderResult
}

type SutParams = {
  validationError: string
}

// class AuthenticationSpy {

// }

const makeSut = (params?: SutParams, call?: any): SutTypes => {
  const validationStub = new ValidationStub()
  // if (params) {
  validationStub.errorMessage = params?.validationError
  // } else {
  //   validationStub.errorMessage = false
  // }
  // if (typeof call !== 'undefined') {
  //   console.log(validationStub)
  // }
  const sut = render(<Login validation={validationStub}/>)
  return {
    sut
  }
}

describe('Login Component', () => {
  afterEach(cleanup)

  test('Login', () => {
    const { sut } = makeSut()
    const errorWrap = sut.getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
    const submitButton = sut.getByTestId('submit') as HTMLInputElement
    // expect(submitButton.disabled).toBe(true)
    // const emailStatus = getByTestId('email-status') as HTMLSpanElement
    // const statusNode = await getByTestId('email-status')
  })

  // test('Should call validation with correct value email', () => {
  //   const { sut, validationStub } = makeSut()
  //   const emailInput = sut.getByTestId('email')
  //   const email = faker.internet.email()
  //   fireEvent.input(emailInput, { target: { value: email } })
  //   expect(validationStub.fieldName).toBe('email')
  //   expect(validationStub.fieldValue).toBe(email)
  // })

  // test('Should call validation with correct value password', () => {
  //   const { sut, validationSpy } = makeSut()
  //   const passwordInput = sut.getByTestId('password')
  //   const password = faker.internet.password()
  //   fireEvent.input(passwordInput, { target: { value: password } })
  //   expect(validationSpy.fieldName).toBe('password')
  //   expect(validationSpy.fieldValue).toBe(password)
  // })

  test('Should show email error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    const emailInput = sut.getByTestId('email')
    fireEvent.input(emailInput, { target: { value: faker.random.words() } })
    const emailStatus = sut.getByTestId('email-status')
    expect(emailStatus.title).toBe(validationError)
    // expect(validationSpy.fieldValue).toBe(email)
  })

  test('Should show password error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    const passwordInput = sut.getByTestId('password')
    fireEvent.input(passwordInput, { target: { value: faker.random.words() } })
    const passwordStatus = sut.getByTestId('password-status')
    expect(passwordStatus.title).toBe(validationError)
    // expect(passwordStatus.fieldValue).toBe(email)
  })

  test('Should show email password state if Validation was succeeds', () => {
    const { sut } = makeSut()
    const emailInput = sut.getByTestId('email')
    const email = faker.internet.email()
    fireEvent.input(emailInput, { target: { value: email } })
    const emailStatus = sut.getByTestId('email-status')
    expect(emailStatus.title).toBe('Tudo certo')
    // expect(validationSpy.fieldValue).toBe(email)
  })

  test('Should show valid password state if Validation was succeeds', () => {
    const { sut } = makeSut()
    const passwordInput = sut.getByTestId('password')
    fireEvent.input(passwordInput, { target: { value: faker.internet.password() } })
    const passwordStatus = sut.getByTestId('password-status')
    expect(passwordStatus.title).toBe('Tudo certo')
    // expect(validationSpy.fieldValue).toBe(email)
  })

  test('Should enable submit button if form is valid', () => {
    const { sut } = makeSut()
    const emailInput = sut.getByTestId('email')
    fireEvent.input(emailInput, { target: { value: faker.internet.email() } })
    const passwordInput = sut.getByTestId('password')
    fireEvent.input(passwordInput, { target: { value: faker.internet.password() } })
    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(false)
    // console.log(submitButton.disabled)
    // expect(validationSpy.fieldValue).toBe(email)
  })

  test('Should show spinner on submit', () => {
    const { sut } = makeSut()
    const emailInput = sut.getByTestId('email')
    fireEvent.input(emailInput, { target: { value: faker.internet.email() } })
    const passwordInput = sut.getByTestId('password')
    fireEvent.input(passwordInput, { target: { value: faker.internet.password() } })
    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    fireEvent.click(submitButton)
    const spinner = sut.getByTestId('spinner')
    expect(spinner).toBeTruthy()
  })

  // test('Should call Authentication with correct values', () => {
  //   const { sut, authenticationSpy } = makeSut()
  //   const emailInput = sut.getByTestId('email')
  //   const email = faker.internet.email()
  //   fireEvent.input(emailInput, { target: { value: email } })
  //   const passwordInput = sut.getByTestId('password')
  //   const password = faker.internet.password()
  //   fireEvent.input(passwordInput, { target: { value: password } })
  //   const submitButton = sut.getByTestId('submit') as HTMLButtonElement
  //   fireEvent.click(submitButton)
  //   expect(authenticationSpy.params).toEqual({
  //     email,
  //     password
  //   })
  // })
})
