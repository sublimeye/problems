/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  // 1, 8, 11, 17, 22, 28
  // sums[0](1) === sums[5]-sums[1] (28-8)
  // [2]11 === sums[28]-sums[17]=11
  const sums = nums.reduce((r, v, i) => {
    const prev = r.length ? r[i - 1] : 0
    r.push(v + prev)
    return r
  }, [])
  const len = sums.length

  for (let i = 0; i < len - 1; i++) {
    if (sums[i] === sums[len - 1] - sums[i + 1]) {
      return i + 1
    }
  }

  return sums
}

test('find pivot index', () => {
  expect(pivotIndex([1, 7, 3, 6, 5, 6])).toEqual(3)
  expect(pivotIndex([-1, -1, -1, 0, 1, 1])).toEqual(0)
})
