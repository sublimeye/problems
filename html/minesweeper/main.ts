class CC {
  marked: boolean[] = []
  ids: number[] = []
  data: number[] = []
  count: number = 0
  size: number = 0

  constructor(data: number[]) {
    this.data = data
    this.size = Math.sqrt(data.length)
    if (!Number.isInteger(this.size)) throw new Error('must be int')

    for (let i = 0; i < data.length; i++) {
      if (!this.marked[i] && this.data[i] === 0) {
        this.dfs(i)
        this.count++
      }
    }
  }

  dfs(i: number) {
    this.marked[i] = true
    this.ids[i] = this.count
    for (const v of this.adj(this.data, i, this.size)) {
      if (!this.marked[v] && this.data[i] === 0) {
        this.dfs(v)
      }
    }
  }

  /**
   * 0   1   2   3
   * 4   5   6   7
   * 8   9   10  11
   * 12  13  14  15
   * @param data
   * @param i
   * @param size
   */
  adj(data: number[], i: number, size: number): Iterable<number> {
    const len = data.length
    const initCol = i % size
    const initRow = Math.trunc(i / size)
    const neighbours = [i - size, i + size, i - 1, i + 1]
    return neighbours.filter(v => {
      const col = v % size
      const row = Math.trunc(v / size)
      const pick =
        data[v] !== 1 &&
        v >= 0 &&
        v < len &&
        !(initRow !== row && initCol !== col)
      return pick
    })
  }
}

function main() {
  const board = [
    0,
    1,
    0,
    0,
    0,
    1,
    1,
    0,
    1,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    1,
    0,
    0,
    0,
  ]
  const root = document.querySelector('#root')
  if (!root) return

  const boardElement = buildBoard(board, root)
  const c = new CC(board)
  console.log(`c`, c)

  const cells = boardElement.querySelectorAll('div')
  const colors = ['cyan', 'magenta', 'red', 'lightblue', 'orange', 'pink']

  Array.from(cells).forEach((v, i) => {
    v.style.backgroundColor = colors[c.ids[i]] || 'white'
  })
}

main()

function buildBoard(board: number[], container: Element): Element {
  const boardElement = document.createElement('div')
  boardElement.style.display = 'grid'
  boardElement.style.gridGap = '10px'
  boardElement.style.gridTemplateColumns = 'repeat(5, 20px)'

  for (const cell of board) {
    let cellEl = document.createElement('div')
    cellEl.innerText = `${cell}`
    boardElement.appendChild(cellEl)
  }

  return container.appendChild(boardElement)
}
