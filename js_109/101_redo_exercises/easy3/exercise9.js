
/*

Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).


Understand the Problem:

* Input: String (contains assortment of non-alphabetic characters)
* Output: String
  - Replace all non-alpha characters with spaces
  - If one or more non-alpha just one space. Example would be: "++" -> " "
    - So no consecutive spaces

Test Cases:

cleanUp("---what's my +*& line?");    // " what s my line "


Algorithm:

Loop through the string
Identify non-alphanumeric characters and if non-alpha then " "
If the previous character was non-alphamueric character then "" or skip (no consecutive whitespaces)

Dealing with back to back spaces:

'++David'

First iteration: it will replace + so I have ' +David'. cleanStr will be: ' '


*/

let alphaNumericChar = (char) => {
  return /[a-z]/gi.test(char);
}


let cleanUp = (msg) => {
  let strArr = msg.split('');
  let cleanStr = '';
  
  for (let i = 0; i < msg.length; i += 1) {
    if (alphaNumericChar(strArr[i])) {
      cleanStr += strArr[i];
    } else if (cleanStr[cleanStr.length - 1] !== ' ') {
      cleanStr += ' ';
    }
  }

  return cleanStr;
}


console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
