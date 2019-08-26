function removeAll(s: string, removeChars: string): string {
  let result = ''
  let rregeex = new RegExp(`[${removeChars}]`)
  for (let ch of s) {
    if (!rregeex.test(ch)) {
      result += ch
    }
  }
  return result
}

/**
 * Won't give any benefits in JS, but in C, C++ or Java where it is possible to
 * mutate strings it is more efficient way to (memory consumption wise)
 * @param s
 * @param remove
 */
function removeAllSame(s: string, remove: string): string {
  const flagsTable: { [key: string]: boolean } = {}
  const flags = remove.split('').reduce((result, v) => {
    Object.assign(result, { [v]: true })
    return result
  }, flagsTable)

  const str = s.split('')
  let src,
    dst = 0
  for (src = 0; src < str.length; src++) {
    // override if not in remove
    const ch = str[src]
    if (!flags[ch]) {
      str[dst++] = ch
    }
  }
  str.length = dst
  return str.join('')
}

/**
 * Mutates source array
 * @param source
 * @param chars
 */
function removeAllArray(source: string[], chars: string[]): string[] {
  const flags = chars.reduce(
    (result, v) => {
      result[v] = true
      return result
    },
    {} as { [key: string]: boolean },
  )

  let src,
    dst = 0
  for (src = 0; src < source.length; src++) {
    const ch = source[src]
    // if char is not in the list to be removed, carry over it to resulting array
    if (!flags[ch]) {
      source[dst] = ch
      dst++
    }
  }
  source.length = dst
  return source
}

test('remove all', () => {
  expect(removeAll('hello from somewhere', 'hs')).toEqual('ello from omewere')
  expect(removeAllSame('hello from somewhere', 'hs')).toEqual('ello from omewere')
  expect(removeAllArray(['o', 'b', 'c', 'd'], ['b'])).toEqual(['o', 'c', 'd'])
})
