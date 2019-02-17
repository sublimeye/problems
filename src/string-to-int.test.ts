function toInt(str: string): number {
  let neg = str[0] === '-'
  let pos = neg ? 1 : 0
  let num = 0
  const charCode0 = '0'.charCodeAt(0)
  while (pos < str.length) {
    num *= 10
    num += str.charCodeAt(pos++) - charCode0
  }
  if (neg) {
    num = num * -1
  }
  return num
}

test('toInt', () => {
  expect(toInt('123')).toEqual(123)
  expect(toInt('9817')).toEqual(9817)
  expect(toInt('-1')).toEqual(-1)
  expect(toInt('0')).toEqual(0)
  expect(toInt('1')).toEqual(1)
  expect(toInt('-98671')).toEqual(-98671)
})
