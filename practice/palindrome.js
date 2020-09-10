
/*

PEDA

Understand the Problem (P):

1. Input: Integer
2. Output: boolean
  * True if integer is palindrome
  * False if integer is not palindrome
3. What is a palindrome?
  * Int is palindrome if it reads the same backwards or forwards


Test Cases / Examples (E):

console.log( isPalindrome(121) ); // true
console.log( isPalindrome(-121) ); // false - (-121) vs (121-)
console.log( isPalindrome(10) ); // false 10 vs 01

Data Structures (D):

String & Arrays


Algorithms (A):

1. Take the input, convert to string & save the value '121'
2. Create a new variable & turn each character into an array ['1', '2', '1']
3. I would want to reverse the array and save it to a variable "reversedNumArr" -  ['1', '2', '1']
4. Turn "reversedNumArr" back into a string and save it to "resversedNum". '121'
5. If string from part 1 is equal to "reversedNum" then return true else false


*/

function isPalindrome(num) {
  let numStr = String(num);
  let reversedNumArr = numStr.split('').reverse(); // O(n)
  let reversedNum = reversedNumArr.join(''); // O(n)
  return reversedNum === numStr;
}

// O(n) but 

console.log( isPalindrome(121) ); // true
console.log( isPalindrome(-121) ); // false - (-121) vs (121-)
console.log( isPalindrome(10) ); // false 10 vs 01
