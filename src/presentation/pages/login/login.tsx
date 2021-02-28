import React, { useState, useEffect } from 'react'
import Styles from './login-styles.scss'
import LoginHeader from '../../components/header/header'
import { Footer, Input, FormStatus } from '@/presentation/components'
import Context from '@/presentation/components/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'

type Props = {
  validation: Validation
}
const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: 'Campo obrigatorio',
    passwordError: 'Campo obrigatorio',
    mainError: ''
  })

  useEffect(() => {
    if (typeof validation !== 'undefined') {
      setState({
        ...state,
        emailError: validation.validate('email', state.email),
        passwordError: validation.validate('password', state.password)
      })
    }
    // console.log(state)
  }, [state.email, state.password])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    setState({ ...state, isLoading: true })
  }

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={ { state, setState } }>
        <form className={Styles.form} onSubmit={handleSubmit}>
          <h2>Login</h2>
          <Input type="email" name="email" id="" placeholder="email" />
          <Input type="password" name="password" id="" placeholder="Password" />
          <button data-testid="submit" className={Styles.submit} disabled={!!state.emailError || !!state.passwordError}>Entrar</button>
          <span className={Styles.link}>Criar Conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
