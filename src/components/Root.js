import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import Readme from './Readme'
import Header from './Header'
import Footer from './Footer'

const Root = ({store}) => (
  <Provider store={store} >
    <div className='Root'>
      <Header />
      <Router >
        <div className='content'>
          <Route exact path='/' component={App} />
          <Route path='/readme' component={Readme} />
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
