
function substringsAtStart(str) {
    let newArr = [];
    for (i = 0; i < str.length; i += 1) {
        let subString = str.slice(0, i + 1);
        newArr.push(subString);
    }

    return newArr;
}

function substrings(str) {
    let newArr = [];
    for (let i = 0; i < str.length; i+= 1) {
        let strToSubstring = str.slice(i);
        newArr = newArr.concat(substringsAtStart(strToSubstring));
    }

    return newArr;
}


console.log(substrings('abcde'));



/*
// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/

/*
function substrings(string) {
  let results = [];
  for (let idx = 0; idx <= string.length; idx++) {
    let longestSubstring = string.substring(idx);
    let allSubstrings = substringsAtStart(longestSubstring);
    results = results.concat(allSubstrings);
  }
  return results;
}
*/