/*
Given an array of positive integers nums, remove the smallest subarray (possibly empty) such that the sum of the remaining elements is divisible by p. It is not allowed to remove the whole array.

Return the length of the smallest subarray that you need to remove, or -1 if it's impossible.

A subarray is defined as a contiguous block of elements in the array.

 

Example 1:

Input: nums = [3,1,4,2], p = 6
Output: 1
Explanation: The sum of the elements in nums is 10, which is not divisible by 6. We can remove the subarray [4], and the sum of the remaining elements is 6, which is divisible by 6.
Example 2:

Input: nums = [6,3,5,2], p = 9
Output: 2
Explanation: We cannot remove a single element to get a sum divisible by 9. The best way is to remove the subarray [5,2], leaving us with [6,3] with sum 9.
Example 3:

Input: nums = [1,2,3], p = 3
Output: 0
Explanation: Here the sum is 6. which is already divisible by 3. Thus we do not need to remove anything.
*/
/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */

// Sum the array and check if it’s divisible by p. If yes, return 0.
// Track prefix sums and use a map to store remainders and indices. (looking up values in map is O(1) on average)
// Find subarrays by comparing the current prefix sum with the target remainder.
// Update smallest subarray length if a valid one is found.
// Return the result: either -1 (no valid subarray) or the smallest subarray length.

// OBS: Obtain the total sum with reduce takes O(n) and to loop and calculate prefix sum is O(n) so overall time complexity is O(n)

var minSubarray = function (nums, p) {
  let totalSum = nums.reduce((acc, num) => acc + num, 0);
  let remainder = totalSum % p;

  if (remainder === 0) return 0;

  let prefixSum = 0;
  let minLength = nums.length;
  let map = new Map();

  map.set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    prefixSum = (prefixSum + nums[i]) % p;

    let target = (prefixSum - remainder + p) % p;
    if (map.has(target)) {
      minLength = Math.min(minLength, i - map.get(target));
    }

    map.set(prefixSum, i);
  }

  return minLength === nums.length ? -1 : minLength;
};
