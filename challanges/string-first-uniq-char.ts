import expect from 'ceylon'

function firstUniqCharacter(s: string): string | undefined {
  const count: ({[key: string]: number}) = {}
  for (let ch of s) {
    count[ch] = count[ch] === undefined ? 1 : count[ch] + 1
  }

  for (let ch of s) {
    if (count[ch] === 1) return ch
  }

  return
}

function firstUniqCharacterBool(s: string): string | undefined {
  const count: ({[key: string]: boolean}) = {}
  for (let ch of s) {
    if (count[ch] === undefined) {
      count[ch] = false
    } else if (count[ch] === false) {
      count[ch] = true
    }
  }

  for (let ch of s) {
    if (!count[ch]) return ch
  }

  return
}


expect(firstUniqCharacter('abrab')).toEqual('r')
expect(firstUniqCharacter('firstUniqCharacter')).toEqual('f')
expect(firstUniqCharacterBool('abrab')).toEqual('r')
expect(firstUniqCharacterBool('firstUniqCharacter')).toEqual('f')
console.log('string: first uniq')
