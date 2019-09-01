var shortestCompletingWord = function(
  licensePlate: string,
  words: string[],
): string {
  const p = licensePlate.toLowerCase().replace(/[^a-z]*/g, '')
  const pd = p.split('').reduce(
    (a, c) => {
      return {
        ...a,
        [c]: !a[c] ? 1 : a[c] + 1,
      }
    },
    {} as { [k: string]: number },
  )
  let d: { [k: string]: number } = {}
  let min: string = ''
  let counter = 0
  let target = p.length

  words_loop: for (let i = 0; i < words.length; i++) {
    const w = words[i]
    if (w.length < p.length) continue
    d = { ...pd }
    counter = 0

    for (let ch of w) {
      if (d.hasOwnProperty(ch)) {
        if (d[ch] !== 0) {
          d[ch] -= 1
          counter++
          if (counter === target) break
        }
      }
    }

    if (counter === target && (min.length === 0 || w.length < min.length)) {
      min = w
    }
  }

  return min
}

test('completeing', () => {
  expect(
    shortestCompletingWord('1s3 PSt', ['step', 'steps', 'stripe', 'stepple']),
  ).toEqual('steps')

  expect(
    // grc
    // g: 1, r: 1, c: 1
    // according
    shortestCompletingWord('GrC8950', [
      'measure',
      'other',
      'every',
      'base',
      'according',
      'level',
      'meeting',
      'none',
      'marriage',
      'rest',
    ]),
  ).toEqual('according')

  expect(
    shortestCompletingWord('Ah71752', [
      'suggest',
      'letter',
      'of',
      'husband',
      'easy',
      'education',
      'drug',
      'prevent',
      'writer',
      'old',
    ]),
  ).toEqual('husband')
})
