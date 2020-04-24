
let numbers = [1, 2, 3, 4, 5];
console.log(Array.from(numbers).reverse());
console.log(numbers); // [ 5, 4, 3, 2, 1 ]


console.log(Array.from(numbers).sort((num1, num2) => num2 - num1));
console.log(numbers); // [ 5, 4, 3, 2, 1 ]


// using forEach
let reversedArray = [];
numbers.forEach((_, index, array) => {
    reversedArray.push(array[array.length - 1 - index]);
});
  

console.log(reversedArray);

// using reduce
let reversedArray2 = numbers.reduce((acc, current) => {
    return [current, ...acc]
}, [])

console.log(reversedArray2);