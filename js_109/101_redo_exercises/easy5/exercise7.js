/* eslint-disable max-len */

/*

Problem:

Input:
  - Two arrays of integers
  - Assume that they are of the same length
Output:
  - New array
  - Each element contains the product between the pair of elements of the same index value
  - NewArr[0] =  A1[0] * A2[0]

Example:

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77])

*/

let multiplyList = (arr1, arr2) => {
  let newArr = [];

  for (let idx = 0; idx < arr1.length; idx++) {
    newArr[idx] = arr1[idx] * arr2[idx];
  }

  return newArr;
};

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77])
