/**
 * @param {number[]} height
 * @return {number}
 */
function factorial(n: number): number {
  if (n === 1) return 1
  return n * factorial(n - 1)
}

function factorialBU(n: number): number {
  const f = [1, 1]
  for (let i = 2; i <= n; i++) {
    f[i] = f[i - 1] * i
  }
  return f[n]
}

// Does not make sense since called once!
function factorialMemo(n: number): number {
  const f = [1, 1]
  return (function fac(nn: number): number {
    if (nn === 1) return 1
    if (f[nn]) return f[nn]
    f[nn] = fac(nn - 1) * nn
    return f[nn]
  })(n)
}

/**
 * Bottom-up dynamic programming
 * * NO RECURSION
 * * USE PREVIOUS RESULTS (i.e. prev indexes accessed)
 *
 */
function fibonacciBU(n: number): number {
  const steps = [0, 1]
  for (let i = 2; i <= n; i++) {
    steps[i] = steps[i - 1] + steps[i - 2]
  }
  return steps[n]
}

/**
 * Greatest common divider
 * If p > q, the gcd of p and q is the same as the gcd of q and p % q
 */
function gcd(p: number, q: number): number {
  if (q === 0) return p
  return gcd(q, p % q)
}

function gcd2(p: number, q: number): number {
  while (q) {
    const t = q
    q = p % q
    p = t
  }
  return p
}

describe('recursion', () => {
  test('stuff', () => {
    expect(factorial(5)).toBe(120)
    expect(factorialMemo(5)).toBe(120)
    expect(factorialBU(5)).toBe(120)
    expect(fibonacciBU(11)).toBe(89)

    expect(gcd(102, 68)).toBe(34)
    expect(gcd2(102, 68)).toBe(34)
    expect(gcd(1000, 333)).toBe(1)
    expect(gcd(68, 102)).toBe(34)
    expect(gcd2(68, 102)).toBe(34)
  })
})

// 1 * 2 * 3 * 4 * 5
// 2 * 3 * 4 * 5
// 6 * 4 * 5
// 24 * 5
// 120
