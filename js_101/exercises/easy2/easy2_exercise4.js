

// Use previous function multiply
const multiply = (num1, num2) => {
  return num1 * num2;
}

// Input is one argument that is a number
// Use the function above to write a function that computes the square of its argument
const square = (num) => {
  return multiply(num, num);
}


// Test
console.log(square(5) === 25); // logs true
console.log(square(-8) == 64); // logs true
