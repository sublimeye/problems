export function parenthesesTest(input: string): boolean {
  // put on stack and remove from stack - if stack is not empty or trying to
  // remove from an empty stack - error
  let counter = 0
  // const stack: string[] = []
  const chars = input.split('')

  for (const ch of chars) {
    if (ch === '(') {
      counter++
      // stack.push(ch)
    } else if (ch === ')') {
      if (!counter) return false
      counter--
    }
  }

  return !counter
}

test('parenthesis', () => {
  expect(parenthesesTest('(())')).toBeTruthy()
  expect(parenthesesTest('(())()')).toBeTruthy()
  expect(parenthesesTest('(())())')).toBeFalsy()
  expect(parenthesesTest(')(')).toBeFalsy()
  expect(parenthesesTest(')')).toBeFalsy()
  expect(parenthesesTest('(')).toBeFalsy()
  expect(parenthesesTest('()(()())')).toBeTruthy()
})
