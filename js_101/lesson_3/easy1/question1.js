let numbers = [1, 2, 3];
numbers[6] = 5; // does not raise an error

console.log(numbers); // [ 1, 2, 3, <3 empty items>, 5 ]


// returns undefined but it is truly empty - doesn't even have the value undefined

console.log(numbers[4]);


