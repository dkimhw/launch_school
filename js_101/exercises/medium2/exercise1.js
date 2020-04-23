
/*

Understand the problem

Input:
String (any special consideration) - any input validation?
There will always be at least one character

Output:
Object containing three properties:

1. The % of characters in string that are lowercase letters
2. The % of characters that are uppercase
3. The % of characters that are neither

Data Structures:
Turn the string to array of characters

Algorithms:
Split string into array of character
Using a for loop - loop through each character. If uppercase increment uppercase count. etc


*/

function letterPercentages(str) {
    let strArray = str.split('');
    let totalCharacters = strArray.length;
    let letterPercent = {};
    let uppercaseCount = 0;
    let lowercaseCount = 0;
    let neitherCount = 0;
    let re = /[a-zA-Z]+/;

    strArray.forEach(i => {
        if (!re.test(i)) {
            neitherCount += 1;
        } else if (i.toLowerCase() == i) {
            lowercaseCount += 1;
        } else {
            uppercaseCount += 1;
        }
    });

    letterPercent['lowercase'] = ((lowercaseCount / totalCharacters) * 100).toFixed(2);
    letterPercent['uppercase'] = ((uppercaseCount  / totalCharacters) * 100).toFixed(2);
    letterPercent['neitherCount'] = ((neitherCount / totalCharacters) * 100).toFixed(2);

    return letterPercent;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }


/*

Alternate:

function letterPercentages(string) {
  let count = string.length;

  function percentage(regex) {
    let matchingChars = string.match(regex) || [];
    return ((matchingChars.length / count) * 100).toFixed(2);
  }

  return {
    lowercase: percentage(/[a-z]/g),
    uppercase: percentage(/[A-Z]/g),
    neither:   percentage(/[^a-z]/gi),
  };
}

*/