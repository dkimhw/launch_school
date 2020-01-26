

console.log("Question 1:\n");

let rlSync = require('readline-sync');
let age = Number(rlSync.question('How old are you? '));
console.log(`You are ${age} years old.`);

for(i = age; i < 50; i += 10) {
  console.log(`In ${i}, you will be ${age + i} years old.`)
}

console.log("\n");

console.log("Question 2:\n");

function factorial(n) {
  let factorialValue = 1;
  for(i = 1; i <= n; i++) {
    factorialValue *= i;
  }
  
  return factorialValue;
}

console.log(factorial(0));     // => 1
console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320

console.log("Question 3:\n");

let code = `
let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}
`

console.log(code + "\n");
console.log("The following code never stops looping because it can never reach the break condition of counter > 2. The counter = 1 will always be true since the assignment always returns a truthy value of 1 The reason being is that every time while loop starts counter gets assigned to 1. Then console logs the counter variable. Then counter gets incremented by 1 to 2. But when it starts the next iteration it gets assigned to 1 again and the loop does not stop because it cannot ever be greater than 2\n");

console.log("Question 4:\n");

let codeQuestionFour = `
for (let i = 0; i < 5;) {
  console.log(i += 1);
}
`

console.log(codeQuestionFour);

for (let i = 0; i < 5;) {
  console.log(i += 1);
}

console.log("No error is produced. All three components in `for` loop are optional. Not an issue since in `console.log(i += 1);` the value of `i` is incremented.")

console.log("Question 5:\n");

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// will get same result but you don't get access to result variable afterwards
let tries = 1;
while (randomNumberBetween(1, 6) <= 2) {
  tries += 1;
}

console.log('It took ' + String(tries) + ' tries to get a number greater than 2\n');

// This code is defin more readable and logical
// The goal is to understand the best way to deploy certain syntax
let tries2 = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  tries2 += 1;
} while (result <= 2);

console.log('It took ' + String(tries2) + ' tries to get a number greater than 2');

console.log("Question 6:\n");

function factorial(num) {
  if (num <= 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

console.log(factorial(0));     // => 1
console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320

//https://launchschool.com/books/javascript/read/loops_iterating#exercises