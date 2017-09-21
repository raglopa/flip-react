const DEFAULT_SQUARES = 8

export const calculateWin = (squares) => squares.filter(square => !square.isFound).length === 0
export const flipSquare = (squares, i) => {
  const squares_ = squares.slice()
  squares_[i] = Object.assign({}, squares_[i], {isFlipped: !squares_[i].isFlipped})
  return squares_
}
export const generateSquares = (amount = DEFAULT_SQUARES) => {
  if (amount < 4 || amount > 64) amount = DEFAULT_SQUARES
  let pairs = Math.floor(amount / 2)
  pairs = pairs % 2 !== 0 ? pairs - 1 : pairs
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'].slice(0, Math.floor(pairs))
  const doubledLetters = letters
    .map(l => [l, l])
    .reduce((item, acc) => acc.concat(item))

  const shuffledLetters = shuffleArray(doubledLetters)
  return new Array(pairs * 2).fill(null).map((v, i) => (
    {
      isFlipped: false,
      isFound: false,
      value: shuffledLetters[i],
      id: i
    }
  ))
}

export const shuffleArray = array => {
  const shuffledArray = array.slice()
  let currentIndex = shuffledArray.length, temporaryValue, randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = shuffledArray[currentIndex]
    shuffledArray[currentIndex] = shuffledArray[randomIndex]
    shuffledArray[randomIndex] = temporaryValue
  }

  return shuffledArray
}

export const getFlippedAndNotFoundSquares = squares => squares.filter(square => square.isFlipped && !square.isFound)
export const isSquareMatch = squares => squares[0].value === squares[1].value
export const flipBackAllNotFound = squares => squares.map(square => Object.assign({}, square, {isFlipped: square.isFound}))
export const markFoundFlippedSquares = squares => squares.map(square => Object.assign({}, square, {isFound: square.isFlipped}))
export const recalculateSquares = (sq, i) => {
  let squares = sq.map(square => square)
  let match = false
  if (!squares[i].isFlipped) {

    let flippedAndNotFoundSquares = getFlippedAndNotFoundSquares(squares)
    match = flippedAndNotFoundSquares.length === 2 && isSquareMatch(flippedAndNotFoundSquares)
    if (flippedAndNotFoundSquares.length < 2) squares = flipSquare(squares, i)

    if (flippedAndNotFoundSquares.length === 2) {

      if (match) {
        squares = flipSquare(squares, i)
      } else {
        squares = flipBackAllNotFound(squares)
      }
    }

    flippedAndNotFoundSquares = getFlippedAndNotFoundSquares(squares)
    match = flippedAndNotFoundSquares.length === 2 && isSquareMatch(flippedAndNotFoundSquares)

    if (match) squares = markFoundFlippedSquares(squares)
  } else {
    squares = null
  }

  return {match, squares}
}
