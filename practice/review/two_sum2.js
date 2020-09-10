
/*

PEDAC

Understand the Problem (P):

1. Explicit reqs

* Input: 
  * Array of integers - `nums`
  * Integer - `target`
* Output
  * Return the **indices** of the two numbers such that they add up to `target`

* Assumptions
  * Each input has exactly one solution
  * Cannot use the same element twice (elements have to be unique)
    * Nums = [2, 2] Target = 4,  [0, 0] - you can't have two same indices - they have to be different
    * 

Test Cases/ Examples (E):

console.log(twoSum([2,7,11,15], 9)); // [0,1]
console.log(twoSum([3,2,4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]

Data Structures (D):

Array

Algorithms (A):

1. Initialize twoSumIndices = []
2. Loop over `nums` - within this loop
  * Loop again but with index + 1 (j) as the starting point and towards the end of the array
    * Within this loop, sum nums[index] + nums[j] === target
    * If true: twoSumIndices.push(index, nums)

*/

/*
const twoSum = (nums, target) => {
  let twoSumIndices = [];

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    for (let j = (i + 1); j < nums.length; j++) {
      let sumNums = currentNum + nums[j];
      if (sumNums === target) {
        twoSumIndices.push(i, j);
        break;
      }
    }
  }

  return twoSumIndices;
}
*/

const twoSum = (nums, target) => {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (hash.hasOwnProperty(complement)) {
      return [hash[complement], i];
    }

    hash[nums[i]] = i;
  }
}

console.log(twoSum([2,7,11,15], 9)); // [0,1]
console.log(twoSum([3,2,4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]