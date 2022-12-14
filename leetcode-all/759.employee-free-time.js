/*
 * @lc app=leetcode id=759 lang=javascript
 *
 * [759] Employee Free Time
 *
 * https://leetcode.com/problems/employee-free-time/description/
 *
 * algorithms
 * Hard (62.47%)
 * Total Accepted:    18.3K
 * Total Submissions: 29.3K
 * Testcase Example:  '[[{"$id":"1","start":1,"end":2},{"$id":"2","start":5,"end":6}],[{"$id":"3","start":1,"end":3}],[{"$id":"4","start":4,"end":10}]]'
 *
 * We are given a list schedule of employees, which represents the working time
 * for each employee.
 * 
 * Each employee has a list of non-overlapping Intervals, and these intervals
 * are in sorted order.
 * 
 * Return the list of finite intervals representing common, positive-length
 * free time for all employees, also in sorted order.
 * 
 * Example 1:
 * 
 * 
 * Input: schedule = [[[1,2],[5,6]],[[1,3]],[[4,10]]]
 * Output: [[3,4]]
 * Explanation:
 * There are a total of three employees, and all common
 * free time intervals would be [-inf, 1], [3, 4], [10, inf].
 * We discard any intervals that contain inf as they aren't finite.
 * 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: schedule = [[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]]
 * Output: [[5,6],[7,9]]
 * 
 * 
 * 
 * 
 * (Even though we are representing Intervals in the form [x, y], the objects
 * inside are Intervals, not lists or arrays. For example, schedule[0][0].start
 * = 1, schedule[0][0].end = 2, and schedule[0][0][0] is not defined.)
 * 
 * Also, we wouldn't include intervals like [5, 5] in our answer, as they have
 * zero length.
 * 
 * Note:
 * 
 * 
 * schedule and schedule[i] are lists with lengths in range [1, 50].
 * 0 <= schedule[i].start < schedule[i].end <= 10^8.
 * 
 * 
 * NOTE: input types have been changed on June 17, 2019. Please reset to
 * default code definition to get new method signature.
 * 
 * 
 * 
 */
/**
 * // Definition for an Interval.
 * function Interval(start,end) {
 *    this.start = start;
 *    this.end = end;
 * };
 */
/**
 * @param {list<list<Interval>>} schedule
 * @return {list<Interval>}
 */
var employeeFreeTime = function(schedule) {
    
};
