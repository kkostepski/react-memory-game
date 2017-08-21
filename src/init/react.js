import React from 'react'
import ReactDOM from 'react-dom'

import registerServiceWorker from './registerServiceWorker'
import MainLayout from '../components/MainLayout'

ReactDOM.render(
  <MainLayout />,
  document.getElementById('root')
)

registerServiceWorker()
