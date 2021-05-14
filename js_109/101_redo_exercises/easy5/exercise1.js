
/*

Cute Angles

Write a function that takes a floating point number representing an angle
between 0 and 360 degrees and returns a string representing that angle
in degrees, minutes, and seconds.

You should use a degree symbol (˚) to represent degrees, a single quote (')
to represent minutes, and a double quote (") to represent seconds.
There are 60 minutes in a degree, and 60 seconds in a minute.


Problem:

Input: Float
  * Bounded between 0 to 360 (do we need to check?)
Output: String
  * Representing the angle in degrees, minutes, and seconds
Logic:
  * Degree symbol: \xB0

Examples:

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

Whole numbers represent degrees. 76.73 = 76 degrees
.73 * 60 = 43.8 - 43 (minutes)
.8 * 60 = 48 (seconds)

Algorithm:

Step 1: Calculate degrees = Math.floor(input)

Step 2: Calculate minutes = Math.floor((input * 60) % 60)

Step 3: Calculate seconds = (input * 60 * 60) % 60


*/

let dms = (num) => {
  let degree = Math.floor(num);
  let minutes = Math.floor((num * 60) % 60);
  let seconds = Math.floor((num * 60 * 60) % 60);

  return `${degree}\xB0${("0" + minutes).slice(-2)}'${("0" + seconds).slice(-2)}"`;
};

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

