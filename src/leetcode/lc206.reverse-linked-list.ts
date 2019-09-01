/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * Reverse a singly linked list.
 * Example:
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
 * Follow up:
 * A linked list can be reversed either iteratively or recursively. Could you implement both?
 */

/**
 * While you are traversing the list, change the current node's next pointer
 * to point to its previous element. Since a node does not have reference
 * to its previous node, you must store its previous element beforehand.
 * You also need another pointer to store the next node before changing the
 * reference. Do not forget to return the new head reference at the end!
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head) return null

  let c = head
  let prev = null

  while (c) {
    let next = c.next
    c.next = prev
    prev = c
    c = next
  }
  return prev
}
