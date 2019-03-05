function combinations(s: string): string[] {
  let accum: string[] = []
  comb('', s, accum)
  return accum
}

function comb(prefix: string, s: string, accum: string[]): void {
  if (s.length) {
    accum.push(prefix + s[0])
    comb(prefix + s[0], s.substring(1), accum)
    comb(prefix, s.substring(1), accum)
  }
}

function combinations2(s: string) {
  let strings: string[] = []
  for (let i = 0; i < s.length; i++) {
    strings.concat(combinationOfString(s, i))
  }
}

function combinationOfString(s: string, k: number): string[] {
  if (k === 0) return []
  return []
}

test('combinations', () => {
  expect(combinations('xyz')).toEqual(['x', 'xy', 'xyz', 'xz', 'y', 'yz', 'z'])
})
