/**
 * Selection Sort
 * - Always quadratic time O(n2)
 * - Doesn't matter if array is fully sorted or not
 * - Makes only N swaps
 *
 *
 * - iterates over array (i)
 * - for each i find a minimum element in the rest of the array
 * - swaps i with found minimum
 * ... repeat
 * mutates incoming array
 */
function sort(data: number[]): number[] {
  for (let i = 0; i < data.length; i++) {
    swap(data, i, findMinimumIndex(data, i))
  }

  return data
}

/**
 * same as "my" original solution, but has a "builtin" find min method
 */
function sort_sed(data: number[]): number[] {
  const l = data.length
  let min: number
  for (let i = 0; i < l; i++) {
    min = i
    for (let j = i + 1; j < l; j++) {
      if (data[j] < data[min]) {
        min = j
      }
      swap(data, i, j)
    }
  }
  return data
}

function less(a: number, b: number): boolean {
  return a < b
}

function swap(data: number[], i: number, j: number): void {
  const temp = data[i]
  data[i] = data[j]
  data[j] = temp
}

function findMinimumIndex(data: number[], i: number): number {
  let min = i
  for (let j = i + 1; j < data.length; j++) {
    if (data[j] < data[min]) {
      min = j
    }
  }
  return min
}

test('selection sort', () => {
  const a1 = [5, 3, 2, 5]
  const a2: number[] = []
  const a3 = [1]
  const a4 = [1, 2, 3]
  const a5 = [3, 2, 1]
  expect(sort(a1)).toEqual(a1.sort())
  expect(sort(a2)).toEqual(a2.sort())
  expect(sort(a3)).toEqual(a3.sort())
  expect(sort(a4)).toEqual(a4.sort())
  expect(sort(a5)).toEqual(a5.sort())
})

test('selection sort sedwick', () => {
  const a1 = [5, 3, 2, 5]
  const a2: number[] = []
  const a3 = [1]
  const a4 = [1, 2, 3]
  const a5 = [3, 2, 1]
  expect(sort_sed(a1)).toEqual(a1.sort())
  expect(sort_sed(a2)).toEqual(a2.sort())
  expect(sort_sed(a3)).toEqual(a3.sort())
  expect(sort_sed(a4)).toEqual(a4.sort())
  expect(sort_sed(a5)).toEqual(a5.sort())
})
