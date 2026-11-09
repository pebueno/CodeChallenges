"""
Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
...



Example 1:

Input: columnNumber = 1
Output: "A"

Example 2:

Input: columnNumber = 28
Output: "AB"

Example 3:

Input: columnNumber = 701
Output: "ZY"

Constraints:

1 <= columnNumber <= 2^31 - 1

Note - Bijective base-26: Excel columns are like base 26, but the digits go from 1 to 26 (A to Z)
instead of 0 to 25, so there is no zero digit. When the remainder is 0 the digit is really Z (26),
and 26 has to be taken out of the number before dividing again.
"""

# Knowing alphabet goes from 1 to 26 (A->Z)
# Creat dictionary containing all alphabet letters from A to Z enumerated
# Loop through the input number,
 # While it is higher than 0 keep dividing by 26
 # Pick dict letter in the position of the remainder and add to the end of the string
 # If remainder equal to 0, that is letter Z, then we have to subtract 26 before dividing again

class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        alphabet = dict(enumerate("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 1))
        result = ""

        while columnNumber > 0:
            remainder = columnNumber%26
            if remainder == 0:
                remainder = 26
                columnNumber -= 26
            result = alphabet[remainder] + result
            columnNumber //= 26

        return result
