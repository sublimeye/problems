/*
 * @lc app=leetcode id=733 lang=javascript
 *
 * [733] Flood Fill
 *
 * https://leetcode.com/problems/flood-fill/description/
 *
 * algorithms
 * Easy (51.54%)
 * Total Accepted:    58.8K
 * Total Submissions: 113.8K
 * Testcase Example:  '[[1,1,1],[1,1,0],[1,0,1]]\n1\n1\n2'
 *
 *
 * An image is represented by a 2-D array of integers, each integer
 * representing the pixel value of the image (from 0 to 65535).
 *
 * Given a coordinate (sr, sc) representing the starting pixel (row and column)
 * of the flood fill, and a pixel value newColor, "flood fill" the image.
 *
 * To perform a "flood fill", consider the starting pixel, plus any pixels
 * connected 4-directionally to the starting pixel of the same color as the
 * starting pixel, plus any pixels connected 4-directionally to those pixels
 * (also with the same color as the starting pixel), and so on.  Replace the
 * color of all of the aforementioned pixels with the newColor.
 *
 * At the end, return the modified image.
 *
 * Example 1:
 *
 * Input:
 * image = [[1,1,1],[1,1,0],[1,0,1]]
 * sr = 1, sc = 1, newColor = 2
 * Output: [[2,2,2],[2,2,0],[2,0,1]]
 * Explanation:
 * From the center of the image (with position (sr, sc) = (1, 1)), all pixels
 * connected
 * by a path of the same color as the starting pixel are colored with the new
 * color.
 * Note the bottom corner is not colored 2, because it is not 4-directionally
 * connected
 * to the starting pixel.
 *
 *
 *
 * Note:
 * The length of image and image[0] will be in the range [1, 50].
 * The given starting pixel will satisfy 0  and 0 .
 * The value of each color in image[i][j] and newColor will be an integer in
 * [0, 65535].
 *
 */
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(a, sr, sc, color) {
  const visited = new Set()
  dfs(a, sr, sc, color, visited, a[sr][sc])
  return a
}

function dfs(a, sr, sc, color, visited, init) {
  a[sr][sc] = color
  visited.add(`${sr}${sc}`) // '11'

  for (let [r, c] of adj(a, sr, sc)) {
    // 0,1
    const key = `${r}${c}` // 01
    if (a[r][c] === init && !visited.has(key)) {
      dfs(a, r, c, color, visited, init)
    }
  }
  return a
}

// function* adj(a, r, c) {
//   for (let [i, j] of [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]]) {
//     if (a[i] !== undefined && a[i][j] !== undefined) yield [i, j]
//   }
// }
function* adj(a, r, c) {
  if (r > 0) yield [r - 1, c]
  if (r < a.length) yield [r + 1, c]

  if (c > 0) yield [r, c - 1]
  if (c < a[r].length) yield [r, c + 1]
}

var floodFill2 = function(a, sr, sc, color) {
  const m = a.length
  const n = a[0].length
  const oldColor = a[sr][sc]

  const ddfs = (i, j) => {
    if (i < 0 || j < 0 || i >= m || j >= n) return
    if (a[i][j] === color || a[i][j] !== oldColor) return

    a[i][j] = color

    ddfs(i + 1, j)
    ddfs(i - 1, j)
    ddfs(i, j + 1)
    ddfs(i, j - 1)
  }

  ddfs(sr, sc)
  return a
}

describe('flood', () => {
  it('fill', () => {
    const m = [[1, 1, 1], [1, 1, 0], [1, 0, 1]]
    expect(floodFill2(m, 1, 1, 2)).toEqual([[2, 2, 2], [2, 2, 0], [2, 0, 1]])
  })

  it('adj', () => {
    const m = [[1, 1, 1], [1, 1, 0], [1, 0, 1]]
    const it = adj(m, 1, 1)
    expect(it.next().value).toEqual([0, 1])
    expect(it.next().value).toEqual([2, 1])
    expect(it.next().value).toEqual([1, 0])
    expect(it.next().value).toEqual([1, 2])
  })
})
