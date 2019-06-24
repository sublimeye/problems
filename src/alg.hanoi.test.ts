// Towers of Hanoi. recursive solution to towers of Hanoi In the towers of Hanoi problem,
//  we have three poles and n discs that fit onto the poles. The discs differ in size and
//  are initially stacked on one of the poles, in order from largest (disc n) at the
// bottom to smallest (disc 1) at the top. The task is to move all n discs to another pole,
// while obeying the following rules:
// Move only one disc at a time.
// Never place a larger disc on a smaller one.
// Recursion provides just the plan that we need: First we move the top n−1 discs to an
// empty pole, then we move the largest disc to the other empty pole, then complete the
// job by moving the n−1 discs onto the largest disc. TowersOfHanoi.java is a direct

function hanoi(a: Pole, b: Pole, c: Pole) {
  move(a.length, a, b, c)
}

function move(n: number, a: Pole, b: Pole, c: Pole): void {
  if (n === 1) {
    // @ts-ignore
    return c.push(a.pop())
  }

  move(n - 1, a, c, b)
  move(1, a, b, c)
  move(n - 1, b, a, c)
}

type Pole = number[]

describe.only('hanoi', () => {
  test('hanoi', () => {
    const a: Pole = [5, 4, 3, 2, 1]
    const b: Pole = []
    const c: Pole = []
    hanoi(a, b, c)
    expect(a).toEqual([])
    expect(b).toEqual([])
    expect(c).toEqual([5, 4, 3, 2, 1])
  })
})
