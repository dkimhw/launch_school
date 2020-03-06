
/*

Input: string (includes alphabet, space, symbols)
Output: doubles every character in string
Consideration:
* Are there other consideration we need to make?

Example:

'Hello' => "HHeelllloo"
*/

function repeater(str) {
    // Loop through each string character and double it
    newStr = '';
    for (let i = 0; i < str.length; i += 1) {
        newStr += str[i].repeat(2);
    }

    return newStr;
}

// Test Cases:

console.log(repeater('Hello'));        // "HHeelllloo")
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""


/*

Shorter and pretty cool solution from LS:

function repeater(string) {
  return string.split("").map(char => char + char).join("");
}

*/