#!/usr/bin/env python3
"""
TASK

JSON Tree Flattener

Read a JSON object from stdin and produce a flat dotted-path representation
where each leaf value becomes a line in the format path.to.leaf=value.

Rules:
- Object keys use dot notation: obj.key
- Array indices use bracket notation: arr[0]
- Null values are represented as null
- Empty objects {} and empty arrays [] are not output (they have no leaves)
- Sort all output paths alphabetically
- Unicode keys are supported

Input/Output Protocol:
- Input: A single line containing valid JSON
- Output: Each leaf path on its own line, sorted alphabetically

Example:

Input:
{"name": "Alice", "scores": [85, 92], "meta": {"active": true, "tags": null}}

Output:
meta.active=true
meta.tags=null
name=Alice
scores[0]=85
scores[1]=92

Input:
{"users": [{"id": 1, "name": "Bob"}, {"id": 2, "name": "Carol"}]}

Output:
users[0].id=1
users[0].name=Bob
users[1].id=2
users[1].name=Carol

Input:
{"count": 42, "rate": 3.14, "enabled": false, "data": null}

Output:
count=42
data=null
enabled=false
rate=3.14
"""

import json
import sys


def format_value(value):
    if isinstance(value, str):
        return value
    return json.dumps(value)


def flatten_json(obj, prefix=""):
    # Create empty list for the lines
    # Loop over the incoming objects to check wether is a list or a dict
        # If its a dict lets pass through each key
        # If its a list lets pass through each index
        # If its a leaf, we have reached the final line.

    # Create function to transform the text from a leaf value
    # Return list of lines after have iterated through every obj

    lines = []

    if isinstance(obj, dict):
        for key, value in obj.items():
            if prefix == "":
                new_path = key
            else:
                new_path = prefix + "." + key
            lines += flatten_json(value, new_path)

    elif isinstance(obj, list):
        for index, value in enumerate(obj):
            new_path = prefix + "[" + str(index) + "]"
            lines += flatten_json(value, new_path)
    else:
        lines.append(prefix + "=" + format_value(obj))

    return lines


# Read JSON from stdin
input_line = sys.stdin.read().strip()
data = json.loads(input_line)

# Flatten and sort paths
paths = flatten_json(data)
paths.sort()

# Output each path
for path in paths:
    print(path)
