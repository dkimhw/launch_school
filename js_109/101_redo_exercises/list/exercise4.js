
/*

Problem:
- Input: string
- Output:
  - list of substrings 
  - each substring should begin with the first letter of the word
  - sorted from shortest to longest

Example:

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]


Algorithm:

Step 1: Loop through each character of the string. For each loop, access the string from
index 0 to the current iteration idx.

Step 2: Append the new substring in an array

Step 3: Return the array

*/

let leadingSubstrings = (str) => {
  let substringArr = [];
  let arrChars = str.split('');

  for (let idx = 1; idx <= arrChars.length; idx++) {
    substringArr.push(str.slice(0, idx));
  }

  return substringArr;
};

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

