/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num: string, k: number): string {
  if (num.length === k) return '0'
  if (k === 0) return num

  let stack: string[] = []

  // this iteration guarantees to have from smaller to larger
  let i = 0
  while (i < num.length) {
    while (k > 0 && stack.length && stack[stack.length - 1] > num[i]) {
      stack.pop()
      k--
    }
    stack.push(num[i++])
  }

  if (k > 0) stack = stack.slice(0, -k)

  // clear zeroes
  while (stack.length > 1 && stack[0] === '0') stack.shift()

  return stack.join('')
}

test('k digits', () => {
  expect(removeKdigits('1432219', 3)).toEqual('1219')
  expect(removeKdigits('54321', 3)).toEqual('21')
  expect(removeKdigits('10200', 1)).toEqual('200')
  expect(removeKdigits('10', 2)).toEqual('0')
  expect(removeKdigits('100', 1)).toEqual('0')
  expect(removeKdigits('12345', 3)).toEqual('12')
  expect(removeKdigits('112', 1)).toEqual('11')
  expect(removeKdigits('1234567890', 9)).toEqual('0')
  expect(removeKdigits('1111111111', 9)).toEqual('1')
  expect(removeKdigits('1111111111', 3)).toEqual('1111111')
  expect(removeKdigits('34231', 3)).toEqual('21')
  expect(removeKdigits('34231', 4)).toEqual('1')
  expect(removeKdigits('7866', 2)).toEqual('66')
  expect(removeKdigits('98765434567987', 10)).toEqual('3456')
})
