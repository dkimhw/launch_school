

// function to calculate whether input is odd
// input - number

function isOdd(num) {
  // ternary operator that uses moduluo operator to check whether it is evenly divided or not
  return (num % 2 !== 0 ? true : false);
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
