/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if (!l1 || !l2) return l1 || l2
  let l3 = new ListNode(0)
  const result = l3
  let c = 0

  while (l1 || l2) {
    const p = l1 ? l1.val : 0
    const q = l2 ? l2.val : 0
    let sum = p + q + c
    c = ~~(sum / 10)

    l3.next = new ListNode(sum % 10)

    l3 = l3.next
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }

  if (c) l3.next = new ListNode(c)

  return result.next
}

test.skip('two sum', () => {})
