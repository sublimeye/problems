// https://leetcode.com/problems/two-sum/
/**
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums: number[], target: number) {
  let d: { [key: number]: number } = {}

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    const pair = target - n
    if (d[pair] !== undefined) return [d[pair], i] // d[pair].concat(i)
    d[n] = i
  }
}

test('two sum', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
  expect(twoSum([3, 3], 6)).toEqual([0, 1])
})
