// https://leetcode.com/problems/maximum-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums: number[]): number {
  let prev = 0
  let max = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < nums.length; ++i) {
    prev = Math.max(prev + nums[i], nums[i])
    max = Math.max(max, prev)
  }
  return max
}

describe('max subarray', () => {
  test('calc sum of max subarray', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6)
    // expect(maxSubArray([-1, -2])).toEqual(-1)
    expect(maxSubArray([-2, -1])).toEqual(-1)
    expect(maxSubArray([8, -19, 5, -4, 20])).toEqual(21)
  })
})
