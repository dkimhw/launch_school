
/*

Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.


Understand the Problem:

* Input: One integer (can be negative, zero, or positive)
* Output: boolean
  * True if the input integer is oddd
  * Else False

Test Cases:

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

Walk through with specific example:

Input is 2. Since 2 is an even integer, return false

Mini Algorithms:

Take the integer input
Check that the integer is odd
if odd, return true else return false

Logic to check odd:
* We can use the modulus operator. If an integer can be cleanly divided (no remainder) by 2 then mod returns 0

*/

let isOdd = (integer) => {
  return integer % 2 !== 0;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true