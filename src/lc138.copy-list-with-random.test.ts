/**
 * @url: https://leetcode.com/problems/copy-list-with-random-pointer/
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

// T O(n), S O(1) – TEMPORARY mutates the original list and then puts it back
// NICE :)
var copyRandomList = function(head) {
  if (!head) return head
  let original = head

  // store head copy and copy cursor
  // 1. created "weaved" list version
  // - orig.next = clone
  // - clone.next = orig.next
  while (original) {
    const clone = new Node(original.val, original.next)
    original.next = clone
    original = clone.next
  }

  // 2. "find" references to random nodes for cloned elements
  // rewind the head
  original = head
  while (original) {
    original.next.random = original.random ? original.random.next : null
    original = original.next.next
  }

  // 3. unweave the list: back to original and cloned
  const clonedHead = head.next
  original = head
  while (original) {
    const clone = original.next
    original.next = original.next.next
    original = original.next

    clone.next = original ? original.next : null
  }

  return clonedHead
}

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList2 = function(head) {
  if (!head) return head
  let m = new Map()
  const hcopy = new Node(head.val, head.next, head.random)
  let next, random

  m.set(head, hcopy)
  let c = hcopy
  while (c !== null) {
    if (c.next) {
      next = m.get(c.next) || new Node(c.next.val, c.next.next, c.next.random)
      if (!m.has(c.next)) {
        m.set(c.next, next)
      }
      c.next = next
    }

    if (c.random) {
      random =
        m.get(c.random) ||
        new Node(c.random.val, c.random.next, c.random.random)
      if (!m.has(c.random)) {
        m.set(c.random, random)
      }
      c.random = random
    }
    c = c.next
  }
  return hcopy
  // iterate next next next
  // create new node each time
}

/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList3 = function(head) {
  if (!head) return head
  // store head copy and copy cursor
  let chead = new Node(head.val)
  let c = chead
  let h = head

  // cloning the list "next only"
  while (h.next) {
    c.next = new Node(h.next.val)
    c = c.next
    h = h.next
  }

  // O(~n^2) solution to find randoms
  // reset h, c
  h = head
  c = chead
  while (h) {
    let target = h.random
    let hc = head
    let cc = chead
    while (target !== hc) {
      hc = hc.next
      cc = cc.next
    }
    // this way we found that hc === target (random target)
    // so now we can just assign c.random to the hc
    c.random = cc

    h = h.next
    c = c.next
  }

  return chead
}
test.skip('zigzag level order', () => {})
