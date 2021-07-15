
/*

Problem:

Input
- Integer -> number
- Integer -> number of digits used for rotation


Output:
- Integer
  - Rotates the count digits of a number

Example:

735291, 2 --> 735219
  - We rotate the last two digits of the numbers

735291, 5 --> 752913
  - 1: Rotate 1 & 1 -> 735291
  - 2: Rotate 1 & 9 -> 735219
  - 3: Rotate 2 & 9 -> 735912
  - 4: Rotate 2 & 5 -> 732915

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

Algorithm:

Step 1: Create an array of digits

Step 2: Start a loop that lasts until idx < count

Step 3: For each idx, swap the current element with the last index

Step 4: Return new rotated integer

*/

let rotateRightmostDigits = (num, count) => {
  let numArr = String(num).split('')
  let lastElementIdx = numArr.length - 1;
  let swapElementIdx = numArr.length - 1;

  for (let idx = 0; idx < count; idx += 1) {
    let swapElement = numArr[swapElementIdx];
    let lastElement = numArr[lastElementIdx];

    numArr[swapElementIdx] = lastElement;
    numArr[lastElementIdx] = swapElement;

    swapElementIdx -= 1;
  }

  return Number(numArr.join(''));
};

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
