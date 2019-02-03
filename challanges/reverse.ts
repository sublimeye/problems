import expect from 'ceylon'
// string reverse "phone interview" approach
// 9:20 - start

export function reverse(input: string): string {
  let reversed = ''

  for (let ch = input.length - 1; ch >= 0; ch--) {
    reversed += input[ch]
  }
  return reversed
}
// 9:24 (with some stupid thinking)

const s1 = 'abc123def'
expect(reverse(s1)).toBe(
  s1
    .split('')
    .reverse()
    .join(''),
)
