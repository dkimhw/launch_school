
/*

Write a function that takes an array of numbers, and returns an array with the same number of elements, with each element's value being the running total from the original array.

Understand the Problem:

* Input: array of numbers
* Output: arry of numbers
  - each element contains the running total of the input array

Test Cases:

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []


Algorithm:

Step 1: Create a variable that keeps the current cumulative value and create a new array

Step 2: Loop through the input array

Step 3: For each iteration, add the element value to the variable in step 1 and push to the new array

We could also use reduce

*/

let runningTotal = (arr) => {
  let currentCumulativeTotal = 0;
  let newArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    currentCumulativeTotal += arr[i]
    newArr.push(currentCumulativeTotal);
  }

  return newArr;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
