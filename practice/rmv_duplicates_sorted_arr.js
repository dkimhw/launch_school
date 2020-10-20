
/*

PEDA

Understand the Problem
* Input:
  * Sorted array of numbers
* Output:
  * Returns the new length of the array
* Additional Requirements:
  * Mutate the argument (remove the duplicate value from the argument) and don't allocate space for another 

Test Cases
console.log( removeDuplicates([1, 1, 2]) ); // 2
console.log( removeDuplicates([0,0,1,1,1,2,2,3,3,4]) ); // 5

Data Structures

Array

Algorithms

1. Loop through the argument array
  a. During the loop, compare the current index to the index + 1 value and see if they are the same
  b. If they are the same, remove the current index from the argument array (we want mutation with this function)
    * When we do remove a value
    * make sure to decrement the index 
  c. If they are not the same, continue looping
2. Return the length of the new mutated array

// [1, 1, 1] => [1, 1]
// index++ --> this will move to 1

*/

//https://leetcode.com/problems/remove-duplicates-from-sorted-array/solution/
let removeDuplicates = (nums) => {
    for(let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i + 1]) {
        nums.splice(i, 1);
        i--;
      }
    }

    return nums.length;
};

console.log( removeDuplicates([1, 1, 2]) ); // 2
console.log( removeDuplicates([0,0,1,1,1,2,2,3,3,4]) ); // 5
