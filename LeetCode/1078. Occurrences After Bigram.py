"""
Given two strings first and second, consider occurrences in some text of the form "first second third",
where second comes immediately after first, and third comes immediately after second.

Return an array of all the words third for each occurrence of "first second third".



Example 1:

Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
Output: ["girl","student"]

Example 2:

Input: text = "we will we will rock you", first = "we", second = "will"
Output: ["we","rock"]

Constraints:

1 <= text.length <= 1000
text consists of lowercase English letters and spaces.
All the words in text are separated by a single space.
1 <= first.length, second.length <= 10
first and second consist of lowercase English letters.
text will not have any leading or trailing spaces.

Note - Bigram: a pair of consecutive elements (here, words) in a sequence. "a good" is a bigram of
the sentence above. N-grams in general are a classic text processing / NLP building block, and
scanning them is a sliding window of fixed size over the word list.
"""

# Split text into a list of words
# Slide a window of 3 words through the list
# If the first two words match first and second, store the third one

class Solution:
    def findOcurrences(self, text: str, first: str, second: str) -> list[str]:
        words_list: list[str] = text.split()
        result: list[str] = []
        for i in range(len(words_list) - 2):
            if (words_list[i] == first and words_list[i+1] == second):
                result.append(words_list[i+2])

        return result
