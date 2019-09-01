/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  const counts = Array.from(s).reduce(
    (result, c) => {
      result[c] = result[c] === undefined ? 1 : result[c] + 1
      return result
    },
    {} as { [key: string]: number },
  )

  for (let ch of t) {
    if (counts[ch]) {
      counts[ch] -= 1
    } else return false
  }
  return true
}

function isAnagram2(str1: string, str2: string): boolean {
  return (
    str1
      .split('')
      .sort()
      .join('') ===
    str2
      .split('')
      .sort()
      .join('')
  )
}

test('anagram', () => {
  expect(isAnagram('anagram', 'nagaram')).toBeTruthy()
  expect(isAnagram('rat', 'car')).toBeFalsy()
  expect(isAnagram2('anagram', 'nagaram')).toBeTruthy()
  expect(isAnagram2('rat', 'cat')).toBeFalsy()
})
