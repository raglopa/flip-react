import React from 'react'
import Square from '../Square'
import './style.css'
import { reStructure } from './utils'

const Board = ({squares, onSquareClick}) => {
  const squareTable = reStructure(squares)
  return (
    <div>
      {squareTable.map((row, i) =>
        <div className="board-row" key={i}>
          {row.map(square => <Square
            key={square.id}
            {...square}
            onClick={() => onSquareClick(square.id)}
          />)}
        </div>
      )}
    </div>
  )
}

export default Board
