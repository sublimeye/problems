// TODO: Try and re-implement again

// function permutation(input: string): string[] {
//   const chars = input.split('')
//   const used: boolean[] = []
//   const result: string[] = []
//   permute(chars, [], used, result)
//   return result
// }

// function permute(
//   chars: string[],
//   out: string[] = [],
//   used: boolean[],
//   result: string[],
// ) {
//   if (chars.length === out.length) {
//     result.push(out.join())
//     return
//   }

//   for (let i = 0; i < chars.length - 1; i++) {
//     if (used[i]) continue
//     out.push(chars[i])
//     used[i] = true
//     permute(chars, out, used, result)
//     used[i] = false
//     out.length = out.length - 1
//   }
// }

function permutation(str: string): void {
  const a = perm('', str, [])
  console.log(a)
}

function perm(prefix: string, s: string, accum: string[]): string[] {
  const n = s.length
  if (n === 0) accum.push(prefix)
  else {
    for (let i = 0; i < n; i++) {
      perm(prefix + s[i], s.substring(0, i) + s.substring(i + 1, n), accum)
    }
  }
  return accum
}

test('permutation', () => {
  permutation('543')
  //   expect(permutation('abc').sort()).toEqual(
  //     ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'].sort(),
  //   )
})
