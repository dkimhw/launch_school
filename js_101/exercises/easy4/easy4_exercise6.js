

/*
Palindromic Numbers

Input: integer - no validations needed
Output: 
    * true if number is palindromic
    * false if not

Other considerations:
    * Definition: palindrome numbers --> same if you read it forward or backwards
    * Any other gotchas? 

Example:

22 is true because it's the same forward or backward
So isPalindromicNumber(22) => true
*/

function isPalindromicNumber(int) {
    let stringInt = String(int);
    return stringInt === stringInt.split('').reverse().join('');
}

// Test cases:
console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true