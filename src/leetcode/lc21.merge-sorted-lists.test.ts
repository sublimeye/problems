// https://leetcode.com/problems/merge-two-sorted-lists/
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
var mergeTwoLists = function(l1: ListNode, l2: ListNode) {
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
  // now one of the lists l1 or l2 is empty, we need to "finish" and point c.next to it
  c.next = l1 || l2

  return head.next
}

test.skip('merge linked lists', () => {})
