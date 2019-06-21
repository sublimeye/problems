/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  if (!root) return false
  const val = root.val
  function traverse(root, val) {
    if (!root) return true
    if (root.val !== val) return false
    return traverse(root.left, val) && traverse(root.right, val)
  }
  return traverse(root, val)
}
