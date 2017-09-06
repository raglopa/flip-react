import {
  recalculateSquares,
  markFoundFlippedSquares,
  generateSquares,
  shuffleArray,
  calculateWin,
  getFlippedAndNotFoundSquares,
  isSquareMatch,
  flipBackAllNotFound,
  flipSquare
} from './utils'

describe('markFoundFlippedSquares', () => {
  test('should be tested', () => {
    expect(true).toBe(false)
  })
})

describe('generateSquares', () => {
  test('should be tested', () => {
    expect(true).toBe(false)
  })
})

describe('shuffleArray', () => {
  test('should be tested', () => {
    expect(true).toBe(false)
  })
})

describe('calculateWin', () => {
  test('should return true if all squares are flipped', () => {
    let squares = [
      {isFound: true},
      {isFound: true},
      {isFound: true},
    ]
    expect(calculateWin(squares)).toBe(true)
    squares = squares.concat({isFound: false})
    expect(calculateWin(squares)).toBe(false)
  })
})

describe('getFlippedAndNotFoundSquares', () => {
  test('should be tested', () => {
    expect(true).toBe(false)
  })
})

describe('isSquareMatch', () => {
  test('should return true if the squares match', () => {
    const caseNotMatch = [
      {value: 'A'},
      {value: 'B'},
      ]
    const caseMatch = [
      {value: 'A'},
      {value: 'A'}
      ]

    expect(isSquareMatch(caseNotMatch)).toBe(false)
    expect(isSquareMatch(caseMatch)).toBe(true)
  })
})

describe('flipBackAllNotFound', () => {
  test('should be tested', () => {
    expect(true).toBe(false)
  })
})

describe('initState', () => {
  test('should be tested', () => {
    expect(true).toBe(false)
  })
})

describe('flipSquare', () => {
  test.only('should return squares with the toggled square', () => {
    const squares = [
      {isFlipped: false},
      {isFlipped: false},
      {isFlipped: true},
      {isFlipped: false}
    ]

    let expected = [
      {isFlipped: false},
      {isFlipped: false},
      {isFlipped: false},
      {isFlipped: true}
    ]

    let changed = {foo:'bar'}

    expect(changed).toEqual(expected)
    expect(flipSquare(squares, 2)).not.toEqual(squares)
  })
})

describe('recalculateSquares', () => {
  test('should be tested', () => {
    expect(true).toBe(false)
  })
})
