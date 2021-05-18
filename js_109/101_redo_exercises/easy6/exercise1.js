
/*

Problem:

Input:
- String

Output:
- New String
- Doubles each character and returns new string

Example:

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""

Algorithm:

Step 1: Split string into characters

Step 2: Loop through the array of characters and
repeat each character and insert into new string

*/

let repeater = (str) => {
  return str.split('').map(el => el.repeat(2)).join('');
};

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
