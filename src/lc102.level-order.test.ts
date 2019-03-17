/**
 * @url: https://leetcode.com/problems/binary-tree-level-order-traversal/submissions/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const order = []
  traverse(root, order, 0)
  return order
}

function traverse(root, order, level) {
  if (root === null) return
  order[level] = order[level] ? [...order[level], root.val] : [root.val]
  traverse(root.left, order, level + 1)
  traverse(root.right, order, level + 1)
}

test.skip('level order', () => {})
