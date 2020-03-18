
// Steps
// Ask the user for the first number
// Ask the user for the second number
// Ask the user for an operation to perform
// Perform the operation on the two numbers
// Print the result to the terminal

// ./node_modules/.bin/eslint js_101/lesson_2/calculator/calculator.js

let readline = require('readline-sync');

// Create a prompt function - creates a more distinctive output for questions:
function prompt(msg) {
    console.log(`=> ${msg}`);
}

prompt("Welcome to Calculator");

// Set variable outside do block
while (true) {
    // Ask for the first number
    prompt("What's the first number?");
    let number1 = readline.question();

    while (invalidNumber(number1)) {
        prompt("Not a valid number.");
        number1 = readline.question();
    }

    // Ask for the second number
    prompt("What's the second number?");
    let number2 = readline.question();

    while (invalidNumber(number2)) {
        prompt("Not a valid number.");
        number2 = readline.question();
    }

    function invalidNumber(number) {
        // Number(number) - returns NaN if for example 'bob' was passed in
        // Number.isNaN - true if the argument passed in is NaN
        return Number.isNaN(Number(number));
    }

    // Ask for operation to perform
    prompt("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide");
    let operation = readline.question();

    while (!['1', '2', '3', '4'].includes(operation)) {
        prompt("Must choose 1, 2, 3, or 4");
        operation = readline.question();
    }

    // Convert the number1 and number 2 to numbers
    number1 = Number(number1);
    number2 = Number(number2);

    // Perform the operation user asked for
    let output;
    switch (operation) {
        case '1':
            output = number1 + number2;
            break;
        case '2':
            output = number1 - number2;
            break;
        case '3':
            output = number1 * number2;
            break;
        case '4':
            output = number1 / number2;
            break;
    }

    prompt(`The result is: ${output}`);

    // Ask user if they want to do another calculation
    prompt(`Do you want to do another calculation? Type "yes"`);
    let repeatCalc = readline.question();

    if (repeatCalc !== 'yes') break;
}


