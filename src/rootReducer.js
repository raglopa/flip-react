import { combineReducers } from 'redux'
import appReducers from './components/App/reducers'

export default combineReducers({
  ...appReducers
})