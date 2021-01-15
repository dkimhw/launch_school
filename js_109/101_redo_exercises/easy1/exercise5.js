/*

Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

Understand the problem:

* Input:
  Ask from user bill amount (number)
  Ask from user tip rate (number) - not in decimal
* Output:
  * Computes tip (bill * tip rate) - log to console
  * Computes total bill - log to console

No validation for inputs required

Test cases:

What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00


Mini Algo:

Ask user for bill & tip rate
Calculate tip amount
Add bill + tip amount for total bill
Log to console tip amount and total bill

*/

let readline = require('readline-sync');

let bill = Number(readline.question("What is the bill? "));
let tip_rate = Number(readline.question("What is the tip percentage? "));

let tip_amount = bill * (tip_rate / 100);
let total_bill = tip_amount + bill;

console.log();
console.log(`The tip is $${tip_amount.toFixed(2)}`);
console.log(`The total is $${total_bill.toFixed(2)}`);