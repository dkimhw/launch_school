/* eslint-disable max-len */

/*

Problem:

Input
- String of words

Output
- Array of strings
- Each element contains a word and its length
  "cow 3"

Example:

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []

Algorithm:

Step 1: Loop through an array of words starting from zero idx

Step 2: For each idx, append a new string by `${word} ${word.length}` to an array

Step 3: Return Array

*/

function wordLengths(str) {
  if (arguments.length === 0) {
    return [];
  }

  if (str.length > 0) {
    return str.split(' ').map(char => {
      char = char + " " + char.length;
      return char;
    });
  } else {
    return [];
  }
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []