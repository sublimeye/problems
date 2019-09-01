function intToStr(n: number): string {
  const buffer: string[] = []
  let neg = false
  const chCode0 = '0'.charCodeAt(0)

  if (n < 0) {
    n = -n
    neg = true
  }

  do {
    // push remaining of a division (last digit in the number)
    buffer.push(String.fromCharCode(chCode0 + (n % 10)))
    // int divide the number
    n = ~~(n / 10)
  } while (n != 0)

  if (neg) {
    buffer.push('-')
  }

  return buffer.reverse().join('')
  // if number is negatiev - negate the number, set negative flag
  // while number not equal to 0
  // add charCode '0' to % 10 of number, write to array
  // integer divide number by 10

  // if neg is set - write '-' in temp buffer
  // reverse buffer
  // return buffer
}

test('int to string', () => {
  expect(intToStr(123)).toEqual('123')
  expect(intToStr(9817)).toEqual('9817')
  expect(intToStr(-1)).toEqual('-1')
  expect(intToStr(0)).toEqual('0')
  expect(intToStr(1)).toEqual('1')
  expect(intToStr(-98671)).toEqual('-98671')
})
