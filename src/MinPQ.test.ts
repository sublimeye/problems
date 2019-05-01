type ListItem = {
  value: number
  index: number
}

export class MinPQ {
  q: ListItem[]
  constructor() {
    this.q = []
  }
  isEmpty(): boolean {
    return this.q.length === 0
  }
  size(): number {
    return this.q.length
  }
  min(): ListItem {
    if (!this.q.length) throw new Error('Priority queue underflow')
    return this.q[0]
  }
  delMin(): ListItem {
    if (!this.q.length) throw new Error('Priority queue underflow')
    const min = this.q[0]
    this.q.shift()
    return min
  }
  insert(item: ListItem) {
    this.q.push(item)
    this.q.sort((a, b) => a.value - b.value)
  }
}

describe('minPQ test', () => {
  test('should be empty initially', () => {
    const mpq = new MinPQ()
    expect(mpq.isEmpty()).toBeTruthy()
    expect(mpq.size()).toBe(0)
  })

  test('should insert keys and increase the size', () => {
    const mpq = new MinPQ()
    mpq.insert({ value: 10, index: 1 })
    mpq.insert({ value: 50, index: 5 })
    mpq.insert({ value: 1, index: 7 })
    expect(mpq.isEmpty()).toBeFalsy()
    expect(mpq.size()).toBe(3)
  })

  test('should return min value', () => {
    const mpq = new MinPQ()
    mpq.insert({ value: 10, index: 1 })
    mpq.insert({ value: 50, index: 5 })
    mpq.insert({ value: 1, index: 7 })
    expect(mpq.min()).toEqual({ value: 1, index: 7 })
  })

  test('should remove min element with delMin', () => {
    const mpq = new MinPQ()
    mpq.insert({ value: 10, index: 1 })
    mpq.insert({ value: 50, index: 5 })
    mpq.insert({ value: 1, index: 7 })
    expect(mpq.delMin()).toEqual({ value: 1, index: 7 })
    expect(mpq.size()).toBe(2)
    expect(mpq.delMin()).toEqual({ value: 10, index: 1 })
    expect(mpq.size()).toBe(1)
    expect(mpq.delMin()).toEqual({ value: 50, index: 5 })
    expect(mpq.size()).toBe(0)
  })
})
