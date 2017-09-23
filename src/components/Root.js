import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter, Route } from 'react-router'
import App from './App'

const Root = ({store}) => (
  <Provider store={store}>
    <MemoryRouter>
      <div>
        <Route path='/' component={App}/>
      </div>
    </MemoryRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root