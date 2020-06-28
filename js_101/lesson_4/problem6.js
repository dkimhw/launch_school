
let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);

console.log(arr);

/*

// [1, 1, 1, 1, 1]

Destructive

First parameter: value you want to replace with
Second parameter: starting index
Third parameter: end index

So this code, "fills" the indexes 1 to 5 with 1 and it is destructive

*/