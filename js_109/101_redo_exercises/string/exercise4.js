
/*

Problem:

Input:
- String

Output:
- String
- Capitalize the start of each word
- word separated by a single white space

Example:

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'

Algorithm:

Step 1: Split string into words

Step 2: Loop over each word starting from `idx` 0

Step 3: For each `idx` capitalize the first char

Step 4: Return the new string

*/

let wordCap = (str) => {
  let wordArr = str.split(' ');

  for (let idx = 0; idx < wordArr.length; idx += 1) {
    wordArr[idx] = wordArr[idx][0].toUpperCase() + wordArr[idx].slice(1);
  }

  return wordArr.join(' ');
};

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
