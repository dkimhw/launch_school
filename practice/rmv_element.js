
/*

Understand the problem
* Input:
  * array of numbers
  * a number
* Output:
  * Return the new length (after rmving the specified value from array of numbers)
* Basic Desc/Action
  * Will remove from array the value specified in the input
  * Mutate the argument
* Edge cases to consider
  * What about empty arrays should just return 0

Test cases

console.log(removeElement([3,2,2,3], 3)); // 2
console.log(removeElement([0,1,2,2,3,0,4,2], 2)); // 5
console.log(removeElement([], 3)); // 0

Data structures

Arrays

Algorithms

Option 1: loop through the input array of numbers and check each index for the value, if the value matches, remove that value
  * We need to account for removed elements because it will mess up the counter and access of the next element
  * The counter should actually decrement if the element matches value and is removed

[1, 2] - 1

0 - I remove 1. counter gets increased to 1
[2]

But after removing, we have no index 1 anymore

*/

function removeElement(arrNum, num) {
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] === num) {
      arrNum.splice(i, 1)
      i--;
    }
  }

  return arrNum.length
}

console.log(removeElement([3,2,2,3], 3)); // 2
console.log(removeElement([0,1,2,2,3,0,4,2], 2)); // 5
console.log(removeElement([], 3)); // 0
