/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid: number[][]): number {
  // should be solved with DFC
  // build connected components in the graph
  // count connected components and keep track of the largest one
  // lecutre 4.2
}

test.skip('find largest k number', () => {
  const island1 = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ]
  const island2 = [[0, 0, 0, 0, 0, 0, 0, 0]]

  expect(maxAreaOfIsland(island1)).toEqual(6)
  expect(maxAreaOfIsland(island2)).toEqual(0)
})
