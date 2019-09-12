/*
 * @lc app=leetcode id=919 lang=javascript
 *
 * [919] Complete Binary Tree Inserter
 *
 * https://leetcode.com/problems/complete-binary-tree-inserter/description/
 *
 * algorithms
 * Medium (55.58%)
 * Total Accepted:    10.5K
 * Total Submissions: 18.8K
 * Testcase Example:  '["CBTInserter","insert","get_root"]\n[[[1]],[2],[]]'
 *
 * A complete binary tree is a binary tree in which every level, except
 * possibly the last, is completely filled, and all nodes are as far left as
 * possible.
 * 
 * Write a data structure CBTInserter that is initialized with a complete
 * binary tree and supports the following operations:
 * 
 * 
 * CBTInserter(TreeNode root) initializes the data structure on a given tree
 * with head node root;
 * CBTInserter.insert(int v) will insert a TreeNode into the tree with value
 * node.val = v so that the tree remains complete, and returns the value of the
 * parent of the inserted TreeNode;
 * CBTInserter.get_root() will return the head node of the tree.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: inputs = ["CBTInserter","insert","get_root"], inputs = [[[1]],[2],[]]
 * Output: [null,1,[1,2]]
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: inputs = ["CBTInserter","insert","insert","get_root"], inputs =
 * [[[1,2,3,4,5,6]],[7],[8],[]]
 * Output: [null,3,4,[1,2,3,4,5,6,7,8]]
 * 
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * The initial given tree is complete and contains between 1 and 1000
 * nodes.
 * CBTInserter.insert is called at most 10000 times per test case.
 * Every value of a given or inserted node is between 0 and 5000.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
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
 */
var CBTInserter = function(root) {
    
};

/** 
 * @param {number} v
 * @return {number}
 */
CBTInserter.prototype.insert = function(v) {
    
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
    
};

/** 
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */
