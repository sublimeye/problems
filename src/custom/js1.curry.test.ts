import { nfapply } from 'q'

function mul(a: number, b: number, c: number): number {
  return a * b * c
}

// function mul(x) {
//   return function(y) {
//     // anonymous function
//     return function(z) {
//       // anonymous function
//       return x * y * z
//     }
//   }
// }

function curry(fn) {
  return function curried(...args) {
    if (args.length < fn.length) {
      return (...more) => curried(...args, ...more)
    } else {
      return fn(...args)
    }
  }
}

const curriedMul = curry(mul)

describe.only('curry', () => {
  test('multiply', () => {
    expect(mul(1, 2, 3)).toEqual(6)
    expect(curriedMul(1)(2)(3)).toEqual(6)
    expect(curriedMul(1, 2, 3)).toEqual(6)
    expect(curriedMul(1)(2, 3)).toEqual(6)
  })
})
