import { combineReducers } from "redux"
import boardReducers from "./components/Board/reducers"
import topListReducers from "./components/TopList/reducers"
import gameMode from "./components/GameModeSelector/reducers"
import heroReducers from "./components/Hero/reducers"
import playerReducers from "./components/PlayerInput/reducers"
import headerReducers from "./components/Header/reducers"

export default combineReducers({
  ...boardReducers,
  ...topListReducers,
  gameMode,
  ...heroReducers,
  ...playerReducers,
  ...headerReducers
})
