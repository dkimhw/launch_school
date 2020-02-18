


// Inputs: string number (assume string contains only digits)
// Must be able to distinguish signs (negative or not)

// Quick Pseudocode
/*

We can use the code from previous exercise.
First mapping. Using the mapping to return an integer value. Then using a simple logic to iterate over the array to get the final number.

The secondary logic we can add is: if there is a sign "-", we can create a branch in the code


if "-":
  remove "-"
  use stringToInteger(strNum) to get integer
  use zero - number to get negative version of it
else:
  use stringToInteger(strNum)

*/

function stringToInteger(strNum) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };

  let number = 0;
  let strArray = strNum.split('');
  let intArray = strArray.map(num => DIGITS[num]);

  for (let i = 0; i < intArray.length; i += 1) {
    number = (10 * number) + intArray[i];
  }
  return number
}

function stringToSignedInteger(strNum) {
  let number = 0;
  if (strNum.includes("-")) {
    strNum = strNum.replace("-", "");
    number = -stringToInteger(strNum);
  } else if (strNum.includes("+")) {
    strNum = strNum.replace("+", "");
    number = stringToInteger(strNum);
  }
  else {
    number = stringToInteger(strNum);
  }

  return number;
}

console.log(stringToSignedInteger("-570"));
console.log(stringToSignedInteger("+100"));

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true


/*
function stringToSignedInteger(string) {
  switch (string[0]) {
    case "-":
      return -stringToInteger(string.slice(1, string.length));
    case "+":
      return stringToInteger(string.slice(1, string.length));
    default:
      return stringToInteger(string);
  }
}

*/
