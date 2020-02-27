

/*
Running Totals

Input: takes in array
Output: 
- array with each element being a running total up to that point

Other considerations:
- Other consideration is what happens with empty arrays? Should return empty array

Example:

[2, 5, 13] => [2, 7, 20]
*/

function isPalindromicNumber(int) {
    let stringInt = String(int);
    return stringInt === stringInt.split('').reverse().join('');
}

// Test cases:


/*
Palindromic Numbers

Input: integer - no validations needed
Output: 
    * true if number is palindromic
    * false if not

Other considerations:
    * Definition: palindrome numbers --> same if you read it forward or backwards
    * Any other gotchas? 

Example:

22 is true because it's the same forward or backward
So isPalindromicNumber(22) => true

Best way forward:
- This array mutates the inputted array -> so map could be an option here
- The potential tricky part is making sure the function remember up to the current value of the loop running total
*/

function runningTotal(intArr) {
    let currentTotal = 0;
    let runningTotalArray = intArr.map(i =>
        currentTotal += i // transforms the current elemnt to the current running total
    );

    return runningTotalArray;
}

// Test cases:
console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []