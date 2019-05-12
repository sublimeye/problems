type Grid = string[][]
/**
 * Intuition
 * Treat the 2d grid map as an undirected graph and there is an edge between two horizontally
 * or vertically adjacent nodes of value '1'.
 * Algorithm
 * Linear scan the 2d grid map, if a node contains a '1', then it is a root node that triggers
 * a Depth First Search. During DFS, every visited node should be set as '0' to mark as visited
 * node. Count the number of root nodes that trigger DFS, this number would be the number of islands
 * since each DFS starting at some root identifies an island.
 */

/**
 * @param {character[][]} grid
 * @return {number}
 *
 * Approach uses DFS walking and marking iterated items with '0' - "clearing" them
 * The outer loop iterate over the M x N matrix
 *
 * The DFSWalker goes recursively right, left, up, bottom (all directions in any order)
 * If grid element is out of bounds - return
 * if grid element is not 1 - return
 * else - mark as '0' and recursively re-iterate
 */
var numIslands = function(grid: Grid) {
  // const g = Array.from(grid) // if we can't modify the original array creat a copy
  const g = grid
  const n = g.length
  if (!n) return 0
  const m = g[0].length
  let count = 0
  // get horizontal and vertical lengths

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (g[i][j] === '1') {
        DFSMark(g, i, j)
        count++
      }
    }
  }
  return count
}

function DFSMark(grid: Grid, i: number, j: number) {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[0].length ||
    grid[i][j] === '0'
  )
    return
  grid[i][j] = '0'
  DFSMark(grid, i + 1, j)
  DFSMark(grid, i - 1, j)
  DFSMark(grid, i, j + 1)
  DFSMark(grid, i, j - 1)
}

test.skip('islands', () => {})
