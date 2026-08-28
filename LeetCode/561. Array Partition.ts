/*
Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.



Example 1:

Input: nums = [1,4,3,2]
Output: 4
Explanation: All possible pairings (ignoring the ordering of elements) are:
1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
So the maximum possible sum is 4.

Example 2:

Input: nums = [6,2,6,5,1,2]
Output: 9
Explanation: The optimal pairing is (1, 2), (2, 5), (6, 6). The minimum of each pair is 1, 2, 6. The sum is 9.
*/

// Sort the nums array from smallest to largest
// Pair adjacent values so each first value is the largest possible minimum
// Add the first value of every pair to the result

function arrayPairSum(nums: number[]): number {
    const sortedArr: number[] = nums.sort((a, b) => a - b);
    let result: number = 0;

    for (let i = 0; i < sortedArr.length; i += 2) {
        result += sortedArr[i];
    }

    return result;
};
