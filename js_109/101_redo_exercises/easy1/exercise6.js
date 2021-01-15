/*

https://launchschool.com/exercises/64d67f89

Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

Understand the problem:

* Input
  User to enter in integer greater than 0
  Ask user if they want sum or the product of all integers between 1 and given integer (inclusive)
* Output
  Depending on user input print to console sum or product

Test cases:

Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

1 + 2 + 3 + 4 + 5 = 15

Mini Algorithm:

Acquire input from user (greater than zero) - no validation required
Ask user for sum or product

Calculate sum / product based on user's input
Log to console sum or product
*/

let readline = require('readline-sync');

let userIntInput = readline.question("Please enter an integer greater than 0: ");
let userSumOrProduct = readline.question(`Enter "s" to compute the sum, or "p" to compute the product. `);

let result = 1;
let textSumOrProduct;

if (userSumOrProduct === 's') {
  textSumOrProduct = 'sum'
  for (let i = 2; i <= userIntInput; i += 1) {
    result += i;
  }
} else if (userSumOrProduct === 'p') {
  textSumOrProduct = 'product'
  for (let i = 2; i <= userIntInput; i += 1) {
    result *= i;
  }
}

console.log(`The ${textSumOrProduct} of the integers between 1 and ${userIntInput} is ${result}.`);