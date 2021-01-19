
/*

Exclusive Or

The || operator returns a truthy value if either or both of its operands are truthy, a falsey value if both operands are falsey. The && operator returns a truthy value if both of its operands are truthy, and a falsey value if either operand is falsey. This works great until you need only one of two conditions to be truthy, the so-called exclusive or.

In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise. Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.


Understand the problem:

* Input: two arguments
* Output: boolean
  - returns true if one of its arguments is truthy
  - else returns false
* False:
  - undefined
  - null
  - 0
  - false
  - ''

Test cases:

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

5, 0 --> 5 is truthy so true; 0 is falsy. only one can be truthy

Quick algorithm:

Check if first argument is truthy or falsy
Check if second argument is truthy or falsy

If one of the argument is truthy and other falsy then return true else false

*/

let falsyTruthy = (input) => {
  let falsyValues = [undefined, null, 1, '', 0, NaN, false];

  if (falsyValues.includes(input)) {
    return 'Falsy';
  } else {
    return 'Truthy';
  }
}

let xor = (input1, input2) => {
  let input1TruthyFalsy = falsyTruthy(input1);
  let input2TruthyFalsy = falsyTruthy(input2);

  return (input1TruthyFalsy == 'Truthy' && input2TruthyFalsy == 'Falsy') || (input1TruthyFalsy == 'Falsy' && input2TruthyFalsy == 'Truthy');
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
console.log(xor(NaN, true) === true);



/*

Much more clever:

function xor(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    return true;
  }
  return false;
}



*/