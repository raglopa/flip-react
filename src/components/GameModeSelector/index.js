import React from 'react'
import { connect } from 'react-redux'
import './style.scss'

import { selectGameMode } from './actions'

const mapStateToProps = state => ({gameMode: state.gameMode})
const mapDispatchToProps = dispatch => ({onClick: mode => dispatch(selectGameMode(mode))})

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
  mapStateToProps,
  mapDispatchToProps
)(GameModeSelector)

export default GameModeSelector
