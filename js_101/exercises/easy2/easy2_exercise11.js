

//You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

// Input: number (no signs so no negatives to consider)
// Output: string version of the number

/*
Steps:

function integerToString(int)

Convert the integer into an array --> this is the hardest step
  need to extract each digit step by step
    would that be division?
    would that be remainder?
  What would be the while loop condition
Use join --> simple

*/


function integerToString(num) {
  let numArray = [];

  do {
    let remainder = num % 10;
    num = Math.floor(num / 10);
    numArray.push(remainder);
  } while (num > 0)

  return numArray.reverse().join('');
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(1234567890));      // "1234567890"






/*
Alternate solution:

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}


*/
