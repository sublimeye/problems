// Given a string, compute recursively(no loops)
// the number of times lowercase "th" appears in the string.

function countTh(s: string): number {
  const idx = s.indexOf('th')
  if (!s || idx === -1) return 0
  return countTh(s.substring(idx + 2)) + 1
}

function countSubstring(s: string, sub: string): number {
  const idx = s.indexOf(sub)
  if (!s || idx === -1) return 0
  return countSubstring(s.substring(idx + sub.length), sub) + 1
}

test('count substring', () => {
  expect(countTh('thapple')).toBe(1)
  expect(countTh('thappthle')).toBe(2)
})

test('count substring 2', () => {
  expect(countSubstring('thapple', 'th')).toBe(1)
  expect(countSubstring('thappthle', 'th')).toBe(2)
})

test('count 3 instances of lo', () => {
  expect(countSubstring('hellololo', 'lo')).toBe(3)
})
