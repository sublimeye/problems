/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals: number[][]): number[][] {
  intervals.sort(([a1], [b1]) => {
    if (a1 < b1) return -1
    if (a1 > b1) return 1
    return 0
  })

  const result: number[][] = []
  let [start, end] = intervals[0]

  for (let i = 1; i < intervals.length; i++) {
    const [nextStart, nextEnd] = intervals[i]
    if (nextStart > end) {
      result.push([start, end])
      start = nextStart
      end = nextEnd
    } else if (nextEnd > end) {
      end = nextEnd
    }
  }

  result.push([start, end])

  return result
}

test('merge intervals', () => {
  expect(merge([[1, 3], [2, 6], [8, 10], [15, 18]])).toEqual([
    [1, 6],
    [8, 10],
    [15, 18],
  ])

  expect(merge([[1, 4], [4, 5]])).toEqual([[1, 5]])
})
