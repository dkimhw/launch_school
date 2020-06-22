let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object); // [1, 2] still


/*

This is because `numArray` here is a reference to the list in the object's 'first' list.

It directly changes this value using `push`.

*/

// What if you wanted to modify `numArray` without affecting `object`?

// Option 1
let object1 = { first: [1] };
let numArray1 = object["first"].slice();
numArray1.push(2);

// Option 2
let object2 = { first: [1] };
let numArray2 = object["first"].concat();
numArray2.push(2);
