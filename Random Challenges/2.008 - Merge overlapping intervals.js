/* TASK
Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals, 
and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
*/

// Sort the intervals based on their start points.
// Initialize an empty array to store the merged intervals.
// Iterate over the sorted intervals:
//  a. If the current interval overlaps with the last merged interval:
//      - Update the end point of the last merged interval if needed.
//  b. If the current interval does not overlap with the last merged interval:
//      - Add the current interval to the merged intervals.
// Return the merged intervals.
// Edgecase: Dont run the code for individual interval

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length <= 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  let mergedIntervals = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let currentInterval = intervals[i];
    let lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

    // console.log({ lastMergedInterval });
    // console.log({ currentInterval });
    if (currentInterval[0] <= lastMergedInterval[1]) {
      lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
    } else {
      mergedIntervals.push(currentInterval);
    }
  }
  console.log(mergedIntervals)
  return mergedIntervals;
};
const intervals = [[1,3],[2,4],[4,5],[6,8],[7,9]];

merge(intervals);
