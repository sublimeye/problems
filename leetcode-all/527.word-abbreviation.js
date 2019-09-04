/*
 * @lc app=leetcode id=527 lang=javascript
 *
 * [527] Word Abbreviation
 *
 * https://leetcode.com/problems/word-abbreviation/description/
 *
 * algorithms
 * Hard (51.22%)
 * Total Accepted:    12.6K
 * Total Submissions: 24.6K
 * Testcase Example:  '["like","god","internal","me","internet","interval","intension","face","intrusion"]'
 *
 * Given an array of n distinct non-empty strings, you need to generate minimal
 * possible abbreviations for every word following rules below.
 * 
 * 
 * Begin with the first character and then the number of characters
 * abbreviated, which followed by the last character.
 * If there are any conflict, that is more than one words share the same
 * abbreviation, a longer prefix is used instead of only the first character
 * until making the map from word to abbreviation become unique. In other
 * words, a final abbreviation cannot map to more than one original words.
 * ⁠If the abbreviation doesn't make the word shorter, then keep it as
 * original.
 * 
 * 
 * Example:
 * 
 * Input: ["like", "god", "internal", "me", "internet", "interval",
 * "intension", "face", "intrusion"]
 * Output:
 * ["l2e","god","internal","me","i6t","interval","inte4n","f2e","intr4n"]
 * 
 * 
 * 
 * 
 * Note: 
 * 
 * ⁠Both n and the length of each word will not exceed 400.
 * ⁠The length of each word is greater than 1.
 * ⁠The words consist of lowercase English letters only.
 * ⁠The return answers should be in the same order as the original array.
 * 
 */
/**
 * @param {string[]} dict
 * @return {string[]}
 */
var wordsAbbreviation = function(dict) {
    
};
