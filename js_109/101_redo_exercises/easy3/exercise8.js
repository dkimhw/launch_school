

/*

Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.


Understand the Problem:

* Input: Three Numbers
* Output: String
  * Returns the letter associated with the mean of the three scores
  * Example: if mean average is >= 90 then return 'A'

- Any edge cases?
  - Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.


Test Cases:

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"


Algorithm:

Three numeric inputs. Mean is just the sum of these three numbers divided by 3.

Write an if statement that checks if score is >= 90 then 'A'
else if checks if score is >= 80 and < 90 then 'B'


*/

let getGrade = (testGrade1, testGrade2, testGrade3) => {
  let testMean = (testGrade1 + testGrade2 + testGrade3) / 3;

  if (testMean < 60) {
    return 'F';
  } else if (testMean < 70) {
    return 'D';
  } else if (testMean < 80) {
    return 'C';
  } else if (testMean < 90) {
    return 'B';
  }  else {
    return 'A';
  }
}

console.log(getGrade(50, 50, 50));    // "F"
console.log(getGrade(50, 50, 95));    // "D"
console.log(getGrade(75, 76, 78));    // "C"
console.log(getGrade(95, 90, 93));    // "A"
