"""
Suppose we have a class:

public class Foo {
  public void first() { print("first"); }
  public void second() { print("second"); }
  public void third() { print("third"); }
}

The same instance of Foo will be passed to three different threads. Thread A will call first(),
thread B will call second(), and thread C will call third(). Design a mechanism and modify
the program to ensure that second() is executed after first(), and third() is executed
after second().

Note: We do not know how the threads will be scheduled in the operating system, even though
the numbers in the input seem to imply the ordering. The input format you see is mainly to
ensure our tests' comprehensiveness.



Example 1:

Input: nums = [1,2,3]
Output: "firstsecondthird"
Explanation: There are three threads being fired asynchronously. The input [1,2,3] means
thread A calls first(), thread B calls second(), and thread C calls third() in that order.
"firstsecondthird" is the correct output.

Example 2:

Input: nums = [1,3,2]
Output: "firstsecondthird"
Explanation: The input [1,3,2] means thread A calls first(), thread B calls third(), and
thread C calls second() in that order. "firstsecondthird" is still the correct output.
"""

# Create two events
# Must lock the second until first is done
# Until second is done, must lock the third

import threading
from typing import Callable

class Foo:
    def __init__(self):
        self.firstDone = threading.Event()
        self.secondDone = threading.Event()


    def first(self, printFirst: 'Callable[[], None]') -> None:

        # printFirst() outputs "first". Do not change or remove this line.
        printFirst()
        self.firstDone.set()


    def second(self, printSecond: 'Callable[[], None]') -> None:

        # printSecond() outputs "second". Do not change or remove this line.
        self.firstDone.wait()
        printSecond()
        self.secondDone.set()


    def third(self, printThird: 'Callable[[], None]') -> None:

        # printThird() outputs "third". Do not change or remove this line.
        self.secondDone.wait()
        printThird()
