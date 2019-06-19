// Taken from https://stackoverflow.com/a/33276078

function product(lists: number[][]) {
  const result: number[][] = []
  const total = lists.reduce((r, { length }) => r * length, 1)
  for (let i = 0; i < total; i++) {
    let sub: number[] = []
    let len, index
    let div = total

    for (let l of lists) {
      len = l.length
      div = ~~(div / len)
      index = ~~(i / div) % len
      sub.push(l[index])
    }
    result.push(sub)
  }
  return result
}

type Sub = { [k: string]: number }
function product2(collection: { [key: string]: number[] }) {
  const result: Sub[] = []
  const arr = Object.values(collection)
  const total = arr.reduce((r, { length }) => r * length, 1)
  const entries = Object.entries(collection)

  for (let i = 0; i < total; i++) {
    let sub: Sub = {}
    let len
    let index
    let div = total

    for (let l of entries) {
      const [key, list] = l
      len = list.length
      div = ~~(div / len)
      index = ~~(i / div) % len
      sub[key] = list[index]
    }
    result.push(sub)
  }
  return result
}

describe.only('product', () => {
  test('should build cartesian product', () => {
    expect(product([[1, 2], [5, 6], [9]])).toEqual([
      [1, 5, 9],
      [1, 6, 9],
      [2, 5, 9],
      [2, 6, 9],
    ])
    expect(product([])).toEqual([[]])
  })

  test('should build product as object', () => {
    const input = {
      a: [1, 2],
      b: [5, 6],
    }
    const output = [
      { a: 1, b: 5 },
      { a: 1, b: 6 },
      { a: 2, b: 5 },
      { a: 2, b: 6 },
    ]
    expect(product2(input)).toEqual(output)
  })
})
