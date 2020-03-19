function isUppercase(str) {
    return str.toUpperCase() === str;
}

function isLowercase(str) {
    return str.toLowerCase() === str;
}

function alphabetOnly(str) {
    return str.replace(/[^a-zA-Z]/gi, '');
}

function isAlphabet(str) {
    return str.match(/[a-zA-Z]/);
}

function letterCaseCount(str) {
    let dictCaseCount = {
        lowercase: 0,
        uppercase: 0,
        neither: 0
    };
    let strArr = str.split('');

    for(let i = 0; i < strArr.length; i += 1) {
        if (!isAlphabet(strArr[i])) {
            dictCaseCount['neither'] += 1;
        } else if (isLowercase(strArr[i])) {
            dictCaseCount['lowercase'] += 1;
        } else {
            dictCaseCount['uppercase'] += 1;
        } 
    }

    return dictCaseCount;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }


/*

// Much better way to do this
function letterCaseCount(string) {
  // The .match returns an array of characters that match the pattern
  // If the solution does not find any matches, it sets the variable to an empty array so that an error will not be raised
  // when the `length` property is accessed on the variable later.

  // g : Tells the regex engine to search the entire string.
  // i : Tells the regex engine to ignore case.

  // /[a-z]/g : Checks if the character is a lowercase letter between 'a' and 'z'.
  let lowercaseChars = string.match(/[a-z]/g) || [];
  // /[A-Z]/g : Checks if the character is an uppercase letter between 'A' and 'Z'.
  let uppercaseChars = string.match(/[A-Z]/g) || [];
  // /[^a-z]/gi : Checks if the character is neither an uppercase letter nor a lowercase letter.
  let neitherChars = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowercaseChars.length,
    uppercase: uppercaseChars.length,
    neither: neitherChars.length
  };
}

*/