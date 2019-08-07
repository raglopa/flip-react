import { createActions, handleActions } from "redux-actions"

const defaultState = {
  gameModes: [4, 16, 24],
  selectedGameMode: 16
}

export const SELECT_GAME_MODE = "SELECT_GAME_MODE"

export const { selectGameMode } = createActions({}, SELECT_GAME_MODE)

export default handleActions(
  {
    [SELECT_GAME_MODE]: (state, { payload }) => ({
      ...state,
      selectedGameMode: payload
    })
  },
  defaultState
)
