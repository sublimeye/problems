/*
 * @lc app=leetcode id=1157 lang=javascript
 *
 * [1157] Online Majority Element In Subarray
 *
 * https://leetcode.com/problems/online-majority-element-in-subarray/description/
 *
 * algorithms
 * Hard (32.54%)
 * Total Accepted:    2.8K
 * Total Submissions: 8.7K
 * Testcase Example:  '["MajorityChecker","query","query","query"]\n[[[1,1,2,2,1,1]],[0,5,4],[0,3,3],[2,3,2]]'
 *
 * Implementing the class MajorityChecker, which has the following API:
 * 
 * 
 * MajorityChecker(int[] arr) constructs an instance of MajorityChecker with
 * the given array arr;
 * int query(int left, int right, int threshold) has arguments such
 * that:
 * 
 * 0 <= left <= right < arr.length representing a subarray of arr;
 * 2 * threshold > right - left + 1, ie. the threshold is always a strict
 * majority of the length of the subarray
 * 
 * 
 * 
 * 
 * Each query(...) returns the element in arr[left], arr[left+1], ...,
 * arr[right] that occurs at least threshold times, or -1 if no such element
 * exists.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * MajorityChecker majorityChecker = new MajorityChecker([1,1,2,2,1,1]);
 * majorityChecker.query(0,5,4); // returns 1
 * majorityChecker.query(0,3,3); // returns -1
 * majorityChecker.query(2,3,2); // returns 2
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= arr.length <= 20000
 * 1 <= arr[i] <= 20000
 * For each query, 0 <= left <= right < len(arr)
 * For each query, 2 * threshold > right - left + 1
 * The number of queries is at most 10000
 * 
 */
/**
 * @param {number[]} arr
 */
var MajorityChecker = function(arr) {
    
};

/** 
 * @param {number} left 
 * @param {number} right 
 * @param {number} threshold
 * @return {number}
 */
MajorityChecker.prototype.query = function(left, right, threshold) {
    
};

/** 
 * Your MajorityChecker object will be instantiated and called as such:
 * var obj = new MajorityChecker(arr)
 * var param_1 = obj.query(left,right,threshold)
 */
