/*
Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
*/

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  // Extract input digits iteratively from least significant to most significant, constructing the reversed number.
  // Compare the original value of x with the reversed number.
  // Return true if they are equal; otherwise, return false.
  // Edgecase: make it without converting to a string
  if (x < 0 || (x !== 0 && x % 10 === 0)) return false;

  let reversed = 0;
  let original = x; // Store original value so the loop doesn't mess with it

  while (x > 0) {
    const digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10); // Update x value by removing least significant digit
  }

  return original === reversed;
};

console.log(isPalindrome(-121));
console.log(isPalindrome(77988977));
