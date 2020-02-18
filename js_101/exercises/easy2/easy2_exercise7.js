
// Write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise.

// input: two values

function xor(val1, val2) {
  if (val1 && val2) {
    return false;
  } else if (val1 || val2) {
    return true;
  }
}

console.log(xor(5, 0));
console.log(xor(false, true));
console.log(xor(1, 1));
console.log(xor(true, true));

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);


/*
// Alternate solution (think of inverters)
function xor(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    return true;
  }
  return false;
}

*/
