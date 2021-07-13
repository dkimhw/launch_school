/* eslint-disable max-len */

/*

Problem:

Input:
- String

Ouput:
- Object
- Counts the number of lowercase, uppercase, neither

Examples:

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }

Algorithm:

Step 1: Loop over each character starting from index 0

Step 2: For each `idx` - check if it's lowercase uppercase or neither

Step 3: Appropriately increase by one (i.e. if it's lowercase, increase lowercase val by 1)

Step 4: Return object

*/

let isUpperCase = (char) => {
  return char === char.toUpperCase() && /[a-z]/i.test(char);
};

let isLowerCase = (char) => {
  return char === char.toLowerCase() && /[a-z]/i.test(char);
};

let letterCaseCount = (str) => {
  let charArr = str.split('');
  let countCases = {
    lowercase: 0
    , uppercase: 0
    , neither: 0
  };

  for (let idx = 0; idx < charArr.length; idx++) {
    if (isUpperCase(charArr[idx])) {
      countCases['uppercase'] += 1;
    } else if (isLowerCase(charArr[idx])) {
      countCases['lowercase'] += 1;
    } else {
      countCases['neither'] += 1;
    }
  }

  return countCases;
};

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
