/* eslint-disable no-return-assign */

/*

Problem:

Input:
  - array of integers
Outpu:
  - Float
  - Multiplies all of the integers together
  - Divide by # of elements


Example:

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

Algorithm:

Step 1: Walk through the array and multiply each one
and save each multiplication in a variable

Step 2: Return multiplication sum by arr.length

*/

let multiplicativeAverage = (arr) => {
  let multipleSum = arr.reduce((tot, curr) => tot *= curr, 1);

  return (multipleSum / arr.length).toFixed(3);
};

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
