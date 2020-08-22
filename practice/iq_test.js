/*

Mini PEDAC

1. Understand the problem

The function has to find, among the given numbers, one that is different in evenness.

What is evenness? How can you have different evenness?
* Finding a number that is different from all the other numbers based on odd/even.
* If you have 2, 4, 7, 8, 10. You can see that 7 is the only odd number.


Any important potential cases we need to consider:
* We need to account for indexes of the elements. The test starts from 1 not 0.


Test cases:

console.log(iqTest("2 4 7 8 10")); // 3 - third number (7) is odd, while the rest of the numbers are even
console.log(iqTest("1 2 1 1")); // 2 - second number is even - while the rest of the numbers are odd


2. Input

A well-formatted string with numbers and spaces between the numbers after the first digit and before the last digit

Do we need to validate that or are we okay to assume that we will be receiving a well-formatted string?


3. Output

Return the number that is not the same as other numbers

What is the case when there is no uniqueness:
* 2, 4, 8 --> what do we return? 0?
  * for this no need to consider that


4. Data Structures

Array makes sense since I need to loop over each digit to determine even or odd


5. Algorithms & Implementation

1. We split() the input. So we get [2, 4, 7, 8, 10]
2. Loop over that array - check for even, odd; store even total, odd total.
3. if even total === 1 and odd total > 1 -> [2, 4, 7, 8, 10] loop over this array -> stop when you find odd number and return index + 1


*/

function iqTest(iqStringInput) {
  let iqInputArr = iqStringInput.split(' ');
  let oddTotal = 0;
  let evenTotal = 0;

  iqInputArr.forEach(el => {
    (el % 2 === 0) ? evenTotal++ : oddTotal++;
  });

  if (oddTotal === 1 && evenTotal > 1) {
    for (let index = 0; index < iqInputArr.length; index++) {
      if (iqInputArr[index] % 2 !== 0) {
        return index + 1;
      }
    }
  } else if (evenTotal === 1 && oddTotal > 1) {
    for (let index = 0; index < iqInputArr.length; index++) {
      if (iqInputArr[index] % 2 === 0) {
        return index + 1;
      }
    }    
  }
}

console.log(iqTest("2 4 7 8 10")); // 3 - third number (7) is odd, while the rest of the numbers are even
console.log(iqTest("1 2 1 1")); // 2 - second number is even - while the rest of the numbers are odd


function iqTest2(iqString) {
  let iqArr = iqString.split(' ');

  let iqArrMap = iqArr.map(el => el % 2);
  let sumIQArr = iqArrMap.reduce( (accumulator, element) => accumulator + element, 0);

  if (sumIQArr === 1) {
    return iqArrMap.findIndex(el => el === 1) + 1;
  } else if (sumIQArr > 1) {
    return iqArrMap.findIndex(el => el === 0) + 1;
  }
}

console.log(iqTest2("2 4 7 8 10"));
console.log(iqTest2("1 2 1 1"));