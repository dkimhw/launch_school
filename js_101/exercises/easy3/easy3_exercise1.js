

// Function of the function is to remove consecutive duplicate characters
// Input string
// Output string that has removed the duplicate characters

// pseudo code

/*

for loop let i = 0; i += 1;

stringArr = [];
newStringArr
let previousValue = stringArr[i - 1]
let currentValue = stringArr[i]

if currentValue = previousValue {
  skip
} else {
  put into new string arr
}


*/

const crunch = (str) => {
  let newStringArr = [];
  let stringArr = str.split('');
  for(let i = 0; i < stringArr.length; i += 1) {
    let previousValue = stringArr[i - 1];
    let currentValue = stringArr[i];
    if (currentValue === previousValue) {
      continue;
    } else {
      newStringArr.push(currentValue);
    }
  }

  console.log(newStringArr.join(''));
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""


/*
Alt Solution:
function crunch(text) {
  let index = 0;
  let crunchText = '';

  while (index <= text.length - 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }

    index += 1;
  }

  return crunchText;
}
*/
