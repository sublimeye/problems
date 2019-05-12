// https://leetcode.com/problems/roman-to-integer/

// 7000 - 100
// 50   - x
//

const map = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
} as { [k: string]: number }

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s: string): number {
  let count = 0
  let i = 0
  const l = s.length - 1

  for (; i < l; i++) {
    let ch = s[i]

    if (map[ch + s[i + 1]] !== undefined) {
      ch += s[++i]
    }

    count += map[ch]
  }

  if (i === l) count += map[s[i]]

  return count
}

test('roman to integer', () => {
  expect(romanToInt('III')).toBe(3)
  expect(romanToInt('IV')).toBe(4)
  expect(romanToInt('IX')).toBe(9)
  expect(romanToInt('LVIII')).toBe(58)
  expect(romanToInt('MCMXCIV')).toBe(1994)
})
