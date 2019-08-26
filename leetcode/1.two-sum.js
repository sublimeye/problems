/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let d = {}

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    const pair = target - n
    if (d[pair] !== undefined) return [d[pair], i] // d[pair].concat(i)
    d[n] = i
  }
}
