
/*

Problem:

- Input: Array
- Output: Returns an array of array
  - Put first half of the array in the first array
  - Put 2nd half of the array in the second array
- Edge case:
  - If odd - place the middle element in the first array

Example:

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]

Algorithm:

Step 1: Determine the length of the array

Step 2: Find the midpoint to cut the array by.
  - If it's even, it's straightforward.
  - If it's odd,  not as straightforward.
  - Math.ceil(x/2) should get us the divide point

Step 3: Divide the input array into two using the divide point

Step 4: Return the array of array

*/

let halvsies = (arr) => {
  let midpoint = Math.ceil(arr.length / 2);

  if (arr.length === 0) {
    return [];
  } else {
    return [arr.slice(0, midpoint), arr.slice(midpoint)];
  }
};

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
