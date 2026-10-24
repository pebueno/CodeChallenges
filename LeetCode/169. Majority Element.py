"""
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than floor(n / 2) times. You may assume that the
majority element always exists in the array.



Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:

n == nums.length
1 <= n <= 5 * 10^4
-10^9 <= nums[i] <= 10^9
The input is generated such that a majority element will exist in the array.

Follow-up: Could you solve the problem in linear time and in O(1) space?

Note - Boyer-Moore Voting Algorithm: the classic answer to the follow-up. Keep one candidate and a
counter; matching elements increment it, different ones decrement it, and at 0 the next element becomes
the candidate. Since the majority appears more than n/2 times it can't be cancelled out, giving O(n) time
and O(1) space (vs. O(n log n) when sorting first).
"""

# Sort in ascending order the list
# Create current_element to store the first element of the list
# Loop through list comparing if the current_element has changed
    # If not adds to the occurences counting
    # If it has, check if this current occurrences has exceeded the previous, add the value to most_occurrences and set occurences back to 1, and store the current major element

# Check if this current occurrences has exceeded the previous again so we don't lose in case there was a last adition in the end of the loop

# edge-case: return first element in the list case list has one element only
class Solution:
    def majorityElement(self, nums: list[int]) -> int:
        if len(nums) == 1:
            return nums[0]

        nums.sort()
        most_occurences = 0
        result_number = nums[0]
        occurrences = 1
        current_number = nums[0]

        for i in range(len(nums) -1):
            if current_number == nums[i+1]:
                occurrences += 1
            else:
                if occurrences > most_occurences:
                    most_occurences = occurrences
                    result_number = current_number

                current_number = nums[i+1]
                occurrences = 1

        if occurrences > most_occurences:
            result_number = current_number

        return result_number