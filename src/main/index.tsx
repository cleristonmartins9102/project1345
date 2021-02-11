import React from 'react'
import ReactDOM from 'react-dom'

import { Router } from '@/presentation/components'
import '@/presentation/styles/global.scss'

// const JSX = (
//   <div>
//     <h1>Hello World</h1>
//     <p>Lets render this to the DOM</p>
//   </div>
// )

ReactDOM.render(
  <Router />,
  document.getElementById('main')
)
