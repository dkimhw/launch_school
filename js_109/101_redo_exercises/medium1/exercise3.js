
/*

Problem:

Input:
- Integer

Output:
- Integer after performing a maximum rotation

Example:

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));          // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845

735291
352917 - fix first
329175 - fix 2nd
321759 - fix 3rd
321597 - fix 4
321579

Algorithm:

Step 1:
Loop through the array of digits.
Keep track of idx (currIdx) used to tell up to which idx is locked
Create a variable to tell how many times to loop

Step 2:
For each index:
use the currIdx to move that element to the end
then increase currIndx by 1
*/

let maxRotation = (int) => {
  let digitArray = String(int).split('');
  let currIdx = 0;
  let loopNum = digitArray.length - 1;
  //let loopNum = 1;

  for (let idx = 0; idx < loopNum; idx += 1) {
    let tmp = digitArray.splice(currIdx, 1)[0];
    digitArray.push(tmp);
    currIdx++;
  }

  return Number(digitArray.join(''));
};

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));          // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
