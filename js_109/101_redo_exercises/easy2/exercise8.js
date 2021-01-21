/*

Easy 2: Odd List

Write a function that returns an `Array` that contains every other element of an Array that is passed in as an argument. The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.


Understand the problem:

* Input: array
* Output: array
  - output array contains every other element of input array
  - 1st, 3rd, 5th, and so on

Test case:

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

Quick Algorithm:

Look through the input array. Select the first element - skip the second element - pick third element and so on until the end of the array.

Return this new array.

*/

let oddities = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }

  return newArr;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []