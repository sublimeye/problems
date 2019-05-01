/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var mergeKLists = function(lists) {
  // return mergeKListsPairs(lists) // O(N * log K) Space O(1)
  // return mergeKListsPriorityQueue(lists) (N * log K) Space ~O(k) if proper heap
  return mergeKListsRecursive(lists) // O(N * log K) (performs faster in leetCode)
}

var mergeKListsPairs = function(lists) {
  const amount = lists.length
  if (!amount) return null

  let interval = 1

  while (interval < amount) {
    for (let i = 0; i < amount - interval; i += interval * 2) {
      lists[i] = mergeTwoLists(lists[i], lists[i + interval])
    }
    interval *= 2
  }

  return amount > 0 ? lists[0] : lists
}

var mergeKListsRecursive = function(lists) {
  return merge(lists, 0, lists.length - 1)
}

var merge = function(lists, l, r) {
  if (l > r) return null
  if (l == r) return lists[l]
  // find the mid point (middle index)
  let m = Math.floor((r - l) / 2) + l

  // merge recursively from start to mid
  var l1 = merge(lists, l, m)
  // merge recursively from mid+1 to end
  var l2 = merge(lists, m + 1, r)

  // merging (the same as merge two lists)
  let head = new ListNode()
  let c = head

  while (l1 && l2) {
    if (l1.val < l2.val) {
      c.next = l1
      l1 = l1.next
    } else {
      c.next = l2
      l2 = l2.next
    }

    c = c.next
  }

  c.next = l1 || l2
  return head.next
}

var mergeTwoLists = function(l1, l2) {
  let head = new ListNode()
  let c = head

  while (l1 && l2) {
    if (l1.val < l2.val) {
      c.next = l1
      l1 = l1.next
    } else {
      c.next = l2
      l2 = l2.next
    }

    c = c.next
  }

  c.next = l1 || l2
  return head.next
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKListsPriorityQueue = function(lists) {
  const pq = new PriorityQueue((a, b) => a.node.val < b.node.val)

  lists.forEach((node, k) => {
    if (node) {
      pq.push({ node, k })
    }
  })

  const result = new ListNode(null)
  let current = result

  while (!pq.isEmpty()) {
    const min = pq.pop()
    const k = min.k

    current.next = min.node
    current = current.next

    if (lists[k]) {
      lists[k] = lists[k].next
    }

    if (lists[k]) {
      pq.push({ node: lists[k], k })
    }
  }

  return result.next
}

class PriorityQueue {
  top = 0
  parent = i => ((i + 1) >>> 1) - 1
  left = i => (i << 1) + 1
  right = i => (i + 1) << 1

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

  replace(value) {
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

test.skip('merge linked lists', () => {})
