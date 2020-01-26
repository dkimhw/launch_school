let rlSync = require('readline-sync');
let number1 = rlSync.question('Enter the first number\n');
let number2 = rlSync.question('Enter the second number\n');
// What you get is string so you need to convert it into Number.
let sum = Number(number1) + Number(number2);

console.log(`The numbers ${number1} and ${number2} add to ${sum}`);