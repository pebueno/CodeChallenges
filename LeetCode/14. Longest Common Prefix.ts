/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/

// Initialize prefix as an empty string.
// Handle the edge case (if the input array strs is empty, return an empty string) 
// Iterate through characters of the first string (start with the first character of the first string)
// Check character match (compare this character with the corresponding characters in other strings)
// Build the prefix (if all characters match, append the character to the prefix)
// Repeat steps 3-5 until all characters are checked or a mismatch is found.
// Return the final prefix.
// Edge case: return string if the input first element is an empty string as well

function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return '';

    let prefix = '';

    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                return prefix;
            }
        }

        prefix += char;
    }

    return prefix;
}
