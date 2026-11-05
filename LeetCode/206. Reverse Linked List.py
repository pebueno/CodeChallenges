"""
Given the head of a singly linked list, reverse the list, and return the reversed list.



Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:

Input: head = [1,2]
Output: [2,1]

Example 3:

Input: head = []
Output: []

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

Note - Recursion: a function that solves a problem by calling itself on a smaller input until it
hits a base case. Here each call reverses the rest of the list (head.next onward), then hooks the
current node onto the end of that reversed part on the way back up the call stack.
"""

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    # Challenge: solve interactively and recursively
    
    # Interactively,
    # Use two pointers, 
      # one to track Node and 
      # the other to reverse the arrow by pointing next as the previous node
    # While we didn't reach Node value None, store next Node to don't lose track of it
    # and after switch curr node next to previous, point current to next
    """
    def reverseList(self, head: ListNode | None) -> ListNode | None:
        
        current = head
        previous = None      
        
        while current is not None:
            next = current.next
            current.next = previous
            previous = current
            current= next
        return previous
    """
        
    # Recursively
    
    # If the list is empty or has one node, it's already reversed: return head
    # Recursively reverse everything after head; save the result as new_head
    # Make the next node point back to head (head.next.next = head)
    # Make head the tail (head.next = None)
    # Return new_head; it's the same at every level on the way back
    def reverseList(self, head):
        if head is None or head.next is None:
            return head
        new_head = self.reverseList(head.next)
        head.next.next = head   
        head.next = None        

        return new_head    