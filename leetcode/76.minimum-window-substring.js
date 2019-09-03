/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 *
 * https://leetcode.com/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (31.61%)
 * Total Accepted:    268.1K
 * Total Submissions: 843.9K
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * Given a string S and a string T, find the minimum window in S which will
 * contain all the characters in T in complexity O(n).
 *
 * Example:
 *
 * Input: S = "ADOBECODEBANC", T = "ABC"
 * Output: "BANC"
 *
 * Note:
 *
 *
 * If there is no such window in S that covers all characters in T, return the
 * empty string "".
 * If there is such window, you are guaranteed that there will always be only
 * one unique minimum window in S.
 *
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(t, s) {
  let start = (end = head = 0)
  let dist = Number.MAX_SAFE_INTEGER
  let counter = s.length
  let map = {}
  for (let c of s) map[c] = (map[c] || 0) + 1

  while (end < t.length) {
    if (map[t[end]] > 0) counter--
    map[t[end]] = (map[t[end]] || 0) - 1
    end++

    while (counter === 0) {
      if (end - start < dist) {
        dist = end - start
        head = start
      }
      map[t[start]]++
      if (map[t[start]] > 0) counter++
      start++
    }
  }

  return dist === Number.MAX_SAFE_INTEGER ? '' : t.slice(head, head + dist)
}

minWindow('ADOBECODEBANC', 'ABC')
