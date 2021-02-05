import React, { memo } from 'react'
import Styles from './footer-style.scss'

const LoginHeader: React.FC = () => {
  return (
    <footer className={Styles.footer}></footer>
  )
}

export default memo(LoginHeader)
