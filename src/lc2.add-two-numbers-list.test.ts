/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * You are given two non-empty linked lists representing two
 * non-negative integers. The digits are stored in reverse order
 * and each of their nodes contain a single digit. Add the two
 * numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero,
 * except the number 0 itself.
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
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0)
    if (c) sum++

    c = sum > 9 ? 1 : 0
    l3.next = new ListNode(sum % 10)

    l3 = l3.next
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }

  if (c) l3.next = new ListNode(c)

  return result.next
}

test.skip('two sum', () => {})
