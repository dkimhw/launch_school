
/*

Problem

Input:
- Integer
Output:
- Integer
- In reverse order
- Edge case: leading zeros get dropped

Examples:

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21
console.log(reverseNumber(1));        // 1

Algorithm:

Step 1: Convert to string
Step 2: Split into array of digits
Step 3: Reverse the digits
Step 4: Join into a string and call Number()

*/

let reverseNumber = (num) => {
  return Number(String(num).split('').reverse().join(''));
};

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21
console.log(reverseNumber(1));        // 1