/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars: string[]) {
  if (chars.length < 2) return chars.length

  let active = chars[0]
  let chpos = 0
  let counter = 1

  for (let i = 1; i < chars.length; i++) {
    if (chars[i] === active) {
      counter++
      continue
    }

    if (counter > 1) {
      for (let ch of counter.toString()) chars[++chpos] = ch
      counter = 1
    }

    chars[++chpos] = chars[i]
    active = chars[i]
  }
  // compress the final sequence
  if (counter > 1) {
    for (let ch of counter.toString()) {
      chars[++chpos] = ch
    }
  }
  chars.length = ++chpos
  return chpos
}

test('compression', () => {
  const c1 = ['a', 'a', 'b', 'b', 'c', 'c', 'c']
  expect(compress(c1)).toEqual(6)
  expect(c1).toEqual(['a', '2', 'b', '2', 'c', '3'])
})

test('compression2', () => {
  const c2 = ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']
  expect(compress(c2)).toEqual(4)
  expect(c2).toEqual(['a', 'b', '1', '2'])
})
