/*

1. Understand the Problem

Takes in an array of 10 integers. Each element can be between (0 and 9). 
Then return a string of those numbers in the form of a phone number

2. Input - array of integers - 10 exact

No validation needed

3. Output

String

4. Test Cases

describe('Basic tests', () => {
  Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
  Test.assertEquals(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
  Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
});

5. Data Structures

Array

6. Implementation

1. Since the the array indexes match the phone number positions (i.e. index 0 matches the first number) - we can use .slice method to slice up the indexes and combine them together into a string

*/

function createPhoneNumber(numbers){
  // first three digits of number
  firstThreeNumbers = `(${numbers.slice(0, 3).join('')})`;
  midThreeNumbers = ` ${numbers.slice(3, 6).join('')}-`;
  finalFourNumbers = `${numbers.slice(6, 10).join('')}`;

  return firstThreeNumbers + midThreeNumbers + finalFourNumbers;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890"
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // "(111) 111-1111"