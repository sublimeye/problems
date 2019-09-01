// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * 
 * 
 * 
 * One pass algorithm
Algorithm
The above algorithm could be optimized to one pass. Instead of one pointer, we could use two pointers. The first pointer advances the list by
n
+
1
n+1 steps from the beginning, while the second pointer starts from the beginning of the list. Now, both pointers are exactly separated by
n
n nodes apart. We maintain this constant gap by advancing both pointers together until the first pointer arrives past the last node. The second pointer will be pointing at the
n
nth node counting from the last. We relink the next pointer of the node referenced by the second pointer to point to the node's next next node.
 * @param n 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (!head) return null
  const dummy = new ListNode()
  dummy.next = head

  let first = dummy
  let second = dummy

  for (let i = 0; i < n; i++) {
    if (first.next) {
      first = first.next
    }
  }

  while (first.next) {
    first = first.next
    second = second.next
  }

  second.next = second.next.next

  return dummy.next
}
