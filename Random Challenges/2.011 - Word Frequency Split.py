#!/usr/bin/env python3
"""
TASK

Given a sentence, split it into lowercase words and count how many times
each word appears.

You should:
- Convert all text to lowercase
- Remove basic punctuation like commas and apostrophes
- Split the sentence into words by whitespace
- Count how often each word appears using a dictionary

Example:

Input: "Betty Botter bought some butter, but, said she, the butter's bitter"
Output:
  betty: 1
  botter: 1
  bought: 1
  some: 1
  butter: 2
  but: 1
  said: 1
  she: 1
  the: 1
  bitters: 1
"""

    # convert to lowercase
    # remove punctuation
    # split into words
    # build frequency dictionary
    # print results
sentence = "If I put it in my batter, it will make my batter bitter. But a bit of better butter will make my bitter batter better."    
    
def countWordFrequency(sentence):
    sentence = sentence.lower()

    sentence = sentence.replace(",", "").replace(".", "")

    words = sentence.split()

    freq = {}
    for word in words:
        if word in freq:
            freq[word] += 1
        else:
            freq[word] = 1

    return freq


print(countWordFrequency(sentence))
