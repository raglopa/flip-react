import React from 'react'
import './style.css'

import Board from '../Board'
import TopList from '../TopList'
import GameModeSelector from '../GameModeSelector'

const App = ({}, {store}) => (
  <div className="app">
    <div className="game">
      <div className="game-board">
        <Board/>
      </div>
      <div className="game-info">
        <GameModeSelector/>
        <TopList/>
      </div>
    </div>
  </div>
)

export default App
