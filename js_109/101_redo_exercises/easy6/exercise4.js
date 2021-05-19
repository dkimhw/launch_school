
/*

Problem:
Input:
- string
Output:
- string
- Retrive the middle character(s) of the input string
- On even length - return two
- On odd length - return one

Examples:

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"

Algorithm:

Step 1: Calculate the length of the string
Step 2: Calculate floor(midpoint = length / 2);

*/

let centerOf = (str) => {
  let len = str.length;
  let midpoint = Math.floor(len / 2);

  if (len % 2 !== 0) {
    return str[midpoint];
  } else {
    return str.slice(midpoint - 1, midpoint + 1);
  }
};

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"

