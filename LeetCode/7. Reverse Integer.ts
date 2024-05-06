/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
*/

/* First solution, transforming into string:

function reverse(x: number): number {

    let numberArr = ('' + x).split('');
    let reverseInteger = [];
    let negativeNumber = false;

    if (numberArr[0] == '-') {
        numberArr.shift();
        negativeNumber = true;
    }

    for (let i = 0; i < numberArr.length; i++) {
        reverseInteger.push(numberArr[numberArr.length - 1 - i])
    }

    if (parseInt(reverseInteger.join('')) < -(2**31) || parseInt(reverseInteger.join('')) > (2**31)) return 0;

    return x = negativeNumber ? 
        parseInt('-' + reverseInteger.join('')) : 
        parseInt(reverseInteger.join(''));
};
*/
function reverse(x: number): number {
    let result = 0;
    let isNegative = x < 0 ? true : false;
    if (isNegative) x = x * -1;

    while (x > 0) {
        const lastDigit = x % 10;
        result = result * 10 + lastDigit;
        x = Math.floor(x / 10);
    }

    if (result < -(2 ** 31) || result > (2 ** 31)) return 0;

    return x = isNegative ? - result : result
};