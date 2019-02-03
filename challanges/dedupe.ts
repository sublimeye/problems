import expect from 'ceylon'

console.log('dedupe')

export function dedupe(input: number[]): number[] {
  // 9:26
  return Array.from(new Set(input))
  // 9:29
  // todo: non-js approach** manual algortihm
  // 11:26
  // another way would be to
  /**
   * iterate over an array
   * put number into Set
   * iterate over Set and put number into new array
   * n * logn * n ~ n logn
   */
}

const s1 = [3, 1, 5, 2, 3, 5, 1, 7]
expect(dedupe(s1)).toEqual([3, 1, 5, 2, 7])
