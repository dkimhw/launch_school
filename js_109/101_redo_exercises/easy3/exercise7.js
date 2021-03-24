
/*

A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. 

For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; return double numbers as-is.

Understand the Problem:

* Input: integer
* Output: integer
  - If it's double number, return double number
  - If it's not double number, return input number * 2

Test Cases:

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676

Algorithm:


Main:

Step 1: Check if input number is double number
Step 2: If double number, return input
Step 3: If no double number, return input * 2

Double Number Function:

We know that double numbers are always even.
Loop through the 0 to midpoint
Loop through the midpoint to end of array

Step 1: Check if input is even digits 
Step 2: Loop through 0 to midpoint:
  - for each iteration, check idx = 0 against midpoint
  - next iteration idx = 1 against midpoint + idx
  - keep iterating

*/


/*

function isDoubleNumber(number) {
  let stringNumber = String(number);
  let center = Math.floor(stringNumber.length / 2);
  let leftNumber = stringNumber.substring(0, center);
  let rightNumber = stringNumber.substring(center);

  return leftNumber === rightNumber;
}

*/

let isDoubleNumber = (num) => {
  let digitsCount = String(num).length;

  if (digitsCount % 2 !== 0) {
    return false;
  }

  let midpoint = Math.floor(digitsCount / 2);
  let numArr = String(num).split('').map(el => Number(el));

  for (let idx = 0; idx < midpoint; idx += 1) {
    if (numArr[idx] !== numArr[midpoint + idx] ) {
      return false;
    }
  }

  return true;
}

// console.log(isDoubleNumber(444));
// console.log(isDoubleNumber(44));
// console.log(isDoubleNumber(103103));
// console.log(isDoubleNumber(3333));
// console.log(isDoubleNumber(2772));

let twice = (num) => {
  return (isDoubleNumber(num) ? num : num * 2);
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676