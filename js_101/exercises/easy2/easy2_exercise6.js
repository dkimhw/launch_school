
// Write a function that returns the next to last word in the String passed to it as an argument.
// Words are any sequence of non-blank characters.

// Input --> always at least two words
// One string input


function penultimate(str) {
  let strArray = str.split(' '); // split on space
  let nextToLastWord = strArray[strArray.length - 2];
  return nextToLastWord;
}

// Test
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
