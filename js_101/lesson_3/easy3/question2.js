

console.log([1, 2, 3] + [4, 5]); // [1, 2, 3, 4, 5] - my guess

/*

But you get:

1, 2, 34, 5

In JavaScript, the + operator first converts the arrays to strings
, and then concatenates the strings, so the output is the string 1,2,34,5.
*/