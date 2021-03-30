
/*

Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

Understand the Problem:

* Input: string (includes non-alpha characters - 0-9, a-z) but not , ' ""
* Output: boolean
  - true if palindrome after stripping non-alphanumeric characters and case-insensitve ('M' === 'm')
  - otherwise false

Test Cases:

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false


Algorithm:

Part 1: Cleaning the String

Step 1: Look through each character in string and check whether the character is alphanumeric.

Step 2: If alphanumeric - keep, otherwise replace with ''


Part 2: Check palindrome

Step 1: Use the helper function we created in exercise4

*/

let isAlphaNumeric = (char) => {
  return /[a-z0-9]/gi.test(char);
}


let isPalindrome = (str) => {
  return (str.split('').reverse().join('') === str);
}

let isRealPalindrome = (str) => {
  let cleanStr = str.split('').filter(el => isAlphaNumeric(el)).join('');
  cleanStr = cleanStr.toLowerCase();
  
  return isPalindrome(cleanStr);
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false

