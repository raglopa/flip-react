import React from 'react'
import './style.scss'
import { connect } from 'react-redux'

import Board from '../Board'
import TopList from '../TopList'
import GameModeSelector from '../GameModeSelector'

import Hero from '../Hero'

let App = () => (
  <div className='App' >
    <Hero />
    <div className='game-board' >
      <GameModeSelector />
      <Board />
      <TopList />
    </div >
  </div >
)

App = connect()(App)

export default App
