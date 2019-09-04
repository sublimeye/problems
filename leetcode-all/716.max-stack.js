/*
 * @lc app=leetcode id=716 lang=javascript
 *
 * [716] Max Stack
 *
 * https://leetcode.com/problems/max-stack/description/
 *
 * algorithms
 * Easy (40.84%)
 * Total Accepted:    30.9K
 * Total Submissions: 75.8K
 * Testcase Example:  '["MaxStack","push","push","push","top","popMax","top","peekMax","pop","top"]\n[[],[5],[1],[5],[],[],[],[],[],[]]'
 *
 * Design a max stack that supports push, pop, top, peekMax and popMax.
 * 
 * 
 * 
 * push(x) -- Push element x onto stack.
 * pop() -- Remove the element on top of the stack and return it.
 * top() -- Get the element on the top.
 * peekMax() -- Retrieve the maximum element in the stack.
 * popMax() -- Retrieve the maximum element in the stack, and remove it. If you
 * find more than one maximum elements, only remove the top-most one.
 * 
 * 
 * 
 * Example 1:
 * 
 * MaxStack stack = new MaxStack();
 * stack.push(5); 
 * stack.push(1);
 * stack.push(5);
 * stack.top(); -> 5
 * stack.popMax(); -> 5
 * stack.top(); -> 1
 * stack.peekMax(); -> 5
 * stack.pop(); -> 1
 * stack.top(); -> 5
 * 
 * 
 * 
 * Note:
 * 
 * -1e7 
 * Number of operations won't exceed 10000.
 * The last four operations won't be called when stack is empty.
 * 
 * 
 */
/**
 * initialize your data structure here.
 */
var MaxStack = function() {
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
    
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
    
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
    
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
    
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
    
};

/** 
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */
