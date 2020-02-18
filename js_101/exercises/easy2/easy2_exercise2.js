

// Write a program that will ask for user's name. The program will then greet the user.
// If the user writes "name!" then the computer yells back to the user.

let readlineSync = require('readline-sync');
console.log("What is your name?");
let name = readlineSync.prompt();

// Function that returns a different greeting based on a condition
function greeting (name) {
  let normalGreeting = `Hello ${name}.`;
  let screamGreeting = `Hello ${name.slice(0, -1)}. Why are we screaming?`;
  return (name.includes("!") ? screamGreeting.toUpperCase() : normalGreeting);
}

console.log(greeting(name));
