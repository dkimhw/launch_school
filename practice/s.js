/*
PEDAC

1. Understand the problem

Digital root -> recursive sum of all the digits in a number.

What does that really mean? Example:

16 -> 1 + 6 = 7

2. Input

Integer - no validations required - return null if not integer?

3. Output

Integer -> has the sum of all the digits in a number

4. Data Structures

It's an integer but it would be easier to work on this by converting the number to string and having each digit be an array element.

So array

5. Implementation

1. Convert the inputted integer into string
2. Split the string number by its digit
3. Reduce over the array (use reduce function)


*/

function digital_root(n) {
  let newN = n;

  // quick data validation
  if (n === undefined || n === null) {
    return null;
  }

  while (true) {
    if (newN.toString().length > 1) {
      newN = newN.toString().split('').reduce( (accumulator, el) => Number(el) + accumulator , 0);
    } else {
      break;
    }
  }
  
  return newN;
}

// Test Cases
console.log(digital_root(16));
console.log(digital_root(942));
console.log(digital_root(132189));
console.log(digital_root(493193));