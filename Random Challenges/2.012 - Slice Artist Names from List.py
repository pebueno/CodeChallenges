#!/usr/bin/env python3
"""
TASK

Given a flat list representing top songs in the format:
[rank, song_title, artist, rank, song_title, artist, ...]

Write a program to extract and return only the artist names using list slicing.

Example:

Input:
[
    1, 'Blinding Lights', 'The Weeknd',
    2, 'One Dance', 'Drake',
    3, 'Uptown Funk', 'Mark Ronson',
    ...
]

Output:
['The Weeknd', 'Drake', 'Mark Ronson', ...]
"""

top_songs = [
    1, 'Blinding Lights', 'The Weeknd',
    2, 'One Dance', 'Drake',
    3, 'Uptown Funk', 'Mark Ronson',
    4, 'Closer', 'The Chainsmokers',
    5, 'One Kiss', 'Calvin Harris',
    6, 'Mr. Brightside', 'The Killers'
]

# Get every 3rd element starting from index 2 (artist names)
artists = top_songs[2::3]

print(artists)
