
/*

Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

Understand the problem:

* No input
* Output: print all odd numbers between 1 to 99
  * each number on separate line

Test cases:

I should see, 1, 3, 5, 7, 9, 11 etc.

Mini Algo:

For every number starting from 1 to 99, check if current number is odd.

If it is odd, print to console the current number.

*/

for (let i = 1; i <= 99; i += 1) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}