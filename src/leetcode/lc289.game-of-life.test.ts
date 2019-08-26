/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  // live = < 2 neighbours - dead
  // live = 2-3 - alive
  // live = > 3 - dead
  // dead => 3 neighbours - alive
  const rows = board.length
  const cols = board[0].length
  const result = []

  function state(cell, neighbours) {
    if (!cell) {
      if (neighbours === 3) return 1
      return 0
    } else {
      if (neighbours < 2) return 0
      else if (neighbours === 2 || neighbours === 3) return 1
      else return 0
    }
  }

  function nb(board, row, col) {
    if (row < 0 || row > rows - 1 || col < 0 || col > cols - 1) return 0
    // if (board[row] === undefined) return 0
    // if (board[row][col] === undefined) return 0
    return board[row][col]
  }

  for (let row = 0; row < rows; row++) {
    let resultRow = []
    for (let col = 0; col < cols; col++) {
      let n =
        nb(board, row - 1, col - 1) +
        nb(board, row - 1, col) +
        nb(board, row - 1, col + 1) +
        nb(board, row, col - 1) +
        nb(board, row, col + 1) +
        nb(board, row + 1, col - 1) +
        nb(board, row + 1, col + 1) +
        nb(board, row + 1, col)
      resultRow.push(state(board[row][col], n))
    }
    result.push(resultRow)
  }

  return result
}
test('game of life', () => {
  expect(gameOfLife([[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]])).toEqual([
    [0, 0, 0],
    [1, 0, 1],
    [0, 1, 1],
    [0, 1, 0],
  ])
  expect(gameOfLife([[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]])).toEqual([
    [0, 0, 0],
    [1, 0, 1],
    [0, 1, 1],
    [0, 1, 0],
  ])
})
