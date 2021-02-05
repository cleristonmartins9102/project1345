import React, { memo } from 'react'
import Styles from './loginHeader-style.scss'

const LoginHeader: React.FC = () => {
  return (
    <header className={Styles.header}></header>
  )
}

export default memo(LoginHeader)
