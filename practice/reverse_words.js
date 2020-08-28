
/*

PEDAC

Understand the Problem (P):

* Explicit requirements:
  * Reverse each word in the string. What constitutes a word?
    * A word is a series of characters separated by a single whitespace - ask if that is the correct definition
  * Input: String (any validation required? Or special handling for non-string)
  * Output: String but each word is reversed

* Implicit requirements:
  * It looks like non-letter characters are reversed here as well and considered part of the word.


Examples / Test Cases (E):

reverseWords('The quick brown fox jumps over the lazy dog.') // 'ehT kciuq nworb xof spmuj revo eht yzal .god'
reverseWords('apple') //  'elppa'
reverseWords('a b c d') // 'a b c d'
reverseWords('double  spaced  words') // 'elbuod  decaps  sdrow')

Data Structures (D):

* Arrays - since we need to loop each word and reverse them

Algorithms (A):

1. Create a variable called "words"
2. Take the string input - split the string by delimiter " " and assign it to "words"
3. Loop over "words"
  * For each iteration of the loop, we want to reverse the word. 
  * For each element - they are string - we need to convert it to array again and reverse then joined back up
  * Use JS's built-in reverse() method (and we want it to be destructive)
4. return "words" converted to string

Implementation:

* reverse(), split(), join()

*/


function reverseWords(str) {
  let words = str.split(' ');

  return words.map(word => word.split('').reverse().join('')).join(' ');
}



console.log(reverseWords('The quick brown fox jumps over the lazy dog.')); // 'ehT kciuq nworb xof spmuj revo eht yzal .god'
console.log(reverseWords('apple')); //  'elppa'
console.log(reverseWords('a b c d')); // 'a b c d'
console.log(reverseWords('double  spaced  words')); // 'elbuod  decaps  sdrow')
