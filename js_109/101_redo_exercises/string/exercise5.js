
/*

Problem:

Input
- String

Output
- String
- Swap the cases. If uppercase, turn to lowercase
- For non-characters - leave as is

Example:

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

Algorithm:

Step 1: Loop over each character starting at `idx` 0

Step 2: For each `idx`, check the case and return the opposite.
  If neither - then just return unchanged

Step 3: Return new string

*/

let isUpperCase = (char) => {
  return char === char.toUpperCase() && /[a-z]/i.test(char);
};

let isLowerCase = (char) => {
  return char === char.toLowerCase() && /[a-z]/i.test(char);
};

let swapCase = (str) => {
  let charArr = str.split('');

  for (let idx = 0; idx < charArr.length; idx += 1) {
    if (isUpperCase(charArr[idx])) {
      charArr[idx] = charArr[idx].toLowerCase();
    } else if (isLowerCase(charArr[idx])) {
      charArr[idx] = charArr[idx].toUpperCase();
    }
  }

  return charArr.join('');
};

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
