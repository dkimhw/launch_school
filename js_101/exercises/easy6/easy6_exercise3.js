

function reverseNumber(int) {
    let strInt = String(int).split('').reverse().join('');
    // decimal base value = 10 - explicitly set here
    return parseInt(strInt, 10);
}


console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1