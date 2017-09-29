import React from 'react'
import './style.scss'
import { connect } from 'react-redux'

import Board from '../Board'
import TopList from '../TopList'
import GameModeSelector from '../GameModeSelector'
import Header from '../Header'
import Footer from '../Footer'

let App = () => (
  <div className='app' >
    <Header />
    <div className='content' >
      <div className='game-board' >
        <GameModeSelector />
        <Board />
        <TopList />
      </div >
    </div >
    <Footer />
  </div >
)

App = connect()(App)

export default App
