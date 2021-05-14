

/*

Problem

Input: Two arrays
Output: Array (new array)
  - union of the two arrays
  - no duplication of values
  - do we assume that there is no duplicate value within each arr?

Example

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

Thre is repeated twice here - only one is taken in the final array

Algorithm

Step 1: Append first array into new array

Step 2: Walk through each element in the second array and for each element
check to see if element exists in the new array. If so skip
else append to new array

*/

// Dedupe array elements
let dedupeArr = (arr) => {
  return Array.from(new Set(arr));
};

let union = (arr1, arr2) => {
  let newArr1 = dedupeArr(arr1);
  let newArr2 = dedupeArr(arr2);
  let unionArr = [];

  newArr1.forEach(el => unionArr.push(el));
  for (let idx = 0; idx < newArr2.length; idx++) {
    let dupe = 0;
    newArr1.forEach(el => {
      if (el === newArr2[idx]) {
        dupe++;
      }
    });

    if (dupe === 0) {
      unionArr.push(newArr2[idx]);
    }
  }

  return unionArr;
};

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union([1, 1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
