// @link: https://leetcode.com/problems/min-stack/
/**
 * initialize your data structure here.
 * 1. Approach 1: to use 2 arrays. Store entire stack "the regular way" in the stack.
 * Store "minimums" in the second array. On push if x <= then minimums (current minimum), then
 * add to both arrays. Otherwise just update the stack.
 *
 * 2. Use singly linked list (regular stack impl) but extend each node with "minimum" slot that
 * represents the value of the minimum element at that node time. I.e. it should be the minimum
 * among all predecessor nodes.
 * Example: [value, min] <- [value, min]<-
 * Sequence 5, 2, 7, 1:
 * push 5 [5,5]
 * push 2 [2,2] <- [5,5]
 * push 7 [7,2] <- [2,2] <- [5,5]
 * push 1 [1,1] <- [7,2] <- [2,2] <- [5,5]
 * The second element always shows minimum for all current and previous nodes
 *
 */
var MinStack = function() {
  this.min = []
  this.stack = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x)
  if (this.min.length === 0 || x <= this.getMin()) this.min.push(x)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.getMin() === this.top()) {
    this.min.pop()
  }
  this.stack.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min[this.min.length - 1]
}

//
//
//
// Linked list solution (more elegant looking, but in reality may perform worse - due to array access speed)
//
//
//
class Node {
  constructor(val, min, next = null) {
    this.val = val
    this.min = min
    this.next = next
  }
}

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.head = null
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (!this.head) {
    this.head = new Node(x, x)
  } else {
    const min = Math.min(this.head.min, x)
    const pushed = new Node(x, min, this.head)
    this.head = pushed
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.head = this.head.next
}

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.head.val
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.head.min
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
