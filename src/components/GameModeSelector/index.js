import React from 'react'
import { connect } from 'react-redux'
import './style.scss'

import { selectGameMode } from './actions'

let GameModeSelector = ({gameMode, onClick}) => (
  <div className='GameModeSelector' >
    <div className='tabs' >
      <ul >
        {gameMode.gameModes.map(mode => (
          <li className={gameMode.selectedGameMode === mode ? 'is-active' : ''} key={mode} >
            <a className='mode' onClick={() => onClick(mode)} >
              <span className='is-size-5' >{mode}</span >
            </a >
          </li >
        ))}
      </ul >
    </div >
  </div >
)

GameModeSelector = connect(
  (state) => ({gameMode: state.gameMode}),
  (dispatch) => ({onClick: mode => dispatch(selectGameMode(mode))})
)(GameModeSelector)

export default GameModeSelector
