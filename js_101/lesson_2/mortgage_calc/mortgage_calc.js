
let readlineSync = require('readline-sync');

function prompt(msg) {
    console.log(`=> ${msg}`);
}

function isValidAPR(input) {
    return !isNaN(input) && Number(input) >= 0;
}

function isValidLoanDurationAndAmount(input) {
    return !isNaN(input) && Number(input) > 0;
}

function yesOrNo(input) {
    let inputLowercase = input.toLowerCase();
    return (inputLowercase === 'y' || inputLowercase === 'n');
}

function getUserInput(inputQuestion, validationFunction) {
    let input;
    while (true) {
        prompt(inputQuestion);
        input = readlineSync.prompt();

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
    let denom = 1 - Math.pow((1 + monthlyInterest), (-durationMonths));
    let monthlyPayment;

    if (denom === 0) {
        monthlyPayment = loanAmount / durationMonths;
    } else {
        monthlyPayment = loanAmount * (
            monthlyInterest / denom
        );
    }

    return monthlyPayment;
}

function displayIntro() {
    console.log("----------------------------");
    console.log("Loan Mortgage Calculator");
    console.log("----------------------------");
}

function displayMonthlyPayment(payment) {
    console.log("----------------------------");
    prompt(`Your monthly mortgage payment is: ${payment}`);
    console.log("----------------------------");

}

while (true) {
    displayIntro();

    let loanAmount = Number(getUserInput("What is the loan amount?", isValidLoanDurationAndAmount));
    let apr = Number(getUserInput(`What is the Annual Percentage Rate (APR)? Type, 
    for instance, 3 for 3% or 3.5 for 3.5%`, isValidAPR));
    let loanDurationMonths =  Number(getUserInput("What is the loan duration in months?", isValidLoanDurationAndAmount));
    let payment = monthlyPayment(apr, loanAmount, loanDurationMonths);

    displayMonthlyPayment(payment);

    let repeatCalc = getUserInput("Do you want to do another calculation? (y/n)", yesOrNo);

    console.log(repeatCalc);
    console.clear();

    if (repeatCalc.toLowerCase() !== 'y') {
        break;
    }
}
