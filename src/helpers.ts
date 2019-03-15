/**
 * Swaps elements with index i, j in an array
 * Mutates original array
 * @param data M
 * @param i
 * @param j
 */
export function swap(data: number[], i: number, j: number): void {
  const temp = data[i]
  data[i] = data[j]
  data[j] = temp
}

export function swap2d(
  data: number[][],
  r1: number,
  c1: number,
  r2: number,
  c2: number,
): void {
  const temp = data[r1][c1]
  data[r1][c1] = data[r2][c2]
  data[r2][c2] = temp
}

/**
 * Knuth shuffle algorithm
 */
export function shuffle(data: number[]): number[] {
  for (let i = 0; i < data.length; i++) {
    const j = Math.round(Math.random() * i)
    swap(data, i, j)
  }
  return data
}

test('mutating "in place" swap', () => {
  let a1 = [1, 5, 10]
  let a2 = [2, 4, 6, 8]

  swap(a1, 0, 2)
  expect(a1).toEqual([10, 5, 1])
  swap(a2, 1, 2)
  expect(a2).toEqual([2, 6, 4, 8])
})
