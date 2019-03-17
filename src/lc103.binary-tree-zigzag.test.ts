/**
 * @url: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
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
var zigzagLevelOrder = function(root) {
  const order = []
  traverse(root, order, 0)
  return order
}

function traverse(root, order, level) {
  if (root === null) return
  if (!order[level]) order[level] = [root.val]
  else {
    order[level] = !(level % 2)
      ? [...order[level], root.val]
      : [root.val, ...order[level]]
  }

  traverse(root.left, order, level + 1)
  traverse(root.right, order, level + 1)
}

test.skip('zigzag level order', () => {})
