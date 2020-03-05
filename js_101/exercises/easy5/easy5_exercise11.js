
/*

Inputs: integer (negative or positive)
- Negative: the time is before midnight
- Positive: after midnight

Outputs: time of day in 24 hour format (hh:mm).

*/

function timeOfDay(intMinutes) {
  const MINUTES_IN_HOUR = 60;
  const HOURS_IN_DAY = 24;
  const MINUTES_PER_DAY = MINUTES_IN_HOUR * HOURS_IN_DAY;

  let hour = 0;
  let minutes = 0;
  if (intMinutes < 0) {
    hour = (intMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
    hour = Math.floor(hour / MINUTES_IN_HOUR);
    minutes = ((intMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY) % MINUTES_IN_HOUR;
  } else {
    hour = Math.floor((intMinutes % MINUTES_PER_DAY) / MINUTES_IN_HOUR);
    minutes = (intMinutes % MINUTES_PER_DAY) % MINUTES_IN_HOUR
  }
  return `${leftZeroPad(hour, 2)}:${leftZeroPad(minutes, 2)}`;
}

function leftZeroPad(int, length) {
  let newStr = String(int);
  while (length > newStr.length) {
    newStr = "0" + newStr;
  }
  return newStr
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
// Test cases:
