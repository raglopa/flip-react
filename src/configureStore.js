import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { loadState, saveState } from './localStorage'
import { throttle } from 'lodash'
import rootReducer from './rootReducer'
import ga from './commons/middlewares/ga'

const configureStore = () => {
  const persistedState = loadState()

  const logger = createLogger({})

  const makeStore = initialState => createStore(rootReducer, persistedState, applyMiddleware(logger, ga))
  const store = makeStore()

  store.subscribe(throttle(() => {
    saveState(store.getState())
  }), 1000)

  return store
}
export default configureStore
