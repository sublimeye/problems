var addBinary = function(a: string, b: string): string {
  // return (parseInt(a, 2) + parseInt(b, 2)).toString(2)
  // const max = Math.max(a.length, b.length)
  // for (let i = max - 1)
  let sa: string[] = []
  let sb: string[] = []
  let result: string[] = []
  for (let ch of a) {
    sa.push(ch)
  }
  for (let ch of b) {
    sb.push(ch)
  }

  let carry = false
  let add = ''

  // TODO: finish with for -- loop instead of unnecessary "stacks"
  while (sa.length || sb.length || carry) {
    let cha = sa.pop() || '0'
    let chb = sb.pop() || '0'

    if (cha === '0' && chb === '0') {
      add = carry ? '1' : '0'
      if (carry) carry = false
    } else if ((cha === '0' && chb === '1') || (cha === '1' && chb === '0')) {
      add = carry ? '0' : '1'
    } else if (cha === '1' && chb === '1') {
      add = carry ? '1' : '0'
      carry = true
    }

    result.push(add)
  }

  return result.reverse().join('')
}

test('completeing', () => {
  expect(addBinary('11', '01')).toEqual('100')
  expect(addBinary('1010', '1011')).toEqual('10101')
  expect(addBinary('11', '11')).toEqual('110')
  expect(addBinary('10101010', '11001100')).toEqual('101110110')
  expect(addBinary('111', '111')).toEqual('1110')
})
