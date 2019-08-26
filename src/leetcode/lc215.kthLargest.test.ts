import { shuffle, swap } from '../helpers'
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(a: number[], k: number): number | undefined {
  const l = a.length - 1
  if (l < k) return undefined
  return a.sort()[a.length - k]
}

/**
 * Partition array so that:
・* Entry a[j] is in place.
・* No larger entry to the left of j. ・No smaller entry to the right of j.
 * Proposition. Quick-select takes linear time on average.
 * @param a {Array}
 * @param k {Number}
 */
function select(a: number[], k: number) {
  // partition
  // 2 larest or 2 smallest
  // array 10 items

  // largest
  k = a.length - k
  let lo = 0
  let hi = a.length - 1
  while (hi > lo) {
    let j = partition(a, lo, hi)
    if (j < k) lo = j + 1
    else if (j > k) hi = j - 1
    else return a[k]
  }
  return a[k]
}

// this is a quicksort partition algorithm implementation
// TODO: implement at home
function partition(a: number[], lo: number, hi: number): number {
  let i = lo
  let j = hi + 1
  let comp = a[lo]

  while (true) {
    while (a[++i] < comp) {
      if (i === hi) break
    }

    while (comp < a[--j]) {
      if (j === lo) break
    }

    if (i >= j) break
    swap(a, i, j)
  }

  swap(a, lo, j)
  return j
}

test.skip('basic find k', () => {
  expect(select([3, 2, 1], 1)).toEqual(3)
})

test.skip('find largest k number', () => {
  expect(select([3, 2, 1, 5, 6, 4], 2)).toEqual(5)
  expect(select([5, 5, 5, 3, 3, 3, 1], 2)).toEqual(3)
  expect(select([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toEqual(4)
})
