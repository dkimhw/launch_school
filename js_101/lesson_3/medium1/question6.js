
let nanArray = [NaN];

console.log(nanArray[0] === NaN); // I imagine true?


console.log(isNaN(nanArray[0]));


/*

The output is false - NaN is not a number. It is a special numeric value 
that indicates that an operation was intended to return a number failed.

JavaScript doesn't let you use "==" and "===" to determine whether a value is
NaN.

*/