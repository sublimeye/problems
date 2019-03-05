export function gcd(a: number, b: number): number {
  if (b === 0) return a
  return gcd(b, a % b)
}

test('reverse', () => {
  expect(gcd(102, 68)).toBe(34)
})
