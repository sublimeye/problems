/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(a: number[], b: number[]): number[] {
  // 1. build two dictionaries and iterate O(n), O(~n) memory
  // 2. if both are sorted: solved with 2 pointers: O(n logn), (1) memory (not including returning On array)
  // if less(a, b) -> move a pointer
  // if less(b, a) -> move b pointer
  // if equals - move both pointers (until !==) and push to an array
  // 3. if stored on disk and can't load in memory:
  // interesting question :-)
  // find out how many el can fit in memory, scan M elements
  // and search for intersection in the second array (how to keep track of already "scanned?")
}

test.skip('reverse string', () => {
  expect(intersect([1, 2, 2, 1], [2, 2])).toEqual([2, 2])
  //expect(intersect([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([4, 9])
})
