

// Input: positive integer
// Output: alternating '1' and '0' - always starts with 0
// Consideration: The length of the string should match the given integer

function stringy(int) {
  newString = '';

  for (let i = 0; i < int; i += 1) {
    if (i % 2 === 0) {
      newString += '1'
    } else {
      newString += '0'
    }
  }

  console.log(newString);
}


stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
