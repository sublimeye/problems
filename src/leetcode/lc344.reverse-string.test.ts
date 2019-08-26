/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s: string[]): string[] {
  for (let i = 0; i < s.length / 2; i++) {
    const temp = s[i]
    s[i] = s[s.length - 1 - i]
    s[s.length - 1 - i] = temp
  }
  return s
}

test('reverse string', () => {
  expect(reverseString(['h', 'e', 'l', 'l', 'o'])).toEqual([
    'o',
    'l',
    'l',
    'e',
    'h',
  ])
  expect(reverseString(['H', 'a', 'n', 'n', 'a', 'h'])).toEqual([
    'h',
    'a',
    'n',
    'n',
    'a',
    'H',
  ])
})
