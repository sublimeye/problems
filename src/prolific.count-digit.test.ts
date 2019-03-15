/*
* 1) Given a non-negative int n, and a target single digit,
return the count of the occurrences of the target single digit.
So for example when n is 8218, and target digit is 8, the
program shall return 2. Do not use iterative (loop)
approach but recursive algorithm.

// Hint: mod (%) by 10 yields the rightmost digit
( 912 % 10 is 2), while divide (/) by 10 and apply
parseInt on its result removes the rightmost digit
( parseInt(587 / 10) is 58 ).

countDigit(8218, 8) // 2
*/

function countDigit(n: number, target: number): number {
  return counter(n, target, 0)
}

function counter(n: number, target: number, accumulator: number): number {
  if (!n) return accumulator
  if (n % 10 === target) accumulator++
  const next = Math.floor(n / 10)
  return counter(next, target, accumulator)
}

test('should handle empty matrix', () => {
  expect(countDigit(8218, 8)).toEqual(2)
  expect(countDigit(15151515, 5)).toEqual(4)
})
