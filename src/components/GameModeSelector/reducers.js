import { SELECT_GAME_MODE } from './actions'

import {} from '../utils'

const INITIAL_STATE = {
  gameModes: [4, 16, 24],
  selectedGameMode: 16
}

const gameMode = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_GAME_MODE: {
      const {gameMode} = action
      return {
        ...state,
        selectedGameMode: gameMode
      }
    }

    default:
      return state
  }
}

export default {
  gameMode
}

