/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}

class TreeNode implements TreeNode {
  constructor(val: number) {
    this.val = val
    this.left = null
    this.right = null
  }
}

var distributeCoins = function(root: TreeNode | null): number {
  return 6
}

function buildTree(data: number[]): TreeNode | null {
  return insertLevel(data, null, 0)
}

function insertLevel(
  data: number[],
  node: TreeNode | null,
  i: number,
): TreeNode | null {
  if (i < data.length) {
    const temp = new TreeNode(data[i])
    node = temp
    node.left = insertLevel(data, node.left, 2 * i + 1)
    node.right = insertLevel(data, node.right, 2 * i + 2)
  }
  return node
}

test('distribute coins', () => {
  const tree1 = buildTree([3, 0, 0])
  expect(distributeCoins(tree1)).toEqual(6)
})
