
/*

Problem:
- Input:
- Output: List of palindromic substirngs of a string
  - each element must be a palindrome (reads sames forward, backward)
  - duplicate substrings should be included multiple times (?)
  - case matters: 'Abcba' != 'AbcbA'

Examples:

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));

Algorithm:

Step 1: Find all substrings that are possible with the input string

Step 2: Loop over each substring and check if the substring is palindrome
  - If yes - add to an array
  - Write helper function to identify palindrome strings

Step 3: Return new array


*/

let isPalindrome = (str) => {
  if (str.length === 1) {
    return false;
  }

  return str === str.split('').reverse().join('');
};

let substrings = (str) => {
  let arrChars = str.split('');
  let arrSubstrings = [];

  for (let idx = 0; idx < arrChars.length; idx += 1) {
    for (let jdx = (idx + 1); jdx <= arrChars.length; jdx += 1) {
      arrSubstrings.push(str.slice(idx, jdx));
    }
  }

  return arrSubstrings;
};

let palindromes = (str) => {
  let listSubstrings = substrings(str);

  return listSubstrings.filter(el => isPalindrome(el));
};

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
