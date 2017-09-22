import { combineReducers } from 'redux'
import boardReducers from './components/Board/reducers'
import topListReducers from './components/TopList/reducers'
import gameModeReducers from './components/GameModeSelector/reducers'

export default combineReducers({
  ...boardReducers,
  ...topListReducers,
  ...gameModeReducers
})