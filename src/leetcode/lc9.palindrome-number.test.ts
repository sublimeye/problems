// @url: https://leetcode.com/problems/palindrome-number/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x != 0)) return false
  // if converting num to str allowed
  // return isPalindromeConvert(x)
  return isPalindromeMath(x)
}

function isPalindromeMath(x: number): boolean {
  let revertedPart = 0
  while (x > revertedPart) {
    // leading number: integer * 10 (multiply by base)
    // trailing number: integer % 10 (rem of division by base)
    revertedPart = revertedPart * 10 + (x % 10)
    x = intDiv(x, 10)
  }

  // half will be equal if even number or
  // in case when number is odd => remove the last digit
  return x == revertedPart || x == intDiv(revertedPart, 10)
}

function intDiv(x: number, by: number): number {
  return Math.floor(x / by)
}

function isPalindromeConvert(x: number): boolean {
  const s = x.toString()
  const l = s.length // 9 / 2 == 4.5 (8/2 = 4)
  const mid = Math.floor(l / 2)
  for (let i = 0; i < mid; i++) {
    if (s[i] !== s[l - i - 1]) {
      return false
    }
  }
  return true
}

test('num is palindrome', () => {
  expect(isPalindrome(121)).toBeTruthy()
  expect(isPalindrome(112211)).toBeTruthy()
  expect(isPalindrome(1234)).toBeFalsy()
  expect(isPalindrome(-121)).toBeFalsy()
  expect(isPalindrome(10)).toBeFalsy()
})
