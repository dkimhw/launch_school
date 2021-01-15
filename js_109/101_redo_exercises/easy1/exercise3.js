/*

Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

Understand the problem:

* There is no input
* Output:
  * Print all even numbers between 1 to 99
  * Each number printed on a newline


Mini Algo:

For every number between 1 and 99, check each number for eveness.

If current number is even, print to console.

*/

for (let i = 1; i <= 99; i += 1) {
  if (i % 2 === 0) {
    console.log(i);
  }
}