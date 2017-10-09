import React from 'react'
import Square from './Square'
import { connect } from 'react-redux'
import './style.scss'
import { reStructure } from '../utils'
import { triggerSquare } from './actions'

const mapStateToProps = state => ({
  board: state.board,
  player: state.player
})

let Board = ({ board, player, onClick }) => {
  const { squares } = board
  const squareTable = reStructure(squares)
  return (
    <div className={'Board'}>
      {squareTable.map((row, i) => (
        <div className='board-row' key={i}>
          {row.map(square => (
            <Square
              key={square.id}
              {...square}
              onClick={() => onClick(square.id, player.name)}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

Board = connect(mapStateToProps, { onClick: triggerSquare })(Board)

export default Board
