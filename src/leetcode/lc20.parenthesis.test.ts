// https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s: string) {
  const stack: string[] = []
  for (let ch of s) {
    if (ch === '(' || ch === '{' || ch === '[') {
      stack.push(ch)
    } else {
      const matching = stack.pop()
      if (
        (ch === ')' && matching !== '(') ||
        (ch === '}' && matching !== '{') ||
        (ch === ']' && matching !== '[')
      ) {
        return false
      }
    }
  }
  return stack.length === 0
}

test('valid parenthesis', () => {
  expect(isValid('()')).toBeTruthy()
  expect(isValid('()[]{}')).toBeTruthy()
  expect(isValid('{[]}')).toBeTruthy()
})

test('valid falsy', () => {
  expect(isValid('(]')).toBeFalsy()
  expect(isValid('([)]')).toBeFalsy()
})
