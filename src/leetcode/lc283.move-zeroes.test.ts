/**
 * Given an array nums, write a function to move
 * all 0's to the end of it while maintaining the
 * relative order of the non-zero elements.
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums: number[]): number[] {
  let pos = 0
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count++
      continue
    } else if (count > 0) {
      nums[pos] = nums[i]
      pos++
    } else {
      pos++
    }
  }

  while (count--) {
    nums[nums.length - 1 - count] = 0
  }

  return nums
}

/**
 * 1 0 1 (p0, c0, i0)
 * 1 0 1 (p0, c1, i1)
 * 1 0 1 ()
 */

test('selection sort', () => {
  expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0])
  expect(moveZeroes([1, 0, 1])).toEqual([1, 1, 0])
})
