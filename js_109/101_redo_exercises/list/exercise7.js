/* eslint-disable max-len */
/*

Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array. Examine the examples to see what we mean. You may assume that the array always contains at least one number.

Understand the Problem

Input:
  - Array of numbers

Output:
  - Integer
  - Sum of sums of each leading subsequence in that array


Examples:

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

Algorithms:

Step 1: Loop throught the input array starting from index 0 (i).

Step 2: For each i, sum up all of the elements starting from index 0 to i and add it to variable `totalSum`.

Step 3: Return totalSum

*/

let sumOfSums = (numArr) => {
  let totalSum = 0;

  for (let idx = 0; idx <= numArr.length; idx += 1) {
    let leadingSubsequenceSum = numArr.slice(0, idx).reduce((prev, curr) => (prev += curr), 0);
    totalSum += leadingSubsequenceSum;
  }

  return totalSum;
};

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35