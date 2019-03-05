function phonewords(phone: string): string {
  // get initial phone
  let result = Array.from(phone).map(d => getKeyChar(d, 1))
  let output: string = ''

  while (true) {
    output = output + result.join('')
    // console.log(result.join(''))

    // go from last index (len - 1), to 0 (zero), to -1 (but break when -1)
    for (let i = result.length - 1; i >= -1; --i) {
      if (i === -1) return output
      const first = getKeyChar(phone[i], 1)
      const second = getKeyChar(phone[i], 2)
      const third = getKeyChar(phone[i], 3)
      if (result[i] === third || result[i] === '0' || result[i] === '1') {
        result[i] = first
      } else if (result[i] === first) {
        result[i] = second
        // break from the inner loop
        break
      } else if (result[i] === second) {
        result[i] = third
        // break from the inner loop
        break
      }
    }
  }
  return output
}

test('phone words', () => {
  expect(phonewords('203')).toEqual('A0DA0EA0FB0DB0EB0FC0DC0EC0F')
})

function getKeyChar(strdigit: string, pos: number): string {
  const digit = Number(strdigit)
  if (digit < 2 || digit > 9) return digit.toString()
  const digits = [
    [],
    [],
    'ABC',
    'DEF',
    'GHI',
    'JKL',
    'MNO',
    'PRS',
    'TUV',
    'WXY',
  ]
  return digits[digit][pos - 1]
}

test('getKeyChar', () => {
  expect(getKeyChar('2', 1)).toEqual('A')
  expect(getKeyChar('6', 1)).toEqual('M')
  expect(getKeyChar('8', 2)).toEqual('U')
  expect(getKeyChar('9', 3)).toEqual('Y')
})
