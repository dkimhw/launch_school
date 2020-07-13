let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;

// [4, [1, 8]]

console.log(arr);

/*

The value of `a` did not change here at any point.

The code `arr[0] += 2` modifies the array `arr` but not `a`. What this code is doing is assigning a new object to index `0` so that `arr[0]` becomes 4.

*/
