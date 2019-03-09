/**
 * Insertion Sort
 * - For Randomly Ordered
 * O(1/4 n2)
 * Swaps (1/4 n2)
 *
 * - For sorted algorithm
 * - does N-1 iterations
 * - 0 swaps
 *
 * Number of swaps -> equals to number of inversions (elements "out of place")
 *
 */
function sort(data: number[]): number[] {
  // iterate over array (with i and j)
  // iterate swapping until j >= i
  // if next element (j) < (i) swap with previous
  for (let i = 1; i < data.length; i++) {
    for (let j = i; j > 0; j--) {
      if (data[j - 1] < data[j]) {
        swap(data, j, j - 1)
      }
    }
  }

  return data
}

function swap(data: number[], i: number, j: number): void {
  const temp = data[i]
  data[i] = data[j]
  data[j] = temp
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
