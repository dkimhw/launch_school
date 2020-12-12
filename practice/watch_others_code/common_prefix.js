

/*

Watch Others Code Part 4

Understand the problem

* Input: Array of strings
* Output: String
  * Returns the longest common prefix
  * What is a prefix? Looks like prefix is a series of continuous substrings:
    * flower -> f, fl, flo, flow, etc.

Test cases

console.log( commonPrefix(['flower', 'flow', 'flight']) ); // 'fl'
console.log( commonPrefix(['dog', 'racecar', 'car']) ); // "" 


Algorithms

['flower', 'flow', 'flight']

flo doesn't work because 'flight' doesn't have a prefix of 'flo'

We can use the first word to generate the prefixes. If the prefix in first word
doesn't match prefix in other words, no prefix match.

['flower', 'flower', 'flow']

*/

function commonPrefix(strArr) {
  let firstWord = strArr[0];

  for (let i = firstWord.length; i > 0; i -= 1) {
    let prefix = firstWord.slice(0, i);
    let commonPrefixFound = strArr.every(str => str.includes(prefix));

    if (commonPrefixFound) {
      return prefix;
    }
  }

  return "";
}

console.log( commonPrefix(['flower', 'flow', 'flight']) === 'fl' ); // 'fl'
console.log( commonPrefix(['dog', 'racecar', 'car']) === '' ); // "" 
console.log( commonPrefix(['throne', 'throne']) === 'throne' ); // "throne" 
console.log( commonPrefix(['interspecies', 'interstellar', 'interstate']) === 'inters' ); // "throne" 

