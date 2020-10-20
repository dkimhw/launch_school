
/*

Understand the problem

* Input:
  * Positive integer number
  * Any additional validations?
    * No
* Output:
  * Positive integer number (it has to be bigger)
  * Using only the digits from the input, find the next bigger number you can form with those digits
  * 12 ==> 21
* Edge cases:
  * If no bigger number can be composed - return -1
    * 9 == > -1
    * 531 ==> -1 (because this would be the largest number we can form using 5, 3, 1)
* Will digits be repeated?

Test Cases:

console.log(nextBiggerNum(9)); // -1
console.log(nextBiggerNum(12)); // 21
console.log(nextBiggerNum(513)); // 531
console.log(nextBiggerNum(2017)); // 2071
console.log(nextBiggerNum(111)); // -1
console.log(nextBiggerNum(531)); // -1
console.log(nextBiggerNum(561)); // 651
console.log(nextBiggerNum(587)); // 758
console.log(nextBiggerNum(123456789)); // 123456798

Algorithms & Data Structures:

Array - each element = a digit

Option 1:

1. Figure out all the combinations of numbers that we can create from the digits. So take 21 for example. All the possible combinations here is 12 & 21.
  * Convert to string, split
  * Take a digit and combine it with other digits
  * [3, 2, 1]
    * Take three, two, then 1
    * Take three, then 1, two
2. Then from the list of combinations of numbers - find the lowest number that is greater than the input so 21 if going by the example I used above

Option 2: Shifting
//587
1. Loop based on # of digits so with 587 as example, loop three times
2. Have an innner loop that uses the last digit to loop against the rest of the higher digits
  * So with 587, you start with 7
  * Compare against 8, if bigger than input number & less than or equal previous number it shifted from, shift
  * Compare against 5, if bigger than input number & less than or equal previous number it shifted from, shift

At the end of that first inner loop: 785

3. As an example, you would do a second loop this time with 5

At the end of this second loop: 758

4. Then again with 8

But no shift since 758 is the lowest

*/

function toArray(number) {
  return number.toString().split('');
}

function compareDigits(number1, number2) {
  let array1 = toArray(number1).sort();
  let array2 = toArray(number2).sort();

  if (array1.length !== array2.length) {
    return false;
  }

  let i;

  for (i = 0; i < array1.length; i += 1) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

function nextBiggerNum(number) {
  let digits = toArray(number).length;
  let number2 = number;

  while (toArray(number2).length <= digits) {
    number2 += 1;
    if (compareDigits(number, number2)) {
      return number2;
    }
  }

  return -1;
}

console.log(nextBiggerNum(587)); // 758 not 785

/*
console.log(nextBiggerNum(9)); // -1
console.log(nextBiggerNum(12)); // 21
console.log(nextBiggerNum(513)); // 531
console.log(nextBiggerNum(2017)); // 2071
console.log(nextBiggerNum(111)); // -1
console.log(nextBiggerNum(531)); // -1
console.log(nextBiggerNum(561)); // 651
console.log(nextBiggerNum(587)); // 758
console.log(nextBiggerNum(123456789)); // 123456798
console.log(nextBiggerNum(1432)); // 2134
*/