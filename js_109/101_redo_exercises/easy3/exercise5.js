
/*

Write a function that takes a positive integer, n, as an argument, and logs a right triangle whose sides each have n stars. 

The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

PEDAC (understand the problem, example, data structures, algorithm)

Understand the Problem:

* Input: integer
* Output: undefined
  * To console - a right triangle made of * (see test cases)
  * n = height of the right triangle


Test Cases:

triangle(5);

    *
   **
  ***
 ****
*****


Algorithm:

We can see that for each level, the stars increase by 1. Another thing to observe is that the maximum length is determined by "n". So for the first level for example is a combination of n-1 " " + *.

Step 1: Start a loop 1 to n
Step 2: In each loop iteration create n-1 whitespaces + *. And at each level decresase the whitesapce by 1 (so next level will be n-2) and increase the start by 1.


*/

let triangle = (height) => {
  
  for (let idx = 1; idx <= height; idx += 1) {
    let whiteSpaces = " ".repeat(height - idx);
    let stars = "*".repeat(idx);

    console.log(whiteSpaces + stars);
  }
}

triangle(5);
triangle(9);