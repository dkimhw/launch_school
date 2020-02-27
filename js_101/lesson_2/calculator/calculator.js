
// Steps
// Ask the user for the first number
// Ask the user for the second number
// Ask the user for an operation to perform
// Perform the operation on the two numbers
// Print the result to the terminal

let readline = require('readline-sync');

console.log("Welcome to Calculator");

// Ask for the first number
console.log("What's the first number?");
let number1 = parseInt(readline.question());

// Ask for the second number
console.log("What's the second number?");
let number2 = parseInt(readline.question());

// Ask for operation to perform
console.log("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide")
let operation = readline.question();

// Perform the operation user asked for
let output;
if (operation === '1') {
    output = number1 + number2;
}

console.log(`The result is: ${output}`);