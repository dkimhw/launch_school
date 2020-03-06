


function afterMidnight(timeStr) {
  let timeStrArray = timeStr.split(":");
  let hour = Number(timeStrArray[0]);
  let minutes = Number(timeStrArray[1]);

  return ((hour * 60) + minutes) % (60 * 24);
}

function beforeMidnight(timeStr) {
  let diffMinutes = (24 * 60) - afterMidnight(timeStr);
  if (diffMinutes === (24 * 60)) {
    return 0;
  }
  
  return diffMinutes;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);