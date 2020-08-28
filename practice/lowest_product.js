
/*

PEDAC:

Understand the Problem (P):

Explicit requirements:
* Input: String (numbers)
  * Will the input always be in this format?
* Output: Return the lowest product of 4 consecutive digits in a number given as a string
  * If the number has less than 4 digits - return "Number is too small."


Examples and Test Cases (E):

* Consecutive digits
  * 1234111 --> example
  * "4111" would be the smallest consecutive (they must come in order)

console.log(lowestProduct("123456789")); // 24 
console.log(lowestProduct("234567899")); // 120 
console.log(lowestProduct("2345611117899")); // 1
console.log(lowestProduct("333")) // "Number is too small"
console.log(lowestProduct("1234111")); // 4

Data Structures (D):

Arrays


Algorithms (A):

1. Let's declare a variable numArr
2. Take the string input - convert the string to array of numbers
3. Validate the input --> make sure "numArr" length is >= 4 - if not return "Number is too small".
4. Create a variable called lowestNumber set to 0
5. Then for loop over "numArr":
    * On each iteration, we take the current element save that element in variable "currentNumber"
    * Then initiate a for loop that loops exactly three times (so we can look at the next three values)
      * In this for loop, multiply the next three values with currentNumber
    * After that loop, compare the currentNumber against lowestNumber and if currentNumber is lower than lowestNumber, we reassign the value of lowestNumber with currentNumber
6. Return lowestNumber

Implementation:
*/

function lowestProduct(strNum) {
  if (strNum.length < 4) {
    return "Number is too small";
  }

  let numArr = strNum.split('').map(num => Number(num));
  let lowestNumber;

  for (let index = 0; index < numArr.length; index++) {
    let currentNumber = numArr[index];

    for (let j = index + 1; j < index + 4; j++) {
      currentNumber *= numArr[j];
    }

    if (lowestNumber === undefined) {
      lowestNumber = currentNumber;
    } else if (lowestNumber > currentNumber) {
      lowestNumber = currentNumber;
    }
  }

  return lowestNumber;
}


console.log(lowestProduct("123456789")); // 24 
console.log(lowestProduct("234567899")); // 120 
console.log(lowestProduct("2345611117899")); // 1
console.log(lowestProduct("333")) // "Number is too small"
console.log(lowestProduct("1234111")); // 4