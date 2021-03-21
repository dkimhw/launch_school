
/*

Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

Understand the Problem:

* Input: Positive Integer
* Output: String
  * The output is a string that contains alternating 1s and 0s starting with 1 always. 
  * Length of this string matches the positive integer


Test Cases:

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"

Algorithm:

1. Create an empty variable newString
2. Loop up to the input number
    - For every even index - append 1 to the new string
    - For every odd index - append 0 to the new string
3. Return the newString


*/

let stringy = (num) => {
  let newString = '';

  for (let idx = 0; idx < num; idx += 1) {
    idx % 2 === 0 ? newString += '1' : newString += '0'
  }

  return newString;
}


console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"