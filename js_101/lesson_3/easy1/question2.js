

const lastCharExclamation = str => {
    return str[str.length - 1] === '!'
}

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

console.log(lastCharExclamation(str1));
console.log(lastCharExclamation(str2));

/*

There is also a javascript function called:

endsWith("!");

*/