type ListNode = {
  next: ListNode
  value: any
}

var detectCycle = function(head: ListNode) {
  // detect a cycle using two pointers
  // if cycle exists
  // detect a cycle by launching two pointers ...
  if (!head || !head.next) return null

  let slow = head
  let fast = head

  // while there is a next element do
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      while (slow !== head) {
        slow = slow.next
        head = head.next
      }
      return slow
    }
  }

  return null
}
