
/*

Problem:

Input:
-Integer
Output:
-Integer
-If >=0 input, return -input else just return negative

*/

let negative = (int) => {
  return (int >= 0 ? -int : int);
};

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0