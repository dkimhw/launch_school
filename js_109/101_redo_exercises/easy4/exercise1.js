
/*

Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).

Understand the Problem:

* No inputs
* Output: msg that includes Teddy's age
  - age is randomly generated between 20 and 120 (inclusive) meaning 120 is possible.

Test Cases:

Teddy is 69 years old!


Algorithm:

Use Math.random() which returns a random number between 0 and 1. To generate a random age between 20 and 120 - subtract 120 - 20. 100 * Math.random() * 100 then add 20 which will ensure that the age is capped between 20 and 120.


*/

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


let teddyAge = () => {
  randomAge = randomBetween(20, 120);
  msg = `Teddy is ${randomAge} years old!`;

  return msg;
}

console.log(teddyAge());