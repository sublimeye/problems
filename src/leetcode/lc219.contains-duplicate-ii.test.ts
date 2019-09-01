/**
 * Given an array of integers and an integer k, find out whether there are
 *  two distinct indices i and j in the array such that nums[i] = nums[j]
 *  and the absolute difference between i and j is at most k.
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length && j <= i + k; j++) {
      // i=0; j=1,2
      if (nums[i] === nums[j]) return true
    }
  }
  return false
}

test('contains duplicate 2', () => {
  expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toEqual(true)
  expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toEqual(true)
  expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toEqual(false)
})
