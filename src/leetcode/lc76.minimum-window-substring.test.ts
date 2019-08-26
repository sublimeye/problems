/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (t.length > s.length) return ''
  let tt = t.split('').reduce((r, c) => ({ ...r, [c]: r.c ? r.c + 1 : 0 }), {})
  let ss = t.split('').reduce((r, c) => ({ ...r, [c]: 0 }), {})
  let q = 0
  let min = undefined
  let max = undefined

  for (let p = 0; p < s.length; p++) {
    if (s[p] in tt) {
      ss[s[p]]++

      // if ss values filled with 1+, start moving q
      if (filled(ss)) {
        while (q <= p) {
          if (s[q] in tt) {
            ss[s[q]]--
            if (!filled(ss)) {
              if (
                (min === undefined && max === undefined) ||
                p - q < max - min
              ) {
                min = q
                max = p
              }
              q++
              break
            }
          }

          q++
        }
      }
    }
  }
  if (min === undefined && max === undefined) return ''
  return s.substring(min, max + 1)
}

function filled(o) {
  for (let x in o) {
    if (!o[x]) return false
  }
  return true
}

test('max window', () => {
  expect(minWindow('aa', 'aa')).toEqual('a')
  //   expect(minWindow('ADOBECODEBANC', 'ABC')).toEqual('BANC')
  // expect(minWindow('a', 'a')).toEqual('a')
  expect(minWindow('a', 'aa')).toEqual('a')
})
