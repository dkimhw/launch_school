
/*

Input: non-empty string
Output: return the middle character(s)

Length:
So if odd = one middle character
So if even = two middle characters

Example:

'I Love JavaScript' =>  "a"
*/

function centerOf(str) {
    let strLength = str.length;
    if (strLength % 2 === 0) {
        return str.slice(Math.floor(strLength / 2) - 1, Math.floor(strLength / 2) + 1);
    } else {
        return str.slice(Math.floor(strLength / 2), Math.floor(strLength / 2) + 1);
    }
}


console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"



/*

// Alternate solution:

function centerOf(string) {
  if (string.length % 2 === 1) {
    return string[Math.floor(string.length / 2)];
  } else {
    return string.substr((string.length / 2) - 1, 2);
  }
}


*/