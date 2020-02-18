

let readlineSync = require('readline-sync');
let int = parseInt(readlineSync.question('Please enter an integer greater than 0: '));
let option = readlineSync.question(`Enter "s" to compute the sum, or "p" to compute the product. `);

let total = 1
if (option === 's') {
  for(let i = 2; i <= int; i += 1) {
    total += i;
  }

  console.log(`The sum of the integers between 1 and ${int} is ${total}.`);
} else if(option === 'p') {
  for(let i = 2; i <= int; i += 1) {
    total *= i;
  }

  console.log(`The product of the integers between 1 and ${int} is ${total}.`);
}
