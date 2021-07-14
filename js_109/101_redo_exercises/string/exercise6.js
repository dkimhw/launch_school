/* eslint-disable max-len */

/*

Problem:

Input
- String

Output
- String
- Every other character starting from the first should be capitalized
  followed by a lowercase or non-alpha character
- don't change non-alpha character

Example:

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

Algorithm:

Step 1: Loop through each character starting from `idx` 0

Step 2:
  If even idx - uppercase char
  If odd idx - check if it's uppercase, if it is - make it lowercase
              - if non-alpha or lowercase, leave it unchanged

Step 3: Return new string
*/

let isUpperCase = (char) => {
  return char === char.toUpperCase() && /[a-z]/i.test(char);
};

let staggeredCase = (str) => {
  let charArr = str.split('');

  for (let idx = 0; idx < charArr.length; idx += 1) {
    let char = charArr[idx];
    if (idx % 2 === 0) {
      charArr[idx] = char.toUpperCase();
    } else if (idx % 2 !== 0) {
      if (isUpperCase(char)) {
        charArr[idx] = char.toLowerCase();
      }
    }
  }

  return charArr.join('');
};

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"
