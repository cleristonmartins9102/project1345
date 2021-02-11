import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Login from './login'

describe('Login Component', () => {
  test('Login', () => {
    const { getByTestId } = render(<Login />)
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
    const submitButton = getByTestId('submit') as HTMLInputElement
    expect(submitButton.disabled).toBe(true)
    // const emailStatus = getByTestId('email-status') as HTMLSpanElement
    // const statusNode = await getByTestId('email-status')
  })
})
