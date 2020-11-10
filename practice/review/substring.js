

/*

Understand the problem

* Input: 2 strings - assume two strings
* Output
  * True if there is any substring that exists between 2 strings
  * False otherwise
* Does case matter? No
* Substring - longer than one letter long
* the full word is also a substring


BANANA & banana - returns true
Some & me - this would return true


Test cases:

console.log(substringTest('Something', 'Fun') === false);
console.log(substringTest('Something', 'Home') === true);
console.log(substringTest('Something', '') === false);
console.log(substringTest('', 'Something') === false);
console.log(substringTest('', 'Something') === false);
console.log(substringTest('BANANA', 'banana') === true);
console.log(substringTest('test', '111t') === false);
console.log(substringTest('', '') === false);
console.log(substringTest('1234567', '541265') === true);


Algorithms (high level):

Lazy evaluation
  * if string1 or string2 less than 2 -> return false

The first thing I am thinking here is - generate all substring combinations for both strings (arrays)
  * If one of the substrings in one array matches another substring in the 2nd array, return true.

*/

const generateSubstrings = (str) => {
  let arrOfSubstrings = [];

  for (let index = 0; index < str.length; index += 1) {
    for (let subIndex = index + 2; subIndex <= str.length; subIndex += 1) {
      arrOfSubstrings.push(str.slice(index, subIndex));
    }
  }

  return arrOfSubstrings;
}

// console.log(generateSubstrings('Something'));

const substringTest = (str1, str2) => {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length < 2 || str2.length < 2) {
    return false;
  }

  let arrSubstringsStr1 = generateSubstrings(str1);
  let arrSubstringsStr2 = generateSubstrings(str2);

  for (let idx = 0; idx < arrSubstringsStr1.length; idx += 1) {
    for (let subIdx = 0; subIdx < arrSubstringsStr2.length; subIdx += 1) {
      if (arrSubstringsStr1[idx] === arrSubstringsStr2[subIdx]) {
        return true;
      }
    }
  }

  return false;
}

console.log(substringTest('Something', 'Fun') === false);
console.log(substringTest('Something', 'Home') === true);
console.log(substringTest('Something', '') === false);
console.log(substringTest('', 'Something') === false);
console.log(substringTest('', 'Something') === false);
console.log(substringTest('BANANA', 'banana') === true);
console.log(substringTest('test', '111t') === false);
console.log(substringTest('', '') === false);
console.log(substringTest('1234567', '541265') === true);