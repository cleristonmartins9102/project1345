import React, { useState } from 'react'
import Styles from './login-styles.scss'
import LoginHeader from '../../components/header/header'
import { Footer, Input, FormStatus } from '@/presentation/components'
import Context from '@/presentation/components/contexts/form/form-context'

const Login: React.FC = () => {
  const [state] = useState({
    isLoading: false,
    errorMessage: '',
    emailError: 'Campo obrigatorio',
    passwordError: 'Campo obrigatorio'
  })

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={state}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" id="" placeholder="email" />
          <Input type="password" name="password" id="" placeholder="Password" />
          <button data-testid="submit" className={Styles.submit} disabled>Entrar</button>
          <span className={Styles.link}>Criar Conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
