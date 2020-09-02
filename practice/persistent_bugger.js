
/*

PEDAC

Understand the Problem (P)

* Explicit Req
  * Input: Positive integer (ask this question)
  * Output: Integer
  * Logic for output:
    * Returns its "multiplicative persistence" - the number of times you must multiply the digits in `num` until you reach a single digit
    * 39 --> returns 3 because 3*9 = 27, 2*7 = 14, 1*4=4

* Implicit Req
  * If the input is already single digit --> returns 0

Examples / Test Cases (E)

  console.log(persistence(39)); //3
  console.log(persistence(4)); //0
  console.log(persistence(25)); //2
  console.log(persistence(999)); // 4


Data Structures (D):

Array --> I need a easy way to access digits and multiply them together


Algorithms (A):

Mini function:

1. isSingleDigit(num)
  * Checks the num is single digit

Main:

1. Check for single digit value --> if yes, return 0 immediately
2. Initialize a variable `numArr` by taking the input and putting each digit as elements of the array
3. Create a variable called `countMultiplication`
4. `while` loop
    * Create a variable called `currentMultiplication` = numArr[0] * numArr[1]
    * Check that this number is a single digit
    * If it is not single digit - replace numArr[0] and numArr[1] with new values and keep looping
      * increment countMultiplication
    * If it is single digit then break the loop
5. return "returnNum"

Implementation
*/

function isSinglePositiveDigit(num) {
  return num > 0 && num <= 9;
}

function isSingleDigit(num) {
  return num >= 0 && num <= 9;
}

function persistence(num) {
  let countMultiplication = 0;

  if (isSinglePositiveDigit(num)) {
    return countMultiplication;
  }

  let numArr = String(num).split('').map(el => Number(el));

  while(true) {
    countMultiplication++;
    let currentMultiValue = numArr.reduce( (acc, b) => acc * b , 1);

    if (isSingleDigit(currentMultiValue)) {
      break;
    } else {
      let currentMultiValueArr = String(currentMultiValue).split('').map(el => Number(el));
      numArr = currentMultiValueArr;
    }
  }

  return countMultiplication;
}

console.log(persistence(39)); //3
console.log(persistence(4)); //0
console.log(persistence(25)); //2
console.log(persistence(999)); // 4