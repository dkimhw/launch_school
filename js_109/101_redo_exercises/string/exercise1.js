
/*

Problem:

Input:
- string

Output:
- boolean
- checks if all characters of string are uppercase
- if true, return true else false
- ignore nonalphabet characters

Examples:

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true

Algorithm:

Step 1: Loop through each character and check if character is uppercase
  - `c === c.toUpperCase()`

Step 2: If not uppercase, return false

Step 3: After loop completes, return true

*/

let isUppercase = (str) => {
  let charArr = str.split('');

  for (let idx = 0; idx < charArr.length; idx += 1) {
    let char = charArr[idx];
    if (char === char.toLowerCase() && /[a-z]/i.test(char)) {
      return false;
    }
  }

  return true;
};

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true
