
/*

Easy 2: Convert a Number to a String!

Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.


Understand the problem:

* Input: Non-negative integer value 
* Output: String version of the integer input
* Cannot use standard JS functions


Test cases:

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(1234567890));      // "1234567890"


Quick Algorithms:

Can't use split because it needs to be a string first to use it. There isn't an easy way to loop through each digits

Hard part 1: extracting digits & looping through the digits

[4, 3, 2, 1]

4321 % 10 -> add the remainder to array
x = parseInt(4321 / 10)

Loop through this integer array and convert each digit into a string representation


Hard part 2: how to convert each digit into a string representation



*/

let intArray = (int) => {
  // Without converting the integer to string
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


console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(1234567890));      // "1234567890"

