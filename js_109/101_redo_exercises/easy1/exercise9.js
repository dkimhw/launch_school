
/*

Leap Years Part (2)

The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

Using this information, update the function from the previous exercise to determine leap years both before and after 1752.

Understand the Problem

* Improve the function
  - no changes to input and output
* Logic for Julian calendar:
  - Gegorian logic starts from 1752 onwards
  - 0 to 1751 --> use Julian Calendar
    - Leap year if evenly divisble by 4

Running through test cases:

Previously years like 1700 would not be leap year


*/

let isLeapYear = (year) => {
  // Check input
  if (year < 0) {
    return false;
  }

  // Add gregorian logic
  if (year <= 1751 && year % 4 === 0) {
    return true;
  } else if (year <= 1751) {
    return false;
  } else if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true