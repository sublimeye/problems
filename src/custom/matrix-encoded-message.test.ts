function decodeMessage2(matrix: string[][]): string {
  const col = matrix[0]
  let message = ''
  let row = 0
  let offset = 1

  for (let i = 0; i < col.length; i++) {
    if (!exists(matrix, row, i)) {
      offset = -offset
      row += 2 * offset
    }

    message += matrix[row][i]
    row += offset
  }

  return message
}

function exists(array: string[][], i: number, j: number): boolean {
  return array[i] !== undefined && array[i][j] !== undefined
}

function decodeMessage(matrix: string[][]): string {
  const rows = matrix.length
  const cols = matrix[0].length

  let row = 0
  let message = ''
  let next = 1

  for (let col = 0; col < cols; col++, row += next) {
    message += matrix[row][col]
    if (row === rows - 1) next = -1
    else if (row === 0) next = 1
  }
  return message
}


describe('decode message', () => {
  it('should decode message', () => {
    const array = [
      ['I', 'B', 'C', 'A', 'L', 'K', 'A'],
      ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
      ['G', 'H', 'O', 'E', 'L', 'A', 'D'],
    ]

    // 0+0, 1+7, 2+14, 3+7, 4+0, 5+7, 6+14, ...
    expect(decodeMessage(array)).toEqual('IROCLED')
  })
})
