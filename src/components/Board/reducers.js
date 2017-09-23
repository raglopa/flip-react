import { TRIGGER_SQUARE, START_NEW_GAME, SELECT_GAME_MODE } from './actions'

import {
  recalculateSquares,
  generateSquares,
  calculateWin
} from '../utils'

const generateNewGame = (mode = 16) => ({
  squares: generateSquares(mode),
  steps: 0,
  won: false,
  topList: {}
})

const INITIAL_STATE = generateNewGame()

const board = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case START_NEW_GAME: {
      return generateNewGame()
    }

    case SELECT_GAME_MODE: {
      const {gameMode} = action
      return {
        ...state,
        squares: generateSquares(gameMode),
        steps: 0
      }
    }

    case TRIGGER_SQUARE: {
      const {squares, steps} = state
      let {topList} = state
      const {index} = action
      const newSquares = recalculateSquares(squares, index)
      const newSteps = steps + 1
      const won = calculateWin(newSquares)

      if (won && (!topList[squares.length] || newSteps < topList[squares.length])) {
        topList = {
          ...topList,
          [squares.length]: newSteps
        }
      }

      return {
        ...state,
        squares: newSquares,
        won,
        steps: newSteps,
        topList
      }
    }

    default:
      return state
  }
}

export default {
  board
}

