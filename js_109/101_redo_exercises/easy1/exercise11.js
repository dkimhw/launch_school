
/*

ASCII String Value


Write a function that determines and returns the ASCII string value of a string passed in as an argument. The ASCII string value is the sum of the ASCII values of every character in the string. (You may use String.prototype.charCodeAt() to determine the ASCII value of a character.)


Understand the Problem:

* Input: a string
* Output: an integer
  - Logic: Sum of ASCII integer value of the input string
  - Use: charCodeAt()


Test cases:

console.log(asciiValue('Four score') === 984);         // 984
console.log(asciiValue('Launch School') === 1251);      // 1251
console.log(asciiValue('a') === 97);                  // 97
console.log(asciiValue('') === 0);                   // 0

Alogrithms:

Walk through each character of the string. For each character, find the ASCII integer value. Add the ASCII integer value to final sum. Return the final sum after walk through/loop.


*/


let asciiValue = (str) => {
  return str.split('').map(char => char.charCodeAt()).reduce( (a, b) => a + b, 0);
}

console.log(asciiValue('Four score') === 984);         // 984
console.log(asciiValue('Launch School') === 1251);      // 1251
console.log(asciiValue('a') === 97);                  // 97
console.log(asciiValue('') === 0);                   // 0
