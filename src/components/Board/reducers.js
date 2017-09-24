import { TRIGGER_SQUARE, SELECT_GAME_MODE } from './actions'

import {
  recalculateSquares,
  generateSquares,
  calculateWin
} from '../utils'

const initializaState = (mode = 16) => ({
  squares: generateSquares(mode),
  steps: 0,
  won: false,
  topList: {}
})

const INITIAL_STATE = initializaState()

const board = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case SELECT_GAME_MODE: {
      const {gameMode} = action
      return {
        ...state,
        squares: generateSquares(gameMode),
        steps: 0,
        won: false
      }
    }

    case TRIGGER_SQUARE: {
      const {steps} = state
      let {squares, topList} = state
      const {index} = action
      squares = recalculateSquares(squares, index)
      const newSteps = steps + 1
      const won = calculateWin(squares)

      if (won && (!topList[squares.length] || newSteps < topList[squares.length])) {
        topList = {
          ...topList,
          [squares.length]: newSteps
        }
      }

      return {
        ...state,
        squares,
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

