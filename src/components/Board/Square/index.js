import React from 'react'
import './style.css'
import classNames from 'classnames'

const Square = ({
                  onClick,
                  isFound,
                  isFlipped,
                  value
                }) => {
  const squareClass = classNames({
    square: true,
    found: isFound
  })

  return (
    <div className={squareClass}>
      {isFlipped
        ? (
          <div>
            <span>{value}</span>
          </div>
        ) : (
          <div onClick={onClick}>
            <span style={{opacity: 0.1}}>{value}</span>
          </div>
        )
      }
    </div>
  )
}

export default Square
