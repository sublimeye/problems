function binarySearch(array: number[], int: number): number | undefined {
  return search(array, int, 0, array.length)
}

function search(
  array: number[],
  int: number,
  start: number,
  end: number,
): number | undefined {
  const mid = Math.floor((end - start) / 2)
  if (array[mid] === int) return mid
  if (start === end) return undefined
  if (array[mid] < int) {
    return search(array, int, start, mid)
  } else {
    return search(array, int, mid, end)
  }
}

function binarySearch2(array: number[], target: number): number | undefined {
  return search2(array, target, 0, array.length - 1)
}

function search2(
  array: number[],
  target: number,
  start: number,
  end: number,
): number | undefined {
  const range = end - start
  console.log(range, start, end, array[start], array[end])
  if (range < 0) return void 0
  if (array[start] > array[end]) return void 0
  const mid = Math.floor(range / 2 + start)
  if (target === array[mid]) return mid
  if (target < array[mid]) return search2(array, target, start, mid - 1)
  else {
    return search2(array, target, mid + 1, end)
  }
}

test('binary search 1', () => {
  expect(binarySearch([1, 3, 5, 10, 23, 54], 10)).toEqual(3)
  expect(binarySearch([1], 1)).toEqual(0)
  expect(binarySearch([1, 2, 3], 2)).toEqual(1)
  expect(binarySearch([1], 5)).toBeUndefined()
})

test('binary search 2', () => {
  expect(binarySearch2([1, 3, 5, 10, 23, 54], 10)).toEqual(3)
  expect(binarySearch2([1], 1)).toEqual(0)
  expect(binarySearch2([1, 2, 3], 2)).toEqual(1)
  expect(binarySearch2([1], 5)).toBeUndefined()
})