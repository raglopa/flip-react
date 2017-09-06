import React from 'react'
import './Game.css'
import Board from '../Board/Board'

import {
  recalculateSquares,
  generateSquares,
  calculateWin
} from './utils'

import { withStateHandlers } from 'recompose'

const initState = () => ({
  history: [{
    squares: generateSquares(16),
    match: false,
    won: false
  }],
  stepNumber: 0
})

const Game = ({handleClick, handleNewGame, jumpTo, history, stepNumber}) => {

  const current = history[stepNumber]
  const moves = history.map((step, move) => {
    let desc = move ? 'Move #' + move : 'Game start'
    desc += step.match ? ' - match found' : ''
    desc += step.won ? ' - you won!' : ''

    return <li key={move}><a href="#" onClick={() => jumpTo(move)}>{desc}</a></li>
  })
  
  return (
    <div className="game">
      <div className="game-board">
        <Board
          onClick={i => handleClick(i)}
          squares={current.squares}
        />
      </div>
      <div className="game-info">
        <button onClick={handleNewGame}>New game</button>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

const handleNewGame = () => () => initState()
const jumpTo = () => step => ({stepNumber: step})
const handleClick = ({history, stepNumber}) => i => {
  const newHistory = history.slice(0, stepNumber + 1)
  const current = newHistory[newHistory.length - 1]
  if (current.squares[i].isFlipped) return
  const {match, squares} = recalculateSquares(current.squares, i)
  const won = calculateWin(squares)

  return {
    history: newHistory.concat([Object.assign({}, current, {
      squares,
      match,
      won,
    })]),
    stepNumber: newHistory.length,
  }
}

const enhance = withStateHandlers(initState(), {
    handleClick,
    handleNewGame,
    jumpTo
  }
)

export default enhance(Game)
