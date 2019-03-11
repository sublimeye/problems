import { swap, shuffle } from './helpers'
/**
 * Knuth shuffle algorithm
 */
export function quicksort(a: number[]): number[] {
  shuffle(a)
  sort(a, 0, a.length - 1)
  return a
}

export function select(a: number[], k: number): number {
  let lo = 0
  let hi = a.length - 1
  let j
  while (lo < hi) {
    j = partition(a, lo, hi)
    if (j > k) hi = j - 1
    else if (j < k) lo = j + 1
    else return a[k]
  }
  return a[k]
}

function sort(a: number[], lo: number, hi: number): void {
  // base case -> when hi reaches lo
  if (hi <= lo) return
  const j = partition(a, lo, hi)
  sort(a, lo, j - 1)
  sort(a, j + 1, hi)
}

function partition(a: number[], lo: number, hi: number): number {
  let i = lo
  let j = hi + 1
  let k = a[lo]

  while (true) {
    // scan i ----> while a[i] < k (move left->right while a[i] less than k)
    while (a[++i] < k) if (i === hi) break

    // scan j <---- while a[j] > k (move right<-left while a[j] more than k)
    while (k < a[--j]) if (j === lo) break

    if (i >= j) break
    swap(a, i, j)
  }

  swap(a, lo, j)
  return j
}

describe('quicksort test', () => {
  test('partition', () => {
    let a = [5, 1, 7, 6, 4, 2, 9]
    const j = partition(a, 0, a.length - 1)
    expect(j).toBe(3)
    expect(a).toEqual([4, 1, 2, 5, 6, 7, 9])
  })

  test('sort quick', () => {
    expect(quicksort([5, 8, 1, 9])).toEqual([5, 8, 1, 9].sort())
    expect(quicksort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5].sort())
    expect(quicksort([])).toEqual([].sort())
    expect(quicksort([0, 0, 0])).toEqual([0, 0, 0].sort())
  })

  test('select quick', () => {
    expect(select([7, 1, 3, 2, 6, 5, 4], 1)).toBe(2)
    expect(select([7, 1, 3, 2, 6, 5, 4], 0)).toBe(1)
    expect(select([7, 1, 3, 2, 6, 5, 4], 6)).toBe(7)
  })
})
