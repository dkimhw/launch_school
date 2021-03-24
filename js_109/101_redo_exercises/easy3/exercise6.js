
/*

Madlibs is a simple game where you create a story template with "blanks" for words. You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.


Understand the Problem:

* Asks user for four inputs
* Output:
  * Use the inputs to output a message to console

Test Cases/Examples:

Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.

Algorithm:

1. Ask users for four inputs in succession.
2. Use the inputs to fill out the message and output to console

*/

let readlineSync = require('readline-sync');

let noun = readlineSync.question("Enter a noun: ");
let verb = readlineSync.question("Enter a verb: ");
let adjective = readlineSync.question("Enter an adjective: ");
let adverb = readlineSync.question("Enter an adverb: ");

let msg = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!
The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.
The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`

console.log(msg);