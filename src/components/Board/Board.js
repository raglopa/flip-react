import React from 'react'
import Square from '../Square/Square'
import './Board.css'
import { reStructure } from './utils'

const Board = ({squares, onClick}) => (
  <div>
    {reStructure(squares).map((row, i) =>
      <div className="board-row" key={i}>
        {row.map(square => <Square
          key={square.id}
          value={square}
          onClick={() => onClick(square.id)}
        />)}
      </div>
    )}
  </div>
)

export default Board
