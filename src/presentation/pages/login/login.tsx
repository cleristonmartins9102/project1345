import React from 'react'
import Styles from './login-styles.scss'

import Header, { Footer, Input, FormStatus } from '@/presentation/components'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input type="email" name="" id="" placeholder="email" />
        <Input type="password" name="" id="" placeholder="Password" />
        <button className={Styles.submit}>Entrar</button>
        <span className={Styles.link}>Criar Conta</span>
        <FormStatus />
      </form>
      <Footer />
    </div>
  )
}

export default Login
