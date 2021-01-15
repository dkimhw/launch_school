
/*

Leap Year:

In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input, and returns true if the year is a leap year, or false if it is not a leap year.


Understand the Problem:

* Leap Year Logic:
  - Leap year if divisible evenly by 4 but not by 100
  - Leap year if divisible by 400
  - Valid for year > 0
* Input:
  - Integer (do we need to put in check for > 0 --> yes)
* Output:
  - Boolean
  - True if year is leap
  - False if year is not leap

Test Cases:

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true

Run through test cases:

2016 --> divisible by 4 but not by 100
2400 --> divisible by 400


*/

let isLeapYear = (year) => {
  // Check input
  if (year < 0) {
    return false;
  }

  // Leap year logic
  // Leap year if divisible evenly by 4 but not by 100
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true
