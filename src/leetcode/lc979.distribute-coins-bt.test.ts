/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * @url https://leetcode.com/problems/distribute-coins-in-binary-tree
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

type NodeLink = TreeNode | null

interface TreeNode {
  val: number
  left: NodeLink
  right: NodeLink
}

class TreeNode implements TreeNode {
  constructor(val: number) {
    this.val = val
    this.left = null
    this.right = null
  }
}

type Counter = { value: number }
var distributeCoins = function(root: NodeLink): number {
  const counter: Counter = { value: 0 }
  balance(root, counter)
  return counter.value
}

function balance(node: NodeLink, counter: Counter): number {
  if (node === null) return 0
  const left = balance(node.left, counter)
  const right = balance(node.right, counter)
  counter.value += Math.abs(left) + Math.abs(right)
  return node.val - 1 + left + right
}

function buildTree(data: number[]): NodeLink {
  return insertLevel(data, null, 0)
}

function insertLevel(data: number[], node: NodeLink, i: number): NodeLink {
  if (i < data.length) {
    const temp = new TreeNode(data[i])
    node = temp
    node.left = insertLevel(data, node.left, 2 * i + 1)
    node.right = insertLevel(data, node.right, 2 * i + 2)
  }
  return node
}

describe.only('distribute coins', () => {
  test('distribute coins', () => {
    const tree1 = buildTree([3, 0, 0])
    expect(distributeCoins(tree1)).toEqual(2)
  })
})
