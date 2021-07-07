/* eslint-disable max-len */
/*

Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array. Each element in the grocery list contains a fruit name and a number that represents the desired quantity of that fruit. The output array is such that each fruit name appears the number of times equal to its desired quantity.

In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.


Understand the Problem:

Input:
  - 2-D Array

Output:
  - 1-D Array
  - Each fruit name appears the number of times equal to the quantity listed in 2-D Array

Examples:

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]])); // returns ["apple", "apple", "apple", "orange", "banana", "banana"]

Algorithm:

Step 1: Loop through the 2-D Array starting from index 0 (i)

Step 2: For each `i`, check the i[1] and insert into new array `newGroceryList` i[0] by the amount listed in `i[1]`

Step 3: Return `newGroceryList`

*/

let buyFruit = (groceryList) => {
  let newGroceryList = [];

  for (let idx = 0; idx < groceryList.length; idx += 1) {
    for (let jdx = 0; jdx < groceryList[idx][1]; jdx += 1) {
      newGroceryList.push(groceryList[idx][0]);
    }
  }

  return newGroceryList;
};

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]])); // returns ["apple", "apple", "apple", "orange", "banana", "banana"]