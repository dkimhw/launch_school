

/*

Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

Understand the Problem:

* Input: String (can contain digits and non-alpha characters)
* Output: boolean
  - true if input is palindrome otherwise false
  - panlindrome reads same forwards and backwars like ana

Test Cases:

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true


Algorithm:

We can reverse the string by looping starting from n-1 and comparing this new reversed string with the inputted string. 

If same - true otherwise false.

*/

let isPalindrome = (str) => {
  return (str.split('').reverse().join('') === str);
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true

