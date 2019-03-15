/* Compute the value of power function power(x, n),
given two integers x (base) and n (exponent, which
is non-negative). Use recursion.

// Next, see if you can improve this with branching recursion
*/
function power(x: number, n: number): number {
  if (n === 0) return 1
  if (n === 1) return x
  return power(x, n - 1) + power(x, n - 1)
  // return power(x * 2, n - 1)
}

test('value of power', () => {
  // expect(power(2, 1)).toEqual(2)
  // expect(power(2, 0)).toEqual(1)
  expect(power(2, 3)).toEqual(8)
  // power(4, 2)
  // power(8, 1)
  expect(power(2, 4)).toEqual(16)
  // power(2, 4)
  // power(4 , 3)
  // power(8 , 2)
  // power(16 , 1)
})
