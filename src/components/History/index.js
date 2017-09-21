import React from 'react'

const History = ({history, jumpTo}) => {
  const moves = history.map((step, move) => {
    let desc = move ? 'Move #' + move : 'Game start'
    desc += step.match ? ' - match found' : ''
    desc += step.won ? ' - you won!' : ''

    return <li key={move}><a href="#" onClick={() => jumpTo(move)}>{desc}</a></li>
  })

  return <ol>{moves}</ol>
}

export default History