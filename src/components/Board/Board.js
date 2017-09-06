import React from 'react'
import Square from '../Square/Square'
import {reStructure} from './utils'

class Board extends React.Component {
  renderSquare (square) {
    return (
      <Square
        key={square.id}
        value={square}
        onClick={() => this.props.onClick(square.id)}
      />
    )
  }

  render () {
    const nxn = reStructure(this.props.squares)
    return (
      <div>
        {nxn.map((row, i) =>
          <div className="board-row" key={i}>
            {row.map(sq => this.renderSquare(sq))}
          </div>
        )}
      </div>
    )
  }
}

export default Board
