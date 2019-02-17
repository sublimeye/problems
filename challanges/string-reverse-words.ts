import expect from 'ceylon'

function reverseWords(str: string): string {
  const words = str.split(' ')
  const len = Math.floor(words.length / 2)
  for (let i = 0; i < len; i++) {
    const word = words[i]
    const wordRev = words[words.length - 1 - i]
    words[i] = wordRev
    words[words.length - 1 - i] = word
  }
  return words.join(' ')
}

function reverseWordsBuiltin(str: string): string {
  const words = str.split(' ')
  return words.reverse().join(' ')
}

expect(reverseWords('one two three')).toEqual('three two one')
expect(reverseWords('')).toEqual('')
expect(reverseWords('Welcome to my kingdom!')).toEqual('kingdom! my to Welcome')
expect(reverseWordsBuiltin('one two three')).toEqual('three two one')
expect(reverseWordsBuiltin('')).toEqual('')
expect(reverseWordsBuiltin('Welcome to my kingdom!')).toEqual('kingdom! my to Welcome')
console.log('reverse words')
