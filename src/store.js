import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'

import rootReducer from './rootReducer'

const logger = createLogger({})

export const makeStore = initialState => createStore(rootReducer, applyMiddleware(logger))
const store = makeStore()
export default store