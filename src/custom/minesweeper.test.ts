function reveal(a: number[][], x: number, y: number): number {
  if (a[x][y] === 1) return 0
  const m = a.length
  const n = a[0].length
  const visited = new Set()

  const dfs = (i: number, j: number) => {
    if (i < 0 || j < 0 || i >= m || j >= n) return
    if (a[i][j] === 1) return
    const idx = i * n + j
    if (visited.has(idx)) return
    visited.add(idx)
    dfs(i - 1, j)
    dfs(i + 1, j)
    dfs(i, j - 1)
    dfs(i, j + 1)
  }

  dfs(x, y)
  return visited.size
}

class CC {
  private marked = new Set<number>()
  private ids: { [key: number]: number } = {}
  private count = 0
  private m = 0
  private n = 0

  constructor(a: number[][]) {
    this.m = a.length
    this.n = a[0].length

    for (let i = 0; i < this.m; i++) {
      for (let j = 0; j < this.n; j++) {
        const idx = i * this.n + j
        if (!this.marked.has(idx) && a[i][j] !== 1) {
          this.dfs(a, i, j)
          this.count++
        }
      }
    }
  }

  size() {
    return this.count
  }

  id(i: number, j: number): number {
    return this.ids[this.n * i + j]
  }

  private dfs(a: number[][], i: number, j: number): void {
    const m = this.m
    const n = this.n
    if (i < 0 || j < 0 || i >= m || j >= n) return

    const idx = i * n + j
    this.marked.add(idx)

    if (a[i][j] === 1) return
    this.ids[idx] = this.count
    ;[[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]].forEach(([x, y]) => {
      if (!this.marked.has(x * n + y)) {
        this.dfs(a, x, y)
      }
    })
  }
}

describe('minesweeper - reveal', () => {
  it('should count number of revealed', () => {
    const board = [
      [0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [0, 0, 0, 1, 0],
      [0, 0, 0, 0, 1],
    ]
    expect(reveal(board, 0, 0)).toEqual(10)
  })
  it('should return 0 if hit a bomb', () => {
    const board = [
      [0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [0, 0, 0, 1, 0],
      [0, 0, 0, 0, 1],
    ]
    expect(reveal(board, 1, 0)).toEqual(0)
  })
  it('should count amount of lakes', () => {
    const board = [
      [0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [0, 0, 0, 1, 0],
      [0, 0, 0, 0, 1],
    ]
    expect(reveal(board, 4, 0)).toEqual(7)
  })
})

describe('connected components in matrix / minesweeper', () => {
  it('should construct and calculate', () => {
    const board = [
      [0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [0, 0, 0, 1, 0],
      [0, 0, 0, 0, 1],
    ]

    const cc = new CC(board)
    expect(cc.size()).toEqual(2)
    expect(cc.id(0, 0)).toEqual(0)
    expect(cc.id(4, 1)).toEqual(1)
  })
})
