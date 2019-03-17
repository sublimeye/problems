// https://leetcode.com/problems/repeated-substring-pattern/
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s: string) {
  const comb = s.substring(1, s.length) + s.substring(0, s.length - 1)
  return comb.indexOf(s) !== -1
}

test('push dominoes', () => {
  expect(repeatedSubstringPattern('abab')).toBeTruthy()
  expect(repeatedSubstringPattern('abcabcabcabc')).toBeTruthy()
  expect(repeatedSubstringPattern('aba')).toBeFalsy()
})
