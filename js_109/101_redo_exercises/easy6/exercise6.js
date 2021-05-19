
/*

Problem:

Input:
- Integer
Output:
- Array
- Contains elements starting from 1 to the inputted amount
- Increment each element by 1

*/

let sequence = (int) => {
  let newArr = [];

  for (let idx = 0; idx < int; idx++) {
    newArr[idx] = (idx + 1);
  }

  return newArr;
};

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]