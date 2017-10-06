import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import Root from './components/Root'
import configureStore from './configureStore'
import ReactGA from 'react-ga'
import 'font-awesome/scss/font-awesome.scss'

ReactGA.initialize('UA-107710846-1')

const store = configureStore()

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)
