/* eslint-disable no-return-assign */

/*

Problem:

Input:
- Array of integers
- Assume no empty array and elements always positive
Output:
- Sum all of the integers
- Divied by the length of array
- Return integer

Example:

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40

Algorithm:

Step 1: Loop through the array and add current element value
to sum variable

Step 2: Divide the sum variable by the length of the array

Step 3: Return the division

*/

let average = (intArr) => {
  let sum = intArr.reduce(
    (total, current) => total += current, 0
  );

  return Math.floor(sum / intArr.length);
};

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40
