/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height: number[]) {
  let max = height[0]
  let segments: number[][] = []
  for (let i = 1; i < height.length; i++) {
    let prev = height[i - 1]
    let curr = height[i]
    // going down
    if (curr < prev) {
      // start segment if this is the first descent
      if (prev === max) {
        // questionable structure...
        segments.push([i - 1])
      }
    } else {
      // if current < max means
      if (curr < max) {
      }
      if (curr > max) {
        // max = Math.max(curr, max)
      }
    }
  }
}

describe.skip('trapping rain water', () => {
  test('should calculate water in "buckets"', () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toEqual(6)
  })
})
