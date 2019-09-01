// Given an n-ary tree, return the preorder traversal of its nodes' values.
// Recursive solution is trivial, could you do it iteratively?
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
var preorder2 = function(root) {
  if (!root) return []
  let ch = []
  if (root.children) {
    for (let c of root.children) {
      ch = ch.concat(preorder(c))
    }
  }
  return [root.val].concat(ch)
}

var preorder3 = function(root) {
  const result = []
  function traverse(node) {
    if (!node) return null
    result.push(node.val)
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        traverse(node.children[i])
      }
    }
  }
  traverse(root)
  return result
}

var preorder = function(root) {
  const result = []
  const q = []

  q.push(root)

  while (q.length) {
    const n = q.pop()
    if (!n) continue
    result.push(n.val)
    if (n.children) {
      for (let i = n.children.length - 1; i >= 0; i--) {
        q.push(n.children[i])
      }
    }
  }

  return result
}
