
/*

Easy 2

The End Is Near But Not Here

Write a function that returns the next to last word in the String passed to it as an argument.
Words are any sequence of non-blank characters.
You may assume that the input String will always contain at least two words.


Understand the problem:

* Input: string
* Output: string
  - returns next to last word
* Key logic:
  - words are sequences of non-blank characters - delimiter is a space
  - assume that input string will always contain at least two words - no need for validations


Test cases:

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true


Quick walkthrough of the test cases:

Input string is "Launch School is great!" -> the next to last word. Last word here is obviously great - we are looking for the word that is one before the last.


Quick Algorithm:

Break up the string into words (separated by spaces). "Hello David" -> contains two words separated by a space
Once you have the list of words - take the second to last word and return that.


*/

let penultimate = (str) => {
  let words = str.split(' ');

  return words.slice(-2, -1)[0];
  //return wordsArray[wordsArray.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
