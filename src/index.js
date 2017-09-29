import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import Root from './components/Root'
import configureStore from './configureStore'

import 'font-awesome/scss/font-awesome.scss'

const store = configureStore()

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)
