
/*

PEDA:


Understand the problem (P):

1. Input
  * Integer
2. Output
  * Integer but reversed
  * So 123 -> 321
3. Edge cases
  * Assume we can only reverse 32-bit signed integer
  * -2^31 to 2^31 - 1

Test Cases / Examples (E):

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21


Data Structures (D):

Array


Algorithms (A):

1. Initialize a variable with an array of string characters - remove sign
2. We need to reverse the array of digits - so if we had [1, 2] => [2, 1]
  * Account for leading zeroes when reversed
3. Combine the array of string digits to create reversed number
4. Then check that input `int` is positive or negative - based on that add a negative sign to reversed number

*/


function reverse(int) {  
  let sign = int < 0 ? -1 : 1;
  let numArr = String(Math.abs(int)).split('');
  let reversedNumber = Number(numArr.reverse().join(''));
  return reversedNumber > 0x7FFFFFFF ? 0 : reversedNumber * sign;
}

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
console.log(reverse(1534236469)); // 0

/*

Mistakes:

1. I didn't read the problem well enough - you were suppose to check for overflow on the result not the input
  * Something you should ask
2. I immediately assumed that I needed an array of integers when keeping it as string was much easier to work with


*/