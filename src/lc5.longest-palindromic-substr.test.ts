/**
 * Expand from center all 0..n elements; - gives palindrome length at given "center"
 * Repeat for i+1 (try without?)
 *
 * @param s
 */
function longestPalindromeExp(s: string) {
  // skip if s is empty
  if (!s) return ''
  let start = 0
  let end = 0
  for (let i = 0; )
  //
}

/**
 * O(n^3) Inefficient brute-force algorithm
 * @param {string} s
 * @return {string}
 */
var lp = function(s: string) {
  if (s.length < 2) return s

  let pal = s[0]
  let max = 1
  const l = s.length
  for (let i = 0; i < l - 1; i++) {
    for (let j = i + 1; j <= l - 1; j++) {
      if (isPalindromeSub(s, i, j)) {
        if (max < j - i + 1) {
          max = j - i + 1
          pal = s.slice(i, j + 1)
        }
      }
    }
  }
  return pal
}

function isPalindromeSub(s: string, start: number, finish: number): boolean {
  const mid = Math.floor(start + (finish - start) / 2)
  for (let i = start; i <= mid; i++) {
    if (s[i] !== s[finish--]) return false
  }
  return true
}

describe('longest palindromic', () => {
  test('basic', () => {
    expect(lp('cbbd')).toEqual('bb')
    expect(lp('babad')).toEqual('bab')
    expect(lp('ac')).toEqual('a')
    expect(lp('bb')).toEqual('bb')
  })
})
