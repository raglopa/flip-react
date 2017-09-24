import { shuffle } from 'lodash'
import { v4 } from 'node-uuid'

const DEFAULT_SQUARES = 8

export const reStructure = (array = []) => {
  const n = Math.floor(Math.sqrt(array.length))
  let out = []
  let tmp = []

  array.forEach(item => {
    tmp = tmp.concat([item])
    if (tmp.length === n) {
      out = out.concat([tmp])
      tmp = []
    }
  })

  return out
}

export const generateSquares = (amount = DEFAULT_SQUARES) => {
  if (amount < 4 || amount > 64) amount = DEFAULT_SQUARES
  let pairs = Math.floor(amount / 2)
  pairs = pairs % 2 !== 0 ? pairs - 1 : pairs
  const letters = shuffle([
    'angularjs',
    'css3',
    'html5',
    'javascript',
    'less',
    'lodash',
    'nodejs',
    'npm',
    'react',
    'redux',
    'sass',
    'webpack'
  ]).slice(0, Math.floor(pairs))
  const doubledLetters = letters
    .map(l => [l, l])
    .reduce((item, acc) => acc.concat(item))

  const shuffledLetters = shuffle(doubledLetters)
  return new Array(pairs * 2).fill(null).map((v, i) => (
    {
      isFlipped: false,
      isFound: false,
      value: shuffledLetters[i],
      id: i
    }
  ))
}

export const calculateWin = (squares) => squares.filter(square => !square.isFound).length === 0

/**
 * Flips one square by index
 * @param squares: array of squares
 * @param index: index of square to flip
 * @returns {Array}: new array of squares with the flipped square
 */
export const flipSquare = (squares, index) => [
  ...squares.slice(0, index),
  {
    ...squares[index],
    isFlipped: !squares[index].isFlipped
  },
  ...squares.slice(index + 1, squares.length)
]

export const getFlippedAndNotFoundSquares = squares => squares.filter(square => square.isFlipped && !square.isFound)
export const isSquareMatch = squares => squares[0].value === squares[1].value
export const flipBackAllNotFound = squares => squares.map(square => Object.assign({}, square, {isFlipped: square.isFound}))
export const markFoundFlippedSquares = squares => squares.map(square => Object.assign({}, square, {isFound: square.isFlipped}))
export const recalculateSquares = (squares, i) => {
  let newSquares = squares.slice()
  let match = false
  if (!newSquares[i].isFlipped) {

    let flippedAndNotFoundSquares = getFlippedAndNotFoundSquares(newSquares)
    match = flippedAndNotFoundSquares.length === 2 && isSquareMatch(flippedAndNotFoundSquares)

    if (flippedAndNotFoundSquares.length < 2) newSquares = flipSquare(newSquares, i)

    if (flippedAndNotFoundSquares.length === 2) {
      newSquares = match ? flipSquare(newSquares, i) : flipBackAllNotFound(newSquares)
    }

    flippedAndNotFoundSquares = getFlippedAndNotFoundSquares(newSquares)
    match = flippedAndNotFoundSquares.length === 2 && isSquareMatch(flippedAndNotFoundSquares)

    if (match) newSquares = markFoundFlippedSquares(newSquares)
  } else {
    newSquares = flipBackAllNotFound(newSquares)
  }

  return newSquares
}
