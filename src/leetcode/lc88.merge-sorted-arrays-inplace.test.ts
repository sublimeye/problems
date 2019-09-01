// @link: https://leetcode.com/problems/merge-sorted-array
var merge = function(l: number[], m: number, s: number[], n: number): void {
  let c = l.length - 1,
    lc = m - 1,
    sc = n - 1

  while (c >= 0) {
    if (lc < 0 || s[sc] >= l[lc]) l[c--] = s[sc--]
    else l[c--] = l[lc--]
  }
}

test('completeing', () => {
  let nums1 = [1, 2, 3, 0, 0, 0]
  let nums2 = [2, 5, 6]
  merge(nums1, 3, nums2, 3)
  expect(nums1).toEqual([1, 2, 2, 3, 5, 6])
})
