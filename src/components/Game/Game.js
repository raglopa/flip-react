import React from 'react'
import Board from '../Board/Board'

import {
  recalculateSquares,
  initState,
  calculateWin
} from './utils'

class Game extends React.Component {
  constructor () {
    super()

    this.state = initState()
  }

  handleClick = i => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    if (current.squares[i].isFlipped) return
    const {match, squares} = recalculateSquares(current.squares, i)
    const won = calculateWin(squares)

    this.setState({
      history: history.concat([{
        squares,
        match,
        won,
      }]),
      stepNumber: history.length,
    })
  }

  jumpTo = step => {
    this.setState({
      stepNumber: step,
    })
  }

  handleNewGame = () => {
    this.setState(initState())
  }

  render () {
    const history = this.state.history
    const current = history[this.state.stepNumber]

    const moves = history.map((step, move) => {
      let desc = move ? 'Move #' + move : 'Game start'
      desc += step.match ? ' - match found' : ''
      desc += step.won ? ' - you won!' : ''

      return (
        <li key={move}><a href="#" onClick={() => this.jumpTo(move)}>{desc}</a></li>
      )
    })
    return (
      <div className="game">
        <div className="game-board">
          <Board onClick={i => this.handleClick(i)}
                 squares={current.squares}/>
        </div>
        <div className="game-info">
          <div>
            <button onClick={this.handleNewGame}>New game</button>
          </div>
          <div>
            <input onChange={handleCheatModeChange} type="checkbox"/> Cheat mode
          </div>

          <ol>{moves}</ol>
        </div>
      </div>
    )
  }
}

export default Game