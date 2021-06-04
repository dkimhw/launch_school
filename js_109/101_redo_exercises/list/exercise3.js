

/*

Problem:
* Input:
  - Two arrays - elements all integers
* Output:
  - Returns an array sorted in ascending order
  - Elements contain the product of all combinations of number pairs btwn the two arrays
  - Assume that there will be no empty arrays

Example:

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

// 8 , 6, 2, 4
// 16, 12, 4, 8


Algorithm:

Step 1: Loop through the first array and for each index (idx):

Step 2: Loop through the second array and calculate multiplication = arr1[idx] * arr2[idx2]


*/

let multiplyAllPairs = (arr1, arr2) => {
  let newArr = [];

  for (let idx = 0; idx < arr1.length; idx += 1) {
    for (let jdx = 0; jdx < arr2.length; jdx += 1) {
      newArr.push(arr1[idx] * arr2[jdx]);
    }
  }

  return newArr.sort((a, b) => {return a - b});
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
