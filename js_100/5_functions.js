
// Question 1

console.log('Question 1: \n');

let bar = 1;
function foo() {
  let bar = 2;
}

foo(); // Does not print to console
console.log(bar); // prints 2
console.log(`The code in question 1 prints 1 - this is because while functions can access global variables if there is no bar variable in the function scope, in this example, a local variable called bar was created. It does not impact the global bar variable. Once the function is called and finishes running the local variable bar with value of 2 disappears and cannot be accessed.\n`)

// Question 2

console.log('Question 2: \n');

let getName = (prompt) => {
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);
  return name;
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!\n`);

// Question 3

let multiply = (a, b) => a * b;

function getNumber(prompt) {
  let getNumbers = require('readline-sync');
  let num = getNumbers.question(prompt);
  return parseFloat(num);
}

let firstNum = getNumber('Enter the first number: ');
let secondNum = getNumber('Enter the second number: ');

console.log(multiply(firstNum, secondNum));

// Question 4
console.log('Question 4:\n')

function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

let oneFactorial = times(1, 1);
let twoFactorial = times(oneFactorial, 2);
let threeFactorial = times(twoFactorial, 3);
let fourFactorial = times(threeFactorial, 4);
let fiveFactorial = times(fourFactorial, 5);

console.log("\n");

// Alternate Answer
console.log('Answer with a factorial function:\n')
function factorial(n) {
  let factorialValue = 1;
  for(i = 1; i <= n; i++) {
    factorialValue *= i;
  }
  
  return factorialValue;
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5) + "\n");

// Question 5

console.log("Question 5:\n");

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

console.log("It will not output anything because of the return keyword. The function stops at the keyword return and never reaches the console.log statement.\n");

// Question 6

console.log("Question 6:\n");

function scream(words) {
  return words + '!!!!';
}

scream('Yipeee');

console.log(`It will not output anything. It is returing a string value but it is not explicitly printed to the console.`);