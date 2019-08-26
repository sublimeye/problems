/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var findMin = function(nums) {
  if (nums[0] <= nums[nums.length - 1]) return nums[0]
  return search(nums, 0, nums.length - 1)
}

function search(a, lo, hi) {
  while (lo <= hi) {
    const mid = lo + ~~((hi - lo) / 2)
    if (a[mid] > a[mid + 1]) return a[mid + 1]
    if (a[mid] < a[mid - 1]) return a[mid]
    if (a[mid] > a[0]) lo = mid + 1
    else hi = mid - 1
  }
  return undefined
}

test('lc153 find minimum in rotary array', () => {
  expect(findMin([3, 4, 5, 1, 2])).toEqual(1)
  expect(findMin([1, 2, 3])).toEqual(1)
  expect(findMin([4, 5, 1, 2, 3])).toEqual(1)
  expect(findMin([3, 1, 2])).toEqual(1)
  expect(findMin([4, 5, 6, 7, 0, 1, 2])).toEqual(0)
})
