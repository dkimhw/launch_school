

/*

Problem:

Input:
- Array

Output:
- Array (same array object - not new)
- Mutation: reverses the elements

Examples:

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true

Algorithm:

Step 1:
Find the midpoint of the array. Math.floor(length / 2)

Step 2:
Loop through the array until the midpoint ("<")
Swap the first index with the last index (1st iteration)
Next 2nd index with second to last index

Step 3:
Return same array

*/

let reverse = (arr) => {
  let midpoint = Math.floor(arr.length / 2);

  let swapIndex1 = 0;
  let swapIndex2 = arr.length - 1;
  for (let idx = 0; idx < midpoint; idx++) {
    let holdSwappingValue = arr[swapIndex1];
    arr[swapIndex1] = arr[swapIndex2];
    arr[swapIndex2] = holdSwappingValue;

    swapIndex1 += 1;
    swapIndex2 -= 1;
  }

  return arr;
};

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true
