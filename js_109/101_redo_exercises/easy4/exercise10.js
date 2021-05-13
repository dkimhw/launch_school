
/*

Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.


Problem:

- Input: string separated by spaces
- Output: string
  - Logic: for every word swap first and last letter of ever word
  - Each word has at least one letter
  - At least one word
  - Assume that no repeating spaces; no leading/trailing white spaces


Example:

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"


Algorithm:

Step 1: Split the string into words
Step 2: For each word, we swap first and last letter. If it is only one letter - don't do anything.
Step 3: Return the new swapped string

*/

let swap = (str) => {
  let words = str.split(' '); // assume no edge cases (separated by one whitespace);

  words = words.map(word => {
    let wordLength = word.length;

    if (wordLength === 1) {
      return word;
    } else {
      return word[wordLength - 1] + word.substring(1, wordLength - 1) + word[0];
    }
  });
  
  return words.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"

