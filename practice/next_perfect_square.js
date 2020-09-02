/*

PEDAC Process

Understand the problem (p)

* Explicit Reqs:

1. Inputs
  * positive integer - what about 0? -1? A question to ask the interviewer.
2. Outputs
  * positive integer
  * Logic around the output: 
    * If the argument is not perfect square - return -1
    * If the argument is perfect square -> find the next perfect square
3. Definitions
  * What is a perfect square?
  * Perfect square is an integer "n" where sqrt(n) is also an integer


Examples / Test cases (e)

    console.log(findNextSquare(121)); // 144, "Wrong output for 121");
    console.log(findNextSquare(625)); // 676, "Wrong output for 625");
    console.log(findNextSquare(319225)); // 320356, "Wrong output for 319225");
    console.log(findNextSquare(15241383936)); // 15241630849, "Wrong output for 15241383936");
    console.log(findNextSquare(155)); // -1, "Wrong output for 155");
    console.log(findNextSquare(342786627)); // -1, "Wrong output for 342786627");

Data Structures (D)

Integer is fine

Algorithms (A)

Mini Function - checks for perfect square:
1. Takes an integer as argument
2. If the sqrt of the integer is an integer - return true else return false

Main Function:
1. First check the input if it is perfect square & if not return -1
2. Initialize "nextPerfectSquare" with argument
3. If it is perfect square - run while loop until we find a perfect square
  * Within each loop iteration, increment "nextPerfectSquare"
  * check if the next integer is perfect square
  * If it is break loop
  * If it is not perfect square - keep looping
4. return nextPerfectSquare
*/


function isPerfectSquare(int) {
  return Number.isInteger(Math.sqrt(int));
}

function findNextSquare(sq) {
  if (!isPerfectSquare(sq)) return -1;

  let nextPerfectSquare = sq + 1;

  // Good to review the logic here and talk around with example
  while (!isPerfectSquare(nextPerfectSquare)) {
    nextPerfectSquare++; 
  }

  return nextPerfectSquare;
}

console.log(findNextSquare(121)); // 144, "Wrong output for 121");
console.log(findNextSquare(625)); // 676, "Wrong output for 625");
console.log(findNextSquare(319225)); // 320356, "Wrong output for 319225");
console.log(findNextSquare(15241383936)); // 15241630849, "Wrong output for 15241383936");
console.log(findNextSquare(155)); // -1, "Wrong output for 155");
console.log(findNextSquare(342786627)); // -1, "Wrong output for 342786627");
