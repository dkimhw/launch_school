
/*

Problem:

* Input:
- integer

* Output:
- integer
- The output value is the sum of all the digits of the integer


Example:

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45


Algorithm:

Step 1: Split the digits
Step 2: Call reduce to sum of the digits and save each iteration total
Step 3: Return new integer

*/

let sum = (int) => {
  let intArr = String(int).split('').map(el => Number(el));
  return intArr.reduce((prev, total) => total += prev, 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
