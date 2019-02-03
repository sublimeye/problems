import expect from 'ceylon'

console.log('parentheses')

// 4:33 - 435 (pause)
// 4:40 -
export function parentheses(input: string): boolean {
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
// ~4:46 finished with stack, changed to counter
// 4:49

expect(parentheses('(())')).toBeTrue()
expect(parentheses('(())()')).toBeTrue()
expect(parentheses('(())())')).toBeFalse()
expect(parentheses(')(')).toBeFalse()
expect(parentheses(')')).toBeFalse()
expect(parentheses('(')).toBeFalse()
expect(parentheses('()(()())')).toBeTrue()
