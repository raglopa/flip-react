import React from 'react'
import './style.scss'
import { connect } from 'react-redux'

import Board from '../Board'
import TopList from '../TopList'
import GameModeSelector from '../GameModeSelector'

let App = () => (
  <div className="app">
    <div className="game-board">
      <Board/>
    </div>
    <div className="game-info">
      <GameModeSelector/>
      <TopList/>
    </div>
  </div>
)

App = connect()(App)

export default App
