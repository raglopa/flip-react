import React from 'react'
import './style.css'

const Square = ({onClick, value}) => (
  <button
    className={'square ' + (value.isFound ? 'found' : '')}
    onClick={onClick}>
    {value.isFlipped &&
    <span>{value.value}</span>}
    {!value.isFlipped &&
    <span style={{opacity: 0.1}}>{value.value}</span>}
  </button>
)

export default Square
