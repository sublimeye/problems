/*
 * @lc app=leetcode id=616 lang=javascript
 *
 * [616] Add Bold Tag in String
 *
 * https://leetcode.com/problems/add-bold-tag-in-string/description/
 *
 * algorithms
 * Medium (40.01%)
 * Total Accepted:    26.1K
 * Total Submissions: 65.3K
 * Testcase Example:  '"abcxyz123"\n["abc","123"]'
 *
 * Given a string s and a list of strings dict, you need to add a closed pair
 * of bold tag <b> and </b> to wrap the substrings in s that exist in dict. If
 * two such substrings overlap, you need to wrap them together by only one pair
 * of closed bold tag. Also, if two substrings wrapped by bold tags are
 * consecutive, you need to combine them. 
 * 
 * Example 1:
 * 
 * Input: 
 * s = "abcxyz123"
 * dict = ["abc","123"]
 * Output:
 * "<b>abc</b>xyz<b>123</b>"
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: 
 * s = "aaabbcc"
 * dict = ["aaa","aab","bc"]
 * Output:
 * "<b>aaabbc</b>c"
 * 
 * 
 * 
 * Note:
 * 
 * The given dict won't contain duplicates, and its length won't exceed 100.
 * All the strings in input have length in range [1, 1000]. 
 * 
 * 
 */
/**
 * @param {string} s
 * @param {string[]} dict
 * @return {string}
 */
var addBoldTag = function(s, dict) {
    
};
