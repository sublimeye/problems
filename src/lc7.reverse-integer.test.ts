/**
 * @param {number} x
 * @return {number}
 */
const MAX = 2 ** 31 - 1
const MIN = 2 ** 31 * -1
var reverse = function(x: number) {
  if (x > MAX || x < MIN || !x) return 0
  let neg = x < 0
  if (neg) x = -x
  let result = ''

  // getting digits one by one
  while (x > 0) {
    const d = x % 10
    x = Math.floor(x / 10)
    result += d
  }

  const r = parseInt(result, 10)
  return neg ? -r : r
}

var reverse2 = function(x: number) {
  let sign = Math.sign(x),
    reverse = 0
  x *= sign

  while (x > 0) {
    const d = x % 10
    x = (x - d) / 10
    reverse = d + reverse * 10
  }

  reverse *= sign
  return reverse <= MAX && reverse >= MIN ? reverse : 0
}

describe('reverse int', () => {
  test('should work for base case', () => {
    expect(reverse(123)).toEqual(321)
  })
  test('should truncate zeroes', () => {
    expect(reverse(120)).toEqual(21)
  })
  test('should return 0 for > 2**31', () => {
    expect(reverse(120)).toEqual(21)
  })
  test('should return 0 for 0', () => {
    expect(reverse(120)).toEqual(21)
  })
  test('should work with negative', () => {
    expect(reverse(-123)).toEqual(-321)
  })
})

describe('reverse 2 (using digits)', () => {
  test('should work for base case', () => {
    expect(reverse2(123)).toEqual(321)
  })
  test('should truncate zeroes', () => {
    expect(reverse2(120)).toEqual(21)
  })
  test('should return 0 for > 2**31', () => {
    expect(reverse2(120)).toEqual(21)
  })
  test('should return 0 for 0', () => {
    expect(reverse2(120)).toEqual(21)
  })
  test('should work with negative', () => {
    expect(reverse2(-123)).toEqual(-321)
  })
})
