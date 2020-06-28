
let statement = "The Flintstones Rock";


// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

let charObj = {};

statement.split('').forEach(char => {
    //console.log(char.match(/[a-z]/i));

    if (/[a-z]/i.test(char)) {
        if (char in charObj) {
            charObj[char] += 1;
        } else {
            charObj[char] = 1;
        }
    }
});

console.log(charObj);

// Alternate

let charsInStatement = statement.split('').filter(char => char !== ' ');
let result = {};

charsInStatement.forEach(char => {
  result[char] = result[char] || 0;
  result[char] += 1;
});

result;

/*

// result[char] = result[char] || 0;

Short-circuiting.

What this means is that JavaScript first evaluates the left operand.

If result[char] is true (it will be if that key exists in the object) - JavaScript does not bother with the right operand.

So if result[char] exist it will be set to result[char]. If not, it will create a new key and assign 0.


*/

// Alternate using continue
let result = {};

for (let counter = 0; counter < statement.length; counter += 1) {
  let char = statement[counter];
  if (char === ' ') continue;

  result[char] = result[char] || 0;
  result[char] += 1;
}