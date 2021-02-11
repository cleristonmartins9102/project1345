import React, { useContext } from 'react'
import Styles from './input-style.scss'
import Context from '@/presentation/components/contexts/form/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
const Input: React.FC<Props> = (props: Props) => {
  const { errorState } = useContext(Context)
  const error = errorState[props.name]
  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  // const getStatus = (): string => error
  const getError = (): string => error

  return (
    <div className={Styles.inputWrap}>
      <input {...props} readOnly onFocus={enableInput}/>
      <span data-testid={`${props.name}-status`} title={getError()} id="teste" className={Styles.emojiStatus}>CLERITON</span>
    </div>
  )
}

export default Input
