// https://leetcode.com/problems/lru-cache/

class DLinkedNode {
  key?: number
  value?: number
  prev: DLinkedNode | null = null
  next: DLinkedNode | null = null

  constructor(key?: number, value?: number) {
    if (typeof key === 'number') {
      this.key = key
    }

    if (typeof value === 'number') {
      this.value = value
    }
  }
}

class LRUCache {
  private cache: { [key: number]: DLinkedNode } = {}
  private size: number = 0
  private capacity: number
  private head: DLinkedNode
  private tail: DLinkedNode

  constructor(capacity: number) {
    this.capacity = capacity
    this.head = new DLinkedNode()
    this.tail = new DLinkedNode()
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  private addToHead(node: DLinkedNode): void {
    node.next = this.head.next
    if (this.head.next) {
      this.head.next.prev = node
    }
    this.head.next = node
    node.prev = this.head
  }

  /**
   * Some of this checks can be removed (if (beforeNode), etc) -
   * used to provide consistency with TypeScript (might be a better of having)
   * optional prev/next etc properties
   */
  deleteNode(node: DLinkedNode | null): DLinkedNode | null {
    if (!node) return null
    const beforeNode = node.prev
    const afterNode = node.next
    if (beforeNode) {
      beforeNode.next = afterNode
    }
    if (afterNode) {
      afterNode.prev = beforeNode
    }
    node.prev = null
    node.next = null
    return node
  }

  private popTail(): DLinkedNode | null {
    let node = this.tail.prev
    return this.deleteNode(node)
  }

  get(key: number): number | undefined {
    const node = this.cache[key]
    if (!node) return -1

    // move to head = update priority
    this.deleteNode(node)
    this.addToHead(node)
    return node.value
  }

  put(key: number, value: number) {
    const node = this.cache[key]
    if (node) {
      // overwrite value
      node.value = value
      this.deleteNode(node)
      this.addToHead(node)
    } else {
      const node = new DLinkedNode(key, value)
      this.cache[key] = node
      this.addToHead(node)
      this.size++

      if (this.size > this.capacity) {
        const preTail = this.popTail()
        if (preTail && preTail.key !== undefined) {
          delete this.cache[preTail.key]
        }
        this.size--
      }
    }
  }
}

describe('LRU Cache', () => {
  test('should put and get', () => {
    const c = new LRUCache(5)
    c.put(1, 50)
    expect(c.get(1)).toEqual(50)
  })

  test('should return -1 if key not found', () => {
    const c = new LRUCache(5)
    c.put(1, 50)
    expect(c.get(12)).toEqual(-1)
  })

  test('should remove older items', () => {
    const c = new LRUCache(3)
    c.put(1, 10)
    c.put(2, 20)
    c.put(3, 30)
    c.put(4, 40)
    c.put(5, 50)
    expect(c.get(1)).toEqual(-1)
    expect(c.get(2)).toEqual(-1)
    expect(c.get(3)).toEqual(30)
  })
})

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/**
 * LRU cache.
 * https://www.cs.princeton.edu/courses/archive/fall18/cos226/exams/mid-f12-sol.pdf
(a) We use two data structures:
• A doubly-linked list containing the N keys in the cache, with the most-recently cached key
 at the front and the least-recently cached key at the end.
LRU cache data structure
• A symbol table containing the N keys in the cache, where the value is a reference to the node
 in the doubly-linked list containing that key.
To achieve the performance requirement, we use a linear probing hash table of capacity 2N for 
the symbol table. (A separate-chaining hash table would also work.)

inCache(Key key):
• Use the symbol table to determine whether the key is in the cache.
(c) cache(Key key):
• If the key is already in the cache, move the corresponding linked list node from its current position to the front of the list.
• If the key is not already in the cache
– remove the last node from the linked list (and remove the corresponding key
from the symbol table)
– add a new node to the front of the linked list with the given key (and add a
corresponding entry to the symbol table)
95
 */
