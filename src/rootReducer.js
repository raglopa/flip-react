import { combineReducers } from 'redux'
import boardReducers from './components/Board/reducers'
import topListReducers from './components/TopList/reducers'
import gameModeReducers from './components/GameModeSelector/reducers'
import heroReducers from './components/Hero/reducers'

export default combineReducers({
  ...boardReducers,
  ...topListReducers,
  ...gameModeReducers,
  ...heroReducers
})
