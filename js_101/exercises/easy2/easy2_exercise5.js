

// Argument: two positive integers
// Prints the results of the following opeartions the two arguments
// addition, subtraction, product, quotient, remainder, and power

// No need to validate input


function arithmeticOperators() {
  let readlineSync = require('readline-sync');

  // Ask for first integer from user
  console.log("Enter the first number:");
  let firstNumber = parseInt(readlineSync.prompt());

  // Ask for second integer from user
  console.log("Enter the second number:");
  let secondNumber = parseInt(readlineSync.prompt());

  // Operations
  // sum
  console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
  // subtraction
  console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
  // multiplication
  console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
  // division
  console.log(`${firstNumber} / ${secondNumber} = ${Math.round(firstNumber / secondNumber)}`);
  // remainder
  console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
  // power
  console.log(`${firstNumber} ** ${secondNumber} = ${Math.pow(firstNumber, secondNumber)}`);
}

// Test 23, 17
arithmeticOperators()
