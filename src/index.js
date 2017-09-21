import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'

import store from './store'

// ========================================

const render = () => {
  ReactDOM.render(
    <App
      {...store.getState()}
    />,
    document.getElementById('root')
  )
}
store.subscribe(render)
render()