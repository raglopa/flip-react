import React from 'react'
import { connect } from 'react-redux'

import { selectGameMode } from './actions'

let GameModeSelector = ({gameMode, onClick}) => (
  <div>
    {gameMode.gameModes.map(mode => (
      <button key={mode}
        onClick={() => onClick(mode)}>{mode}</button>
    ))}
  </div>
)

GameModeSelector = connect(
  (state) => ({gameMode: state.gameMode}),
  (dispatch) => ({onClick: mode => dispatch(selectGameMode(mode))})
)(GameModeSelector)

export default GameModeSelector
