
/*

Easy 2

Arithmetic Integer


Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.


Understand the Problem:

* User Input:
  - Prompt user for two positive integers
* Output of Program:
  - Log to console the full operation
  - Log to console the result of the operations on the two integer inputs:
    - addition
    - subtraction
    - product
    - quotient
    - remainder
    - power
* Don't validate input
* Edge case to worry about -> ensure that user input is converted to number

Test Case:

==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 141050039560662968926103


Quick Algorithm

Ask user for first number & save user input as number
Ask user for second number & save user input as number

Then calculate the operation for the 6 operations mentioned and log to console the 6 operations

*/

let prompt = (msg) => {
  console.log(`===> ${msg}`);
}

let calculateArithmeticOperation = (num1, num2, arithSymbol) => {
  if (arithSymbol === '+') {
    return num1 + num2;
  } else if (arithSymbol === '-') {
    return num1 - num2;
  } else if (arithSymbol === '*') {
    return num1 * num2;
  } else if (arithSymbol === '/') {
    return Math.floor(num1 / num2);
  } else if (arithSymbol === '%') {
    return num1 % num2;
  } else if (arithSymbol === '**') {
    return Math.pow(num1, num2);
  }
}

let logTwoNumberArithmeticOperation = (num1, num2, arithSymbol) => {
  prompt(`${num1} ${arithSymbol} ${num2} = ${calculateArithmeticOperation(num1, num2, arithSymbol)}`);
}

let readline = require('readline-sync');
let userInput1 = Number(readline.question(prompt('Enter the first number:')));
let userInput2 = Number(readline.question(prompt('Enter the second number:')));

// Operations
logTwoNumberArithmeticOperation(userInput1, userInput2, "+");
logTwoNumberArithmeticOperation(userInput1, userInput2, "-");
logTwoNumberArithmeticOperation(userInput1, userInput2, "*");
logTwoNumberArithmeticOperation(userInput1, userInput2, "/");
logTwoNumberArithmeticOperation(userInput1, userInput2, "%");
logTwoNumberArithmeticOperation(userInput1, userInput2, "**");