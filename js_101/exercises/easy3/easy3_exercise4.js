
// Input: integer (It represents the digit length of the fibonnaci number). If 2, then 13 would be the first fibonnaci with 2 digit length
// Output: how many iteration it took to reach the digit length


function findFibonacciIndexByLength(digitLength) {
  let firstNumber = 1;
  let secondNumber = 1;
  let i = 2;
  let fibNumber = 0;
  let maxSafeNumber = Number.MAX_SAFE_INTEGER;

  do {
    fibNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = fibNumber;
    i += 1;

    if (fibNumber > maxSafeNumber) {
      break;
    }
  } while (String(fibNumber).length < digitLength)

  if (fibNumber > maxSafeNumber) {
    console.log("Maxium Integer Value Reached");
  } else {
    console.log(i);
  }
}

findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74
findFibonacciIndexByLength(19);      // 74
