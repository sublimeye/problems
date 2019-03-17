// https://leetcode.com/problems/push-dominoes/
/**
 * @param {string} dominoes
 * @return {string}
 */

var pushDominoes = function(dominoes: string): string {
  const d = dominoes.split('')
  let pos = 0
  let prevBalance = getBalance(d[pos])
  let result: string[] = new Array(d.length)

  // TODO: get rid of this
  result[0] = d[0]

  for (let i = 1; i < dominoes.length; ++i) {
    const balance = getBalance(d[i])
    if (prevBalance === 0 && balance === 0 && i !== dominoes.length - 1) {
      continue
    }

    if ((prevBalance === 0 && balance !== 0) || i === dominoes.length - 1) {
      // TODO: rethink index calculation!
      // TODO: overcomplicated !!! not necessary to do all of these
      if (balance === -1 && (getBalance(d[pos - 1]) === -1 || pos === 0)) {
        result.fill('L', pos, i)
      } else if (balance === 1 && getBalance(d[pos - 1]) === 1) {
        result.fill('R', pos, i)
      } else if (getBalance(d[pos - 1]) === -1 && balance === 1) {
        result.fill('.', pos, i)
      } else {
        const half = Math.floor((i - pos) / 2)
        const mid = (i - pos) % 2
        result.fill('R', pos, pos + half)
        if (mid !== 0) result.fill('.', pos + half, pos + half + 1)
        result.fill('L', i - half, i)
      }
    }

    result[i] = d[i]
    pos = i
    prevBalance = balance
  }

  return result.join('')
}

function getBalance(ch: string): number {
  if (ch === 'L') return -1
  else if (ch === 'R') return 1
  else if (ch === '.') return 0
  return Infinity
}

test('push dominoes', () => {
  expect(pushDominoes('LLLRRRLLLRRR')).toEqual('LLLRRRLLLRRR')
  expect(pushDominoes('LL.R...LR..L..')).toEqual('LL.RR.LLRRLL..')
  expect(pushDominoes('.LL.R...LR..L..')).toEqual('LLL.RR.LLRRLL..')
  expect(pushDominoes('RR.L')).toEqual('RR.L')
})
