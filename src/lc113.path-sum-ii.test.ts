/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  // TODO: check out why c / paths are fucking up )
  const c = { paths: [] }
  traverse(root, sum, c, [])
  return c.paths
}

function traverse(root, sum, c, path) {
  if (root === null) return
  path.push(root.val)

  if (root.left === null && root.right === null) {
    const pathSum = path.reduce((a, p) => a + p, 0)
    if (pathSum === sum) c.paths = [...c.paths, path.slice()]
  }

  traverse(root.left, sum, c, path)
  traverse(root.right, sum, c, path)
  path.pop()
}
