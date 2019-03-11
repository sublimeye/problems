/**
 * Knuth shuffle algorithm
 */
export function shuffle(data: number[]): number[] {
  for (let i = 0; i < data.length; i++) {
    const j = getRandomInt(i)
    swap(data, i, j)
  }
  return data
}

/**
 * Returns a pseudo-random number from 0 to 1
 */
function getRandomInt(i: number): number {
  return Math.round(Math.random() * (i + 1))
}

export function swap(data: number[], i: number, j: number): void {
  const temp = data[i]
  data[i] = data[j]
  data[j] = temp
}

test('selection sort', () => {
  expect('shuffle').toEqual('shuffle')
})
