
/*

Easy 2: Convert a String to a Signed Number!

Write a function that takes a string of digits, and returns the appropriate number as an integer. The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; if it is a -, your function should return a negative number. If no sign is given, you should return a positive number.

You may assume the string will always contain a valid number.

You may not use any of the standard conversion methods available in JavaScript, such as parseInt() and Number(). You may, however, use the stringToInteger() function from the previous lesson.


Understand the Problem:

* Input: string
  - Can include sign (+, -)
* Output: integer with correct sign applied to it


Test Cases:

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true


Quick Algorithm:

Everything from last exercise but now we need to consider the sign.

Look at the first character of the string and if it is "+" or a digit - it's a positive number, if it's "-" then return negative version of the digit


*/

let stringToSignedInteger = (str) => {
  const stringDigitsToIntDigits = {
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
  }

  let sign;
  
  // Figure out the sign
  if (str[0] === '+') {
    sign = 'positive';
    str = str.slice(1);
  } else if (str[0] === '-') {
    sign = 'negative';
    str = str.slice(1);    
  } else if (stringDigitsToIntDigits.hasOwnProperty(str[0])) {
    sign = 'positive';
  }

  let strArr = str.split('');
  let digitsArr = strArr.map(el => stringDigitsToIntDigits[el]).reverse();

  let digit = 0;
  let multiple = 1;
  digitsArr.forEach(el => {
    digit += el * multiple;
    multiple *= 10;
  });

  if (sign === 'positive') {
    return digit;
  } else if (sign === 'negative') {
    return -digit;
  }
}


console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true


/*

So much easier

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