import { swap2d } from './helpers'
/**
 * @url https://leetcode.com/problems/rotate-image/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(m: number[][]): number[][] {
  if (!m || !m.length) return []
  // const result = []
  const n = m.length
  for (let row = 0; row < (n + 1) / 2; row++) {
    const endRow = n - row - 1
    for (let col = row; col < endRow; col++) {
      const endCol = n - col - 1

      const temp = m[row][col]
      // tl = bl
      m[row][col] = m[endCol][row]
      // bl = br
      m[endCol][row] = m[endRow][endCol]
      // br = tr
      m[endRow][endCol] = m[col][endRow]
      // tr = temp (ex tl)
      m[col][endRow] = temp
    }
  }
  return m
}

var rotateRight2 = function(m: number[][] = []): number[][] {
  m.reverse()
  for (let i = 0; i < m.length; ++i) {
    for (let j = i + 1; j < m.length; ++j) {
      swap2d(m, i, j, j, i)
    }
  }
  return m
}

describe('rotate matrix', () => {
  test('should handle empty matrix', () => {
    expect(rotate([])).toEqual([])
  })

  test('rotate 8x8', () => {
    const input = [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ]
    const output = [
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ]
    expect(rotate(input)).toEqual(output)
  })

  test('rotate right 2', () => {
    const input = [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ]
    const output = [
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ]
    expect(rotate(input)).toEqual(output)
  })

  test('rotate 3x3', () => {
    const input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    const output = [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
    expect(rotate(input)).toEqual(output)
  })

  test('rotate 3x3', () => {
    const input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    const output = [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
    expect(rotateRight2(input)).toEqual(output)
  })
})
