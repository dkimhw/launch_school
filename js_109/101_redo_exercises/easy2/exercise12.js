/*

Easy 2: Convert a Signed Number to a String!

In the previous exercise, you developed a function that converts non-negative numbers to strings. In this exercise, you're going to extend that function by adding the ability to represent negative numbers as well.

Write a function that takes an integer, and converts it to a string representation.

You may not use any of the standard conversion functions available in JavaScript, such as String() and Number.prototype.toString(). You may, however, use integerToString() from the previous exercise.

You might also want to check the Math.sign() function.


Understand the Problem:

* Input: signed integer
* Output: string representation of the integer


Test Cases:

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

Quick Algorithm:

Check the sign of the input integer via Math.sign.

If 1 then prefix "+" to the string
If -1 then prefix "-" to the string
If 0 then no prefix


*/




let intArray = (int) => {
  // Without converting the integer to string
  int = Math.abs(int);
  let arr = [];

  // if int = 0
  if (int === 0) {
    arr.push(0);
    return arr;
  }

  while (int > 0) {
    arr.unshift(int % 10);
    int = parseInt(int / 10);
  }

  return arr;
}

let integerToString = (int) => {
  const intToStringMap = {
    0: '0',
    1: '1',
    2: '2', 
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9'
  }

  return intArray(int).map(i => intToStringMap[i]).join('');
}

let signedIntegerToString = (int) => {
  let sign = Math.sign(int);

  if (sign === 1) {
    return "+" + integerToString(int);
  } else if (sign === -1) {
    return "-" + integerToString(int);
  } else if (sign === 0) {
    return integerToString(int);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
