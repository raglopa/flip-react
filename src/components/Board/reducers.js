import { TRIGGER_SQUARE, START_NEW_GAME, SELECT_GAME_MODE } from './actions'

import {
  recalculateSquares,
  generateSquares,
  calculateWin
} from '../utils'

const generateNewGame = (mode = 16) => ({
  squares: generateSquares(mode),
  steps: 0,
  won: false
})

const INITIAL_STATE = generateNewGame()

const board = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case START_NEW_GAME: {
      return generateNewGame()
    }

    case SELECT_GAME_MODE: {
      const {gameMode} = action
      console.log('mode', gameMode)
      return generateNewGame(gameMode)
    }

    case TRIGGER_SQUARE: {
      const {squares, steps} = state
      const {index} = action
      const newSquares = recalculateSquares(squares, index)
      const won = calculateWin(newSquares)
      return {
        squares: newSquares,
        won,
        steps: steps + 1
      }
    }

    default:
      return state
  }
}

export default {
  board
}

