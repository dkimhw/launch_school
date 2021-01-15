/*

https://launchschool.com/exercises/91eb6f09

Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.


Understand the problem:

* Input:
  * From user -> length -> number (in meters)
    * must ask it from user
  * From user -> width -> number (in meters)
    * must ask it from user
* Output
  * Prints to console the areas of the room (length * width)
  * in both square meters and square feet


Test cases:

Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).


Mini Algo:

1 square meter == 10.7639 square feet

Ask user to enter in length in meters
Ask user to enter in width in meters
Calculate area in both meters and square meter
Print to console


*/

const SQUARE_METER_TO_SQUARE_FEET = 10.7639;

let readline = require('readline-sync');

let length = Number(readline.question("Enter the length of the room in meters:\n"));
let width = Number(readline.question("Enter the width of the room in meters:\n"));

let areaSquareMeters = length * width;
let areaSquareFeet = areaSquareMeters * SQUARE_METER_TO_SQUARE_FEET;

console.log(`The area of the room is ${areaSquareMeters.toFixex(2)} square meters (${areaSquareFeet.toFixed(2)} square feet).`);