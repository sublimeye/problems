class PriorityQueue {
  _heap: number[]
  _comparator: (a: number, b: number) => boolean
  top: number = 0
  parent = (i: number) => ((i + 1) >>> 1) - 1
  left = (i: number) => (i << 1) + 1
  right = (i: number) => (i + 1) << 1

  constructor(comparator = (a, b) => a < b) {
    this._heap = []
    this._comparator = comparator
  }
  size() {
    return this._heap.length
  }
  isEmpty() {
    return this.size() == 0
  }
  peek() {
    return this._heap[this.top]
  }
  push(...values) {
    values.forEach(value => {
      this._heap.push(value)
      this._siftUp()
    })
    return this.size()
  }
  pop() {
    const poppedValue = this.peek()
    const bottom = this.size() - 1
    if (bottom > this.top) {
      this._swap(this.top, bottom)
    }
    this._heap.pop()
    this._siftDown()
    return poppedValue
  }
  replace(value: number) {
    const replacedValue = this.peek()
    this._heap[this.top] = value
    this._siftDown()
    return replacedValue
  }
  _greater(i, j) {
    return this._comparator(this._heap[i], this._heap[j])
  }

  _swap(i, j) {
    ;[this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]]
  }
  _siftUp() {
    let node = this.size() - 1
    while (node > this.top && this._greater(node, this.parent(node))) {
      this._swap(node, this.parent(node))
      node = this.parent(node)
    }
  }
  _siftDown() {
    let node = this.top
    while (
      (this.left(node) < this.size() && this._greater(this.left(node), node)) ||
      (this.right(node) < this.size() && this._greater(this.right(node), node))
    ) {
      let maxChild =
        this.right(node) < this.size() &&
        this._greater(this.right(node), this.left(node))
          ? this.right(node)
          : this.left(node)
      this._swap(node, maxChild)
      node = maxChild
    }
  }
}

describe('Priority Queue', () => {
  test('min pq', () => {
    const queue = new PriorityQueue((a, b) => a < b)
    queue.push(10, 20, 30, 40, 50)
    expect(queue.peek()).toBe(10)
    expect(queue.size()).toBe(5)
    expect(queue.pop()).toBe(10)
  })
  test('max pq', () => {
    const queue = new PriorityQueue((a, b) => a > b)
    queue.push(10, 20, 30, 40, 50)
    expect(queue.peek()).toBe(50)
    expect(queue.size()).toBe(5)
    expect(queue.pop()).toBe(50)
  })
  test('min pq object', () => {
    const queue = new PriorityQueue((a, b) => a.node.val < b.node.val)
    queue.push(
      { node: { val: 10 }, k: 1 },
      { node: { val: 20 }, k: 10 },
      { node: { val: 30 }, k: 100 },
      { node: { val: 40 }, k: 200 },
      { node: { val: 50 }, k: 300 },
    )
    expect(queue.peek()).toEqual({ node: { val: 10 }, k: 1 })
    expect(queue.size()).toBe(5)
    expect(queue.pop()).toEqual({ node: { val: 10 }, k: 1 })
  })
})
