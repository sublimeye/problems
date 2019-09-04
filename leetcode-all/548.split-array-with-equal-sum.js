/*
 * @lc app=leetcode id=548 lang=javascript
 *
 * [548] Split Array with Equal Sum
 *
 * https://leetcode.com/problems/split-array-with-equal-sum/description/
 *
 * algorithms
 * Medium (43.85%)
 * Total Accepted:    9.3K
 * Total Submissions: 21.2K
 * Testcase Example:  '[1,2,1,2,1,2,1]'
 *
 * 
 * Given an array with n integers, you need to find if there are triplets  (i,
 * j, k) which satisfies following conditions:
 * 
 * ⁠0 < i, i + 1 < j, j + 1 < k < n - 1 
 * ⁠Sum of subarrays (0, i - 1), (i + 1, j - 1), (j + 1, k - 1) and (k + 1, n -
 * 1) should be equal. 
 * 
 * where we define that subarray (L, R) represents a slice of the original
 * array starting from the element indexed L to the element indexed R.
 * 
 * 
 * Example:
 * 
 * Input: [1,2,1,2,1,2,1]
 * Output: True
 * Explanation:
 * i = 1, j = 3, k = 5. 
 * sum(0, i - 1) = sum(0, 0) = 1
 * sum(i + 1, j - 1) = sum(2, 2) = 1
 * sum(j + 1, k - 1) = sum(4, 4) = 1
 * sum(k + 1, n - 1) = sum(6, 6) = 1
 * 
 * 
 * 
 * Note:
 * 
 * ⁠1 
 * ⁠Elements in the given array will be in range [-1,000,000, 1,000,000]. 
 * 
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var splitArray = function(nums) {
    
};
