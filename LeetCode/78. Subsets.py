"""
Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.



Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:

Input: nums = [0]
Output: [[],[0]]

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.

Note - Power set: the set of all subsets of a set, including the empty set and the set itself. A set
of n elements has 2^n subsets, since each element is either in or out. Here it is built iteratively:
every new number doubles the result by being appended to a copy of each existing subset.
"""

# Create variable to store result_list
# Insert an empty_list at the beginning of the result_list
# Loop through every element from the given array
    # Create temp_list variable for the new subsets
    # Loop again through the result_list 
        # Shallow copy the element from current loop
        # Insert to the copy list the current element from first loop iteration and them insert to the temp_list
    # Unpack the temp_list and feed result_list with it 
class Solution:
    def subsets(self, nums: list[int]) -> list[list[int]]:
        unique_results = [[]]

        for num in nums:
            temp_list = []

            for subset in unique_results:
                shallow_copy = subset[:]
                shallow_copy.append(num)
                temp_list.append(shallow_copy)

            unique_results.extend(temp_list)

        return unique_results