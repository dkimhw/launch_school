
// Input: integer (It represents the digit length of the fibonnaci number). If 2, then 13 would be the first fibonnaci with 2 digit length
// Output: how many iteration it took to reach the digit length


function findFibonacciIndexByLength(digitLength) {
  let firstNumber = 1;
  let secondNumber = 1;
  let i = 2;
  let fibNumber = 0;

  do {
    fibNumber = firstNumber + secondNumber;
    firstnumber = secondNumber;
    secondNumber = fibNumber;
    i += 1;
  } while (String(fibNumber).length < digitLength);

  console.log(i);
}

findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74
