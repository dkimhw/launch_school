/*

Exercise 2: Greeting a User

Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

Understand the Problem:

* Function Input: none
  - There is user input - asks for user's name
* Function Output: undefined
  - Logs to the console based on user input
* Additional Logic
  - What does computer yelling back looks like?
  - You are yelling if user inputs ${name} with exclamation point
  - return all upper case - append "WHY ARE WE SCREAMING?"
  - else return `Hello ${Bob}`

Test Cases:

Example of non-yelling:

What is your name? Bob
Hello Bob.

Example of yelling:

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?


Forgot -> uppercase the name and remove exclamation point.


Quick Algorithm:

- Ask user for name ("What is your name?")
- Take the user's input and check if the user is yelling (check for exclamation point)
- If User was yelling:
  - return yelling response
  - else return non-yelling response


*/

let readline = require('readline-sync');

// check for exclamation point
let checkYelling = (str) => {
  return /!/.test(str);
}

let userInput = readline.question("What is your name? ");

if (!checkYelling(userInput)) {
  console.log(`Hello ${userInput}.`);
} else {
  // you could have used slice here as well
  // name = name.slice(0, -1);
  console.log(`HELLO ${userInput.toUpperCase().replace('!', '')}. WHY ARE WE SCREAMING?`);
}