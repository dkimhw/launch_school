

function palindromes(str) {
    let substringArr = substrings(str);
    return substringArr.filter(i => palindrome(i));
}

/*
function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

You don't need the i => palind... part
*/

function palindrome(str) {
    if (str.length === 1) {
        return false;
    } else {
        return str.split('').reverse().join('') === str
    }
} 

/*

Alternative way to include two truth conditions
function isPalindrome(word) {
  return word.length > 1 && word === word.split("").reverse().join("");
}
          
*/

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


console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]
console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]