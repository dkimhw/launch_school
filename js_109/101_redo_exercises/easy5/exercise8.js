
/*

Problem:

Input:
- Positive integer
Output:
- Returns an array of the digits of the input integer

Example:

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]

Algorithm:

Step 1: Convert integer to string
Step 2: Split the string by '' to get array of characters
Step 3: Convert each element to digit
Step 4: Return the array of integers


*/


let digitList = (num) => {
  let strArr = String(num).split('');
  let intArr = strArr.map(el => Number(el));

  return intArr;
};

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]
