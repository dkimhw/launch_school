/* eslint-disable max-len */

/*

Input:
- Array of Strings

Output:
- Same Array of Strings
- But remove all vowels from each element

Example:

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

Algorithm:

Step 1: Loop over the array of string starting from index 0 (`i`)

Step 2: For each `i`, remove vowels and assign back to the array

Step 3: Return the same array

*/

let removeVowels = (strArr) => {
  for (let idx = 0; idx < strArr.length; idx += 1) {
    strArr[idx] = strArr[idx].replace(/[aeiou]/ig, '');
  }

  return strArr;
};

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
