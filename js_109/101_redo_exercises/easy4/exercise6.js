
/*

Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.

Understand the Problem:

- Input: Integer
- Output: Boolean
  - true if palindrome
  - otherwise false

Test Cases:

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true

Algorithm:

Convert intger to string, then array, reverse, join and compare with string input

*/

let isPalindromicNumber = (int) => {
  let intStr = String(int);

  return intStr === (intStr.split('').reverse().join(''));
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
