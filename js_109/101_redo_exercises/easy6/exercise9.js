/* eslint-disable max-len */


/*

Problem:
Input: string
Output:
- string
- if word.length >= 5 then reverse the order of the characters

Example:

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

Algorithm:

Step 1:
Split the string into array of words

Step 2:
Loop through the array.
Check length
If >= 5 then reverse order of characters
Replace current index's value

Step 3:
Return array.join(' ');
*/

let reverseWords = (str) => {
  let wordArr = str.split(' ');

  for (let idx = 0; idx < wordArr.length; idx++) {
    let wordLength = wordArr[idx].length;

    if (wordLength >= 5) {
      wordArr[idx] = wordArr[idx].split('').reverse().join('');
    }
  }

  return wordArr.join(' ');
};


console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
