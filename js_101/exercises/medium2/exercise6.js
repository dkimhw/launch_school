
/*

Understand the problem:

Input:
Integer

Output:

(sum of the sequence of digits up to the inputted integer)^2 - (individual sequence of digits squared)

if input = 2

(1 + 2)^2 - ( (1)^2 + (2)^2 )


Data Structures:
* Array

Algorithms:
* First create an array starting from 1 up to the inputted integer using for loop
* Use .reduce to sum up the array and square by 2 and save that result in a variable
* Use .forEach to loop each element and square and += each element into a sum variable

*/

const rangeArray = (int) => {
    let intArray = [];
    for (let i = 1; i <= int; i++) {
        intArray.push(i);
    }

    return intArray;
}

const sumSquareDifference = (int) => {
    let intArray = rangeArray(int);
    let squareElementThenSum = 0;
    
    // Calculate sum of all the digits up to given input integer and square
    let sumThenSquare = intArray.reduce( (total, current) => {
        return total + current;
    }) ** 2;

    intArray.forEach(el => {
        squareElementThenSum += el**2;
    });

    return sumThenSquare - squareElementThenSum;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150


/*
// Actually the algorithm would have worked with just number:

function sumSquareDifference(count) {
  let sum = 0;
  let sumOfSquares = 0;
  for (let number = 1; number <= count; number++) {
    sum += number;
    sumOfSquares += Math.pow(number, 2);
  }
  return Math.pow(sum, 2) - sumOfSquares;
}

*/