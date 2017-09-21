import React from 'react'
import store from '../../store'
import { startNewGame, triggerSquare, triggerHistoryJump } from './actions'
import './style.css'

import Board from '../Board'
import History from '../History'

const App = ({game}) => {
  const {squares} = game.history[game.stepNumber]
  return (
    <div className="app">
      <div className="game">
        <div className="game-board">
          <Board
            onSquareClick={i => {store.dispatch(triggerSquare(i))}}
            squares={squares}
          />
        </div>
        <div className="game-info">
          <button onClick={() => store.dispatch(startNewGame())}>New game</button>
          <History history={game.history} jumpTo={(step) => store.dispatch(triggerHistoryJump(step))}/>
        </div>
      </div>
    </div>
  )
}

export default App
