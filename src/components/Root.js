import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import Header from './Header'
import Footer from './Footer'

const Root = ({store}) => (
  <Provider store={store} >
    <div className='Root'>
      <Header />
      <Router >
        <div className='content'>
          <Route path='/' component={App} />
        </div >
      </Router >
      <Footer />
    </div >
  </Provider >
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
