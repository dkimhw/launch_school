

function substringsAtStart(str) {
    let newArr = [];
    for (i = 0; i < str.length; i += 1) {
        let subString = str.slice(0, i + 1);
        newArr.push(subString);
    }

    return newArr;
}

console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]


/*

function substringsAtStart(string) {
  return string
    .split("")
    .map((_, idx, stringArray) => stringArray.slice(0, idx + 1).join(""));
}

*/