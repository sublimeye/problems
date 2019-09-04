/*
 * @lc app=leetcode id=156 lang=javascript
 *
 * [156] Binary Tree Upside Down
 *
 * https://leetcode.com/problems/binary-tree-upside-down/description/
 *
 * algorithms
 * Medium (52.02%)
 * Total Accepted:    51.1K
 * Total Submissions: 98.2K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * Given a binary tree where all the right nodes are either leaf nodes with a
 * sibling (a left node that shares the same parent node) or empty, flip it
 * upside down and turn it into a tree where the original right nodes turned
 * into left leaf nodes. Return the new root.
 * 
 * Example:
 * 
 * 
 * Input: [1,2,3,4,5]
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   3
 * ⁠/ \
 * 4   5
 * 
 * Output: return the root of the binary tree [4,5,2,#,#,3,1]
 * 
 * ⁠  4
 * ⁠ / \
 * ⁠5   2
 * ⁠   / \
 * ⁠  3   1  
 * 
 * 
 * Clarification:
 * 
 * Confused what [4,5,2,#,#,3,1] means? Read more below on how binary tree is
 * serialized on OJ.
 * 
 * The serialization of a binary tree follows a level order traversal, where
 * '#' signifies a path terminator where no node exists below.
 * 
 * Here's an example:
 * 
 * 
 * ⁠  1
 * ⁠ / \
 * ⁠2   3
 * ⁠   /
 * ⁠  4
 * ⁠   \
 * ⁠    5
 * 
 * 
 * The above binary tree is serialized as [1,2,3,#,#,4,#,#,5].
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var upsideDownBinaryTree = function(root) {
    
};
