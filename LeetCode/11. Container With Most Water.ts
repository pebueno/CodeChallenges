/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two
endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.



Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the
max area of water the container can contain is 49 (lines at index 1 and 8: width 7 * min(8, 7) = 49).

Example 2:

Input: height = [1,1]
Output: 1

Constraints:

n == height.length
2 <= n <= 10^5
0 <= height[i] <= 10^4
*/

function maxArea(height: number[]): number {
    // Initialize two pointers
    // One store highest array number from left and other from right
    // While right < left, store the width between the two
    // Find shorter line between two most highest points
    // Calculate max area (X*Y) comparing currentArea against further inputs for a hiegher volume chunk

    let left: number = 0;
    let right: number = height.length - 1;
    let maxArea: number = 0;

    while(left < right) {
        let width: number = right - left;
        let shorterLine = Math.min(height[left], height[right]);
        let currentArea = width * shorterLine;

        maxArea = Math.max(maxArea, currentArea);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};
