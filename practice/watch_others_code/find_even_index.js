
/*

Watch Others Code Part 4

Understand the Problem:

* Input: Array of integers
* Output: Integer
  * Find N where sum of integers left and right of N are euqal
  * If not return -1

Test Cases:

console.log(findEvenIndex([1,2,3,4,3,2,1]) === 3); // true
console.log(findEvenIndex([1,100,50,-51,1,1]) === 1); // true
console.log(findEvenIndex([1,2,3,4,5,6]) === -1); // true
console.log(findEvenIndex([20,10,30,10,10,15,35]) === 3); // true
console.log(findEvenIndex([20,10,-80,10,10,15,35]) === 0); // true
console.log(findEvenIndex([10,-80,10,10,15,35,20]) === 6); // true
console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]) === 3); // true

Walking through an actual example:

[1,2,3,4,3,2,1]

If at index = 3 then sum of integers to the left and right:
6, 6

At index 0, sum of left side is 0
At index 0, sum of right side is 15 so index 0 doesn't work
Move to the next index

Quick Algorithms:

Loop through the array argument
For each index, sum left and right of the index
if they are equal, return
else, keep looping
At the end of the loop return -1

*/

let sumArray = (arr) => {
  return arr.reduce( (total, curr) => total += curr, 0 );
}

//console.log(sumArray([1, 2, 3]));

let findEvenIndex = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    let sumRight = sumArray(arr.slice(i + 1));
    let sumLeft = 0;

    if (i > 0) {
      sumLeft = sumArray(arr.slice(0, i));
    }

    if (sumRight === sumLeft) {
      return i;
    }
    // console.log(sumRight);
    // console.log(sumLeft);
  }

  return -1;
}

console.log(findEvenIndex([1,2,3,4,3,2,1]) === 3); // true
console.log(findEvenIndex([1,100,50,-51,1,1]) === 1); // true
console.log(findEvenIndex([1,2,3,4,5,6]) === -1); // true
console.log(findEvenIndex([20,10,30,10,10,15,35]) === 3); // true
console.log(findEvenIndex([20,10,-80,10,10,15,35]) === 0); // true
console.log(findEvenIndex([10,-80,10,10,15,35,20]) === 6); // true
console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]) === 3); // true
// findEvenIndex([1, 2, 3]);