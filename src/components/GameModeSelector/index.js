import React from 'react'
import { connect } from 'react-redux'
import './style.scss'

import { selectGameMode } from './actions'

let GameModeSelector = ({gameMode, onClick}) => (
  <div className='GameModeSelector tabs' >
    <ul >
      {gameMode.gameModes.map(mode => (
        <li className={gameMode.selectedGameMode === mode ? 'is-active' : ''} key={mode} >
          <a className='mode' onClick={() => onClick(mode)} >{mode}</a >
        </li >
      ))}
    </ul >
  </div >

)

GameModeSelector = connect(
  (state) => ({gameMode: state.gameMode}),
  (dispatch) => ({onClick: mode => dispatch(selectGameMode(mode))})
)(GameModeSelector)

export default GameModeSelector
