
// Calculat tip using bill and tip perc
// Inputs: bill dollar amount; tip perc is given as an integer (must be converted to percentage)
// Outputs: The tip and the total (+tip)


let readlineSync = require('readline-sync');

// readline sync categorizes billAmount and tipRate as string
// Must be converted
let billAmount = parseInt(readlineSync.question('What is the bill? '));
let tipRate = parseInt(readlineSync.question('What is the tip percentage? '));
tipRate /= 100; // convert to decimal
let tip = billAmount * tipRate;
let total = billAmount + tip;

console.log(`\nThe tip is ${tip}`);
console.log(`The total is ${total}`);


// Test:
// 200 and 15
// Should look like:

// The tip is $30.00
// The total is $230.00
