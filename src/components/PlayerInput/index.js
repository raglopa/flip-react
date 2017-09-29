import React from 'react'
import { connect } from 'react-redux'
import './style.scss'

import { changeName } from './actions'

let PlayerInput = ({player, onChange}) => (
  <div className='PlayerInput' >
    <div className='field' >
      <div className='control has-icons-left' >
        <input className='input ' type='text' placeholder='Tell me your name' onChange={(event) => onChange(event.target.value)} />
        <span className='icon is-small is-left' >
          <i className='fa fa-user' />
        </span >
      </div >
    </div >
  </div >
)

PlayerInput = connect(
  (state) => ({player: state.player}),
  (dispatch) => ({onChange: name => dispatch(changeName(name))})
)(PlayerInput)

export default PlayerInput
