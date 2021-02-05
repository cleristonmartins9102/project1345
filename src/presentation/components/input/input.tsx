import React from 'react'
import Styles from './input-style.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  console.log([Styles.spinner, props.className].join(' '))
  return (
    <div className={Styles.inputWrap}>
      <input {...props}/>
      <span className={Styles.emojiStatus}></span>
    </div>
  )
}

export default Input
