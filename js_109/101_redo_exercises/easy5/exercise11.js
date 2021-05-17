

/*

Problem:

Input:
- Integer (in minute-based format)
Output:
- Time of day in 24 hour string format
- If the number of minutes is positive, the time is after midnight.
- If the number of minutes is negative, the time is before midnight.

Example:
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

35 --> this means 35 minutes after midnight
-3 --> this means that 3 minutes before midnight

Algorithm:

We need to calculate the hours & minutes given an integer value.

Step 1: Calculating hour
  - x = input / 60
  - x = x % 24
  - Math.floor(x)

Step 2: Calculating minutes
  - mins -  (Math.floor((mins / 60)) * 60)

Possibly different for negative values
*/

let leftZeroPad = (int, len) => {
  let intLength = String(int).length;

  if (intLength < len) {
    return '0'.repeat(len - intLength) + String(int);
  } else {
    return String(int);
  }
};


let timeOfDay = (mins) => {
  let hour;
  let minutes;

  if (mins >= 0) {
    hour = Math.floor((mins / 60) % 24);
    minutes = mins -  (Math.floor((mins / 60)) * 60);
  } else {
    hour = 24 + Math.floor((mins / 60) % 24);
    minutes = mins -  (Math.floor((mins / 60)) * 60); 
  }

  return `${leftZeroPad(hour, 2)}:${leftZeroPad(minutes, 2)}`;
};


console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
