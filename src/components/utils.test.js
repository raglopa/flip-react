import {
  recalculateSquares,
  markFoundFlippedSquares,
  generateSquares,
  calculateWin,
  getFlippedAndNotFoundSquares,
  isSquareMatch,
  flipBackAllNotFound,
  flipSquare
} from "./utils"
/*
describe('markFoundFlippedSquares', () => {
  test('should be tested', () => {
    expect(true).toBe(false)
  })
})

describe('generateSquares', () => {
  test('should be tested', () => {
    expect(true).toBe(false)
  })
}) */

describe("calculateWin", () => {
  test("should return true if all squares are flipped", () => {
    expect(
      calculateWin([{ isFound: true }, { isFound: true }, { isFound: true }])
    ).toBe(true)

    expect(
      calculateWin([{ isFound: true }, { isFound: true }, { isFound: false }])
    ).toBe(false)
  })
})
/*
describe('getFlippedAndNotFoundSquares', () => {
  test('should be tested', () => {
    expect(true).toBe(false)
  })
}) */

describe("isSquareMatch", () => {
  test("should return true if the squares match", () => {
    const caseNotMatch = [{ value: "A" }, { value: "B" }]
    const caseMatch = [{ value: "A" }, { value: "A" }]

    expect(isSquareMatch(caseNotMatch)).toBe(false)
    expect(isSquareMatch(caseMatch)).toBe(true)
  })
})

/* describe('flipBackAllNotFound', () => {
  test('should be tested', () => {
    expect(true).toBe(false)
  })
})

describe('initState', () => {
  test('should be tested', () => {
    expect(true).toBe(false)
  })
}) */

describe("flipSquare", () => {
  test("should return squares with the flipped square", () => {
    const squares = [
      { isFlipped: false },
      { isFlipped: false },
      { isFlipped: false },
      { isFlipped: false }
    ]

    let expected = [
      { isFlipped: false },
      { isFlipped: false },
      { isFlipped: true },
      { isFlipped: false }
    ]

    let result = flipSquare(squares, 2)
    expect(result).toEqual(expected)
  })
})

/*
describe('recalculateSquares', () => {
  test('should be tested', () => {
    expect(true).toBe(false)
  })
})
*/

import { reStructure, shuffleArray } from "./utils"
/*

describe('reStructure', ()=>{
  test('should be awesome', ()=>{
    expect(true).toBe(false)
  })
}) */
