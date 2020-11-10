
/*

Understand the problem

* Input
  * string (non-empty)
  * lowercase only
* Output
  * Boolean
  * Logic: checks if the input string can be constructed by taking a substring and appending multiple copies of the substring together
* What is a substring?
  * I guess characters > 1
  * Do you consider full string to be substring as well? Let's say no

"abab" - this is true
Why? substring "ab" can be combined with "ab" to form "ab"

"aba"
false. Available substrings are "ab", "aa". cannot form "aba"

Understanding the test cases is super critical for me really understand what the function is asking for

Test Cases:

console.log(repeatedSubstringPattern("abab") === true); // true
console.log(repeatedSubstringPattern("aba") === false); // true
console.log(repeatedSubstringPattern("aabaaba") === false); // true
console.log(repeatedSubstringPattern("abaababaab") === true); // true
console.log(repeatedSubstringPattern("abcabcabcabc") === true); // true

Algorithms:

"abab"

It's ab, ab repeated twice.

My first thought here is to generate all combinations of substrings.

Then for each substring, add the substrings together until one of the conditions happen:
  * goes over the length of input string (it will keep adding until goes over)
    * return false
  * matches the string 
    * return true

*/

// So the way I conceptualize this is wrong
// There is no "ba" can be the right substring - it's not possible
// So generating substring is sequential
const generateSubstringComb = (str) => {
  let substringArr = [];

  for (let i = 0; i < str.length; i += 1) {
    for (let j = i + 1; j < str.length; j += 1) {
      let substring = str.slice(i, j);
      if (substring.length > 1) {
        substringArr.push(substring);
      }
    }
  }

  return substringArr;
} 

const repeatedSubstringPattern = (str) => {
  let substrings = generateSubstringComb(str);

  for (let i = 0; i < substrings.length; i++) {
    let newStr = '';
    while (newStr.length <= str.length) {
      newStr += substrings[i];

      if (newStr === str) {
        return true;
      }
    }
  }

  return false;
}

console.log(repeatedSubstringPattern("abab") === true); // true
console.log(repeatedSubstringPattern("aba") === false); // true
console.log(repeatedSubstringPattern("aabaaba") === false); // true
console.log(repeatedSubstringPattern("abaababaab") === true); // true
console.log(repeatedSubstringPattern("abcabcabcabc") === true); // true

// Alternate:

const repeatedSubstringPattern2 = (string) => {
  let substring = '';
  let maxIdx = Math.floor(string.length / 2);
  
  for (let i = 0; i < maxIdx; i += 1) {
    substring = string.slice(0, i + 1);
    let substringLength = i + 1;

    if (substring.repeat(string.length / substringLength) === string) {
      return true;
    }
  }

  return false;
}

console.log(repeatedSubstringPattern2("abab") === true); // true
console.log(repeatedSubstringPattern2("aba") === false); // true
console.log(repeatedSubstringPattern2("aabaaba") === false); // true
console.log(repeatedSubstringPattern2("abaababaab") === true); // true
console.log(repeatedSubstringPattern2("abcabcabcabc") === true); // true
