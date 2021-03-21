
/*

Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.


Understand the Problem:

* Input
  * string
* Output
  * string
  * new string contains the value of the original string - all consecutive duplicate characters collapsed into a single character


Test Cases:

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""


Algorithm:

Example: ddaaiillyy ddoouubbllee

We remove all duplicates from the string to get daily double

We loop through each character of the string:
  * Initialize an empty string
  * Initialize a current duplicate string variable
  * With each character:
    - If initial current duplicate string variable is null then assign the character and append to empty string
    - else check the next character, if the same then don't append to empty string
    - else check the next character, if not the same, append to empty string and assign current duplicate string to current character


*/

let crunch = (str) => {
  let newStr = '';
  let currentDupString = '';
  let newStrArr = str.split('');

  if (str.length !== 0) {
    newStr = str[0];
    currentDupString  = str[0];
  }

  for(let i = 0; i < newStrArr.length; i += 1) {
    if (currentDupString === str[i + 1]) {
      continue;
    } else if (currentDupString !== str[i + 1]) {
      if (i + 1 < newStrArr.length) {
        newStr += str[i + 1];
        currentDupString = str[i + 1];
      }
    }
  }

  return newStr;
}


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""


/*

I did the opposite of below:

function crunch(text) {
  let index = 0;
  let crunchText = '';

  while (index <= text.length - 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }

    index += 1;
  }

  return crunchText;
}

*/