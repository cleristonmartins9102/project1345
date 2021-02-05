import React from 'react'
import Styles from './spinner-style.scss'

type Props = React.HTMLAttributes<HTMLElement>

const Spinner: React.FC<Props> = (props: Props) => {
  console.log([Styles.spinner, props.className].join(' '))
  return (
    <div {...props} className={[Styles.spinner, props.className].join(' ')}>
      <div /><div /><div /><div />
    </div>
  )
}

export default Spinner
