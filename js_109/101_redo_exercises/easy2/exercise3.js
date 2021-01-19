
/*

Easy 2

Exercise 3: Multiply Two Numbers

Create a function that takes two arguments, multiplies them together, and returns the result.


Understand the problem:

* Input: two integers - what if they are not integers? Do we need to handle that as well?
* Output: integer 
  - Logic on output: multiple the two integers together and return the multiplication

Test Case:

console.log(multiply(5, 3) === 15); // logs true


Quick Algorithm:

Take the two inputs to the function - multiply them together and return the results
What happens in cases where the inputs are not strings? Then return null.


*/

let multiply = (num1, num2) => {
  let multiplyInputs = num1 * num2;
  
  if (!isNaN(multiplyInputs)) {
    return multiplyInputs;
  } else {
    return null;
  }
}

console.log(multiply(5, 3) === 15); // logs true
console.log(multiply('hello', 3) === null); //logs true