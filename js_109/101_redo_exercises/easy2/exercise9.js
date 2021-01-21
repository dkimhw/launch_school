
/*

Easy 2: Convert a String to a Number

The parseInt() method converts a string of numeric characters (including an optional plus or minus sign) to an integer. The method takes 2 arguments where the first argument is the string we want to convert and the second argument should always be 10 for our purposes. parseInt() and the Number() method behave similarly. In this exercise, you will create a function that does the same thing.

Write a function that takes a String of digits, and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.


Understand the Problem:

* Input: string (digits)
  - Assume that input will only contain string digits
* Output: int
  - converts the digit strings into int and returns that int

Test Cases:

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

This is pretty straightforward

Quick Algorithm:

Take the input string and turn each character of that string into an array of elements. So let's say we have "4321" => ["4", "3", "2", "1"].

We can have a mapping. There is 10 digits. So if we see "4" - return 4.

So after using a mapping to convert we get [4, 3, 2, 1]

Reverse the array - [1, 2, 3, 4]

Loop starting from 1 to arr.length ->  1 * 1 + 10 * 2 + 100 * 3 + 1000 * 4

*/

let stringToInteger = (str) => {
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

  let strArr = str.split('');
  let digitsArr = strArr.map(el => stringDigitsToIntDigits[el]).reverse();

  let digit = 0;
  let multiple = 1;
  digitsArr.forEach(el => {
    digit += el * multiple;
    multiple *= 10;
  });

  return digit;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true


/*

function stringToInteger(string) {
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
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}


*/