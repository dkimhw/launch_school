
/*

Problem:

Input: Two arrays
  - They don't necessarily have to same length
  - They don't necessarily have to have elements
Output: Array (new)
  - Interleave the elements of the two arrays

Example:

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
console.log(interleave([1, 2, 3], ['a', 'b', 'c', 'd']));    // [1, "a", 2, "b", 3, "c", "d"]
console.log(interleave([1, 2, 3, 4], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c", 4]
console.log(interleave([1, 2, 3, 4], []));    // [1, "a", 2, "b", 3, "c", 4]

Algorithm:

Step 1: Loop through the arrays from index 0
  - As you loop, add value from first array then the value from 2nd array

*/

let interleave = (arr1, arr2) => {
  let interleaveArr = [];

  // Loop by the longest arr length
  for (let idx = 0; idx < arr1.length; idx++) {
    interleaveArr.push(arr1[idx]);

    if (idx < arr2.length) {
      interleaveArr.push(arr2[idx]);
    }
  }

  if (arr2.length > arr1.length) {
    for (let idx = arr1.length; idx < arr2.length; idx++) {
      interleaveArr.push(arr2[idx]);
    }
  }

  return interleaveArr;
};

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
console.log(interleave([1, 2, 3], ['a', 'b', 'c', 'd']));    // [1, "a", 2, "b", 3, "c", "d"]
console.log(interleave([1, 2, 3, 4], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c", 4]
console.log(interleave([1, 2, 3, 4], []));    // [1, "a", 2, "b", 3, "c", 4]