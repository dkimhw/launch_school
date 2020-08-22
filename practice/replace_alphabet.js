
/*

PEDAC:

Understand the Problem (P)

- Input: String -> "Hello" as an example or "h"
  - We need to check whether a character is a letter
  - If it is not a letter - ignore it
- Process: replace every letter with its position in the alphabet
  - "a" = 1
  - Question: Does case matter? My guess is no because we are talking about the alphabet
- Output: String (replaces letter with alphabet positions)


Test Cases/Examples (E)

- Test Cases:
  - alphabetPosition("The sunset sets at twelve o' clock.") // returns: "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
  - alphabetPosition("The narwhal bacons at midnight.") // returns: "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");


Data Structures (D)

- One of the challenges here is to take a letter like "a" and convert it to "1"
  * We have a data set here that fits the key-value characteristic really well.
- Since the structure is finite and deterministic - we could create a map using JavaScript's Object (HashMap).

- Other consideration that we have think about is what data structure we want to use to work with the input string
  * I think Array here is best. We need to loop over each character and be able to check whether it is a letter and also for each character we need to convert that letter to an alphabet position


Algorithms (A):

Mini-problem (converting a letter to alphabet position):

1. Create an object where the key is lowercase alphabet characters (a-z) and the value is the position
  * This should be a function
2. Create a function that takes a character and returns the alphabet position
  * Use the helper function from #1 to create a hashmap of "letter" : "alphabet_position"


Main function/algorithm

1. Create an empty array
2. First split the string by empty string '' and assign it to the empty array
  * Need to be case insensitive - conver the string to lower case before splitting.
3. Create an empty string called alphabetPositionString
4. Loop through the array - until the end of the array (index < arr.length)
    a. Check that the current element in that loop is letter
    b. If yes -> call mini-function to get alphabet position and concat to the alphabetPositionString + " "
      If this is the last index do not add " "
    c. If no -> continue the loop
5. Return alphabetPositionString


Implementing

*/

function createLetterToAlphabetData() {
  let letterToPosition = {};
  let startLetterCode = 'a'.charCodeAt(0);
  let endLetter = 'z'.charCodeAt(0);
  let letterPosition = 1;

  for (let index = startLetterCode; index <= endLetter; index++, letterPosition++) {
    let letter = String.fromCharCode(index);
    letterToPosition[letter] = letterPosition;
  }

  return letterToPosition;
}

//console.log(createLetterToAlphabetData());

function convertLetterToAlphabetPosition(c) {
  let letterToAlphabetPosition = createLetterToAlphabetData();
  return letterToAlphabetPosition[c];
}

//console.log(convertLetterToAlphabetPosition('z'));
//console.log(convertLetterToAlphabetPosition('l'));

function alphabetPosition(str) {
  let strArr = str.toLowerCase().split('');
  let alphabetPositionString = '';

  strArr.forEach(char => {
    if (/[a-z]/i.test(char)) {
      alphabetPositionString = alphabetPositionString.concat(convertLetterToAlphabetPosition(char), " ");
    }
  });

  return alphabetPositionString.slice(0, alphabetPositionString.length - 1);
}

console.log(alphabetPosition("The sunset sets at twelve o' clock.")); 
// returns: "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
console.log(alphabetPosition("The narwhal bacons at midnight.")); 
// returns: "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");