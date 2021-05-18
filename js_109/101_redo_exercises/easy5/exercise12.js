
/*

Problem:

Input: 24-hour string format
Output: Intger (minutes)

Examples:

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

Algorithm:

afterMidnight:

Step 1: Calculate # of minutes from hours
- total = hh * 60

Step 2: Caclulate # of minutes
- total += mm

Step 3: 24:00 === 0
- total % (60 % 24)

beforeMidnight:

Step 1: Caculate # of minutes from hours
- total = (24 - (hh + 1)) * 60

Step 2: Calculate minutes
- total += (60 - 34);

*/


let afterMidnight = (str) => {
  let hh = Number(str.slice(0,2));
  let mm = Number(str.slice(3));

  return ((hh * 60) + mm) % (60 * 24);
};

let beforeMidnight = (timeStr) => {
  let diffMinutes = (24 * 60) - afterMidnight(timeStr);
  if (diffMinutes === (24 * 60)) {
    return 0;
  }

  return diffMinutes;
};


console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
