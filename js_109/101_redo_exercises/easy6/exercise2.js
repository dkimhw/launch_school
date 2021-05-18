

/*

Problem:

Input:
- String

Output:
- Only doubles consonants (avoid aeiou)
- Returns new string

Example:

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""

Algorith,:

Step 1: Split the array into characters

Step 2: Loop through each character -
check if consonant and if so double characters
and add to new string. If vowel - don't repeat
just add to new string

*/

let doubleConsonants = (str) => {
  let charArr = str.split('');
  let newStr = '';

  charArr.forEach(el => {
    if (/[\W0-9]/.test(el)) {
      newStr += el;
    } else if (!/[aeiou]/i.test(el)) {
      newStr += el.repeat(2);
    } else {
      newStr += el;
    }
  });

  return newStr;
};

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
