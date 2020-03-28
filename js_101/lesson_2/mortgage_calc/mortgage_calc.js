
// Mortgage Calculator

// Run ESLint
// Ask for Code Review

let readlineSync = require('readline-sync');

function prompt(msg) {
    console.log(`=> ${msg}`);
}

// Checks valid inputs given user input
function isNum(input) {
    return !isNaN(input);
}

// Checks for correct yes or no validation
function yesOrNo(input) {
    if (input === 'y' || input === 'n') {
        return true;
    } else {
        return false;
    }
}

// Asks user for a input and validates the input
// Takes a string that is outputted into console
// Also takes in a validation function to validate whether a user inputted a correct value
// The validation function must return "true" if the input meets the right conditions specified within that function
function getUserInput(inputQuestion, validationFunction) {
    let input ;
    while (true) {
        prompt(inputQuestion);
        input = readlineSync.prompt();

        // validates input and also checks if validation function argument was passed in
        if (validationFunction(input) || arguments.length === 1) {
            break;
        } else {
            prompt("Please enter a valid input");
        }
    }

    return input;
}

function monthlyPayment(apr, loanAmount, durationMonths) {
    let aprPercentage = apr / 100;
    let monthlyInterest = aprPercentage / 12;

    let monthlyPayment = loanAmount * (
        monthlyInterest /
        (1 - Math.pow((1 + monthlyInterest), (-durationMonths)))
    );

    return monthlyPayment;
}


while (true) {
    console.log("----------------------------");
    console.log("Loan Mortgage Calculator");
    console.log("----------------------------");
    
    // Ask user for the loan amount
    // console.log("What is the loan amount?");
    let loanAmount = Number(getUserInput("What is the loan amount?", isNum));
    console.log(loanAmount);
    
    // Ask user for the APR and validate value
    let apr = Number(getUserInput("What is the Annual Percentage Rate (APR)? Type, for instance, 3 for 3% or 3.5 for 3.5%", isNum));
    
    // Ask user for the loan duration 
    let loanDurationMonths =  Number(getUserInput("What is the loan duration in months?", isNum));
    
    // Calculate mortgage payment
    let payment = monthlyPayment(apr, loanAmount, loanDurationMonths);
    
    console.log("----------------------------");
    prompt(`Your monthly mortgage payment is: ${payment}`);
    console.log("----------------------------");

    let repeatCalc = getUserInput("Do you want to do another calculation? (y/n)", yesOrNo);

    console.log(repeatCalc);

    if (repeatCalc !== 'y') {
        break;
    }
}
