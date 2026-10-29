"""
Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.

Return s after reversing it.



Example 1:

Input: s = "ab-cd"
Output: "dc-ba"

Example 2:

Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"

Example 3:

Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"

Constraints:

1 <= s.length <= 100
s consists of characters with ASCII values in the range [33, 122].
s does not contain '\\"' or '\\'.
"""

# Transform the string in a list of each character
# Remove from the list every text character and store them in a list if it's not a text char store in another list (also store the empty characters)
# Sort reverse the extracted text
# Place in the empty positions in the first list
# Convert list back to a string

class Solution:
    def reverseOnlyLetters(self, s: str) -> str:
        input_list = list(s)
        extracted_letters = []
        filtered_list = []

        for char in input_list:

            if char.isalpha():
                extracted_letters.append(char)
                filtered_list.append('')
            else:
                filtered_list.append(char)

        extracted_letters = extracted_letters[::-1]

        letter_index = 0
        for i in range(len(filtered_list)):
            if  filtered_list[i] == '':
                filtered_list[i] = extracted_letters[letter_index]
                letter_index += 1
            
        result_string = "".join(filtered_list)

        return result_string
