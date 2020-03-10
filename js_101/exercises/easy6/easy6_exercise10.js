

function reverseWords(str) {
    let strArr =  str.split(' ');
    let newStrArr = [];

    for (let i = 0; i < strArr.length; i += 1) {
        if (strArr[i].length >= 5) {
            newStrArr.push(strArr[i].split('').reverse().join(''));
        } else {
            newStrArr.push(strArr[i]);
        }
    }

    return newStrArr.join(' ');
}

// Test

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"


/*
Easier way to do it using multiple functions

function reverseWords(str) {
  return str.split(' ').map(word => toReverse(word)).join(' ');
}

function reverseWord(word) {
  return word.split('').reverse().join('');
}

function toReverse(word) {
  return word.length >= 5 ? reverseWord(word) : word;
}


*/