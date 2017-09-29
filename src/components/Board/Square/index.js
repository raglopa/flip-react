import React from 'react'
import './style.scss'
import classNames from 'classnames'

const Square = ({
                  onClick,
                  isFound,
                  isFlipped,
                  value
                }) => {
  const squareClass = classNames({
    square: true,
    found: isFound,
    flipped: isFlipped
  })
  const divStyle = {
    backgroundImage: `url(${require('./images/' + value + '.png')})`
  }
  return (
    <div className={squareClass} onClick={onClick} >
      <div className={'inner'} style={divStyle} />
    </div >
  )
}

export default Square
