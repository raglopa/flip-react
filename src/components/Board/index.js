import React from 'react'
import Square from './Square'
import { connect } from 'react-redux'
import './style.css'
import { reStructure } from '../utils'
import { triggerSquare } from './actions'

const mapStateToProps = state => ({
  board: state.board
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (id) => { dispatch(triggerSquare(id)) }
})

let Board = ({board, onClick}) => {
  const {squares, won} = board
  const squareTable = reStructure(squares)
  return (
    <div>
      {won && <div>you won.</div>}
      {squareTable.map((row, i) =>
        <div className="board-row"
             key={i}>
          {row.map(square =>
            <Square
              key={square.id}
              {...square}
              onClick={() => onClick(square.id)}
            />)}
        </div>
      )}
    </div>)
}

Board = connect(mapStateToProps, mapDispatchToProps)(Board)

export default Board
