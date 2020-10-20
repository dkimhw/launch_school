

/*

Understand the Problem (P):

1. Input: Array of strings
2. Output: Longest common prefix string
3. Edge cases
  * If there is no common prefix - return an empty string
4. What is a prefix?
  * Series of characters that they share from the start of the string

Test Cases / Examples (E):

console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // ""

Data Structures (D):

Array

Alogrithm (A): 

1. Take the first string - "flower"
2. Initialize commonPrefix
3. Loop through this string
  * For each character - loop through the "strs" array starting from index 1
  * Check that the character exists in the other arrays
  * If so - add to commonPrefix


*/


function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  let firstString = strs[0];
  let commonPrefix = "";

  for (let i = 0; i < firstString.length; i++) {
    let matches = 0;
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] === undefined || firstString[i] != strs[j][i]) {
        break;
      }

      matches++;

      if (matches === (strs.length)) {
        commonPrefix += firstString[i];
      }
    }

    if (matches !== strs.length) break;
  }

  return commonPrefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // ""
console.log(longestCommonPrefix(["aca","cba"])); // ""

//["aca","cba"]