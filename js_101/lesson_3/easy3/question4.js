

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);


/*
Prints: [{ first: "value1" }, { second: "value2" }, 3, 4, 5];

arr1.slice() makes a copy of the array as a value to arr2 but it is
a shallow copy so any changes to arr2 affects arr1 (they point to the same object)

*/