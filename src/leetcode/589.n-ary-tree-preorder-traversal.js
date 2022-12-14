/*
 * @lc app=leetcode id=589 lang=javascript
 *
 * [589] N-ary Tree Preorder Traversal
 *
 * https://leetcode.com/problems/n-ary-tree-preorder-traversal/description/
 *
 * algorithms
 * Easy (68.62%)
 * Total Accepted:    54.7K
 * Total Submissions: 79.7K
 * Testcase Example:  '{"$id":"1","children":[{"$id":"2","children":[{"$id":"5","children":[],"val":5},{"$id":"6","children":[],"val":6}],"val":3},{"$id":"3","children":[],"val":2},{"$id":"4","children":[],"val":4}],"val":1}'
 *
 * Given an n-ary tree, return the preorder traversal of its nodes' values.
 *
 * For example, given a 3-ary tree:
 *
 *
 *
 *
 *
 *
 *
 * Return its preorder traversal as: [1,3,5,6,2,4].
 *
 *
 *
 * Note:
 *
 * Recursive solution is trivial, could you do it iteratively?
 *
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  const accum = []
  traverse(root, accum)
  return accum
}

function traverse(root, accum) {
  if (root === null) return null
  accum.push(root.val)
  root.children.forEach(node => {
    traverse(node, accum)
  })
}
