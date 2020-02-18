
// Need readline-sync
// Inputs: length and width - both can be numbers
// Functionality: asks users to enter in both - no validation required
// Assume what the user is inputting is in square meter
// Takes the user inputted length and width to calculate area in both square meters
// and square feet

const oneSquareMeter = 10.7639;
let readlineSync = require('readline-sync');

let length = readlineSync.question('Enter the length of the room in meters:\n');
// console.log(length);

let width = readlineSync.question('Enter the width of the room in meters:\n');

let areaSquareMeter = width * length;
let areaSquareFeet = areaSquareMeter * oneSquareMeter;

console.log(`The area of the room is ${areaSquareMeter} square meters (${areaSquareFeet} square feet).`)


// values to check against:
// outputs 10
// outputs 7
// Answer should be:

// The area of the room is 70 square meters (753.473 square feet).
