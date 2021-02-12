import React, { memo, useContext } from 'react'
import Styles from './form-status-style.scss'
import Spinner from '@/presentation/components/spinner/spinner'
import Context from '@/presentation/components/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { state } = useContext(Context)
  const { isLoading, mainError } = state
  return (
    <div className={Styles.errorWrap} data-testid="error-wrap">
      {isLoading && <Spinner className={Styles.spinner}/>}
      {mainError && <span className={Styles.error}>{mainError}</span>}
    </div>
  )
}

export default memo(FormStatus)
