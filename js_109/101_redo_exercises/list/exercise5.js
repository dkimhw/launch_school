
/*

Problem:
- Input: String
- Output: 
  - List of all substrings of a string
  - Order the list by where the string begins
  -all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on. 

Example:

console.log(substrings('abcde'));


Algorithm:

Step 1: Create an array of chars

Step 2: Loop through each char (idx). In each loop iteration, start an inner loop
  - At each iteration (jdx) - use slice(idx, jdx) and append to an array

Step 3: Return array

*/

let substrings = (str) => {
  let arrChars = str.split('');
  let arrSubstrings = [];

  for (let idx = 0; idx < arrChars.length; idx += 1) {
    for (let jdx = (idx + 1); jdx <= arrChars.length; jdx += 1) {
      arrSubstrings.push(str.slice(idx, jdx));
    }
  }

  return arrSubstrings;
}

console.log(substrings('abcde'));
