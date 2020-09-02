/*
PEDAC

Understand the problem (P):

1. Explicit reqs

* Input:
  * Array of numbers (assume array always has integers)
  * Target number
  * No need to worry about validation
* Output:
  * We need to return the index of the two numbers that meet the criteria below
    * [1, 2] (if target = 3)
  * Find two different items where the sum of those two numbers = target

Test Cases / Examples (E):

console.log(twoSum([1,2,3], 4)); // .sort(numericalCompare), [0,2]);
console.log(twoSum([1234,5678,9012], 14690)); // .sort(numericalCompare), [1,2]);
console.log(twoSum([2,2,3], 4)); // .sort(numericalCompare), [0,1]);

Data Structures (D):

Array & integer

Algorithms (A):

1. Initialize a variable called `twoSumArr = []` 
2. Loop over the array of numbers; for each iteration do the following:
  * create a local variable called `currentNum`
  * Have another for loop that goes from the current index to the end of the arr length
    * Within this loop, we want to add together the current index of the outer loop with the current element in this inner loop
    * Compare this number against the target
    * If this number === target --> add the current index of the outer loop; current index in the inner loop
      * break out of the loop
    * Otherwise, keep the loop going
3. Return `twoSumArr`

*/

function twoSum(numbers, target) {
  let twoSumArr = [];

  for (let index = 0; index < numbers.length; index++) {
    let currentNum = numbers[index];

    for (let j = index + 1; j < numbers.length; j++) {
      let sum = currentNum + numbers[j];
      if (sum === target) {
        twoSumArr.push(index, j);
      }
    }
  }  

  return twoSumArr;
}

console.log(twoSum([1,2,3], 4)); // .sort(numericalCompare), [0,2]);
console.log(twoSum([1234,5678,9012], 14690)); // .sort(numericalCompare), [1,2]);
console.log(twoSum([2,2,3], 4)); // .sort(numericalCompare), [0,1]);
