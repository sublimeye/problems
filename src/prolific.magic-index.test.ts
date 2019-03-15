/* A magic index in an array[0...n-1] is defined to be an index
such that A[i] = i. Given a sorted array of distinct integers,
write a method to find a magic index. Assume there is always
one that exists in array A.
*/
function findMagicIndex(
  array: number[],
  startIndex: number,
  endIndex: number,
): number {
  if (startIndex === endIndex) return -1
  if (startIndex === array[startIndex]) return startIndex
  return findMagicIndex(array, ++startIndex, endIndex)
}

function findMagicIndexBinary(
  array: number[],
  startIndex: number,
  endIndex: number,
): number {
  if (startIndex > endIndex) return -1
  const mid = Math.floor(startIndex + (endIndex - startIndex) / 2)
  const target = array[mid]

  if (target === mid) return mid
  else if (target > mid) return findMagicIndexBinary(array, startIndex, mid - 1)
  else return findMagicIndexBinary(array, mid + 1, endIndex)
  // return mid
}

test('magic index', () => {
  let arr = [-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13]
  let ara = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  let startIndex = 0
  let endIndex = arr.length - 1
  expect(findMagicIndexBinary(arr, startIndex, endIndex)).toBe(7)
})

test('magic index end edge', () => {
  let arr = [-50, -10, 2]
  expect(findMagicIndexBinary(arr, 0, arr.length - 1)).toBe(2)
})

test('magic index start edge', () => {
  let arr = [0, 10, 20]
  expect(findMagicIndexBinary(arr, 0, arr.length - 1)).toBe(0)
})
