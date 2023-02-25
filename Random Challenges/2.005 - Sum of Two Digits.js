/*
You are given a two-digit integer n. Return the sum of its digits.

Example

For n = 29, the output should be
solution(n) = 11.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A positive two-digit integer.

Guaranteed constraints:
10 ≤ n ≤ 99.

[output] integer

The sum of the first and second digits of the input number.
*/

function sumTwoDigits(n) {
    let sum = n
    .toString()
    .split('')
    .reduce((partialSum, a) => parseInt(partialSum) + parseInt(a), 0)
    
return sum
}