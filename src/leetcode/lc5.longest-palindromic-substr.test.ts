/**
 * Expand from center all 0..n elements; - gives palindrome length at given "center"
 * Repeat for i+1 (try without?)
 *
 * @param s
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (!s) return ''
  let start = 0
  let end = 0
  for (let i = 0; i < s.length; i++) {
    const l1 = expandFromCenter(s, i, i)
    const l2 = expandFromCenter(s, i, i + 1)
    const len = Math.max(l1, l2)
    // if new longer substring is found
    if (len > end - start) {
      // start: i - "half of length - 1" (minus one )
      // end:   i + "half of length"
      start = i - ~~((len - 1) / 2)
      end = i + ~~(len / 2)
    }
  }

  return s.slice(start, end + 1)
}

// Expanding left right until reach unequality
function expandFromCenter(s, l, r) {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--
    r++
  }
  // return the distance from right to left
  // if we start at "abc", l=1, r=1 - it would go to l=0, r=2
  // the length is r - l and -1
  return r - l - 1
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
    expect(longestPalindrome('cbbd')).toEqual('bb')
    expect(longestPalindrome('abbbbdddddddddddddsddddddddddddddddk')).toEqual(
      'dddddddddddddsddddddddddddd',
    )
    expect(lp('cbbd')).toEqual('bb')
    expect(lp('babad')).toEqual('bab')
    expect(lp('ac')).toEqual('a')
    expect(lp('bb')).toEqual('bb')
  })
})
