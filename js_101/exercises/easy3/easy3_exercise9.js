
// Input: String (has alphabet and non-alphabet characters)
// Output: String (replace non-alphabet characters with single space)
// Need ability to identify non-alphabet characters
// Consideration: If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces). "---" --> one space. It has to be a different character

function cleanUp(str) {
  let newStr = str.replace(/\W/gi, " "); // What does gi do?
  newStr = newStr.replace(/\s+/gi, " ");
  console.log(newStr);
}

cleanUp("---what's my +*& line?");    // " what s my line "
