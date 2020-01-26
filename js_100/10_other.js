
/*
Question 1
*/
console.log("Question 1:\n");

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log("This will print [1, 4, 3]")
console.log(array2);

// array 1 and array 2 reference the same array
// changing an element using array1 also changes the element in array2

/*
Question 2
*/
console.log("Question 2:\n");

let questionTwo = `
Tells the programmer that the variable greeting has not be defined so it cannot be accessed. The problem is in file exercise2 line 4:15
`

console.log(questionTwo + "\n");


/*
Question 3
*/
console.log("Question 3:\n");

console.log(Math.sqrt(37) + "\n");

/*
Question 4
*/
console.log("Question 4:\n");

console.log(Math.max(1, 6, 3, 2));      // 6
console.log(Math.max(-1, -6, -3, -2));  // -1
console.log(Math.max(2, 2));            // 2

/*
Question 5
*/
console.log("Question 5:\n");

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

const questionFive = `
The function first takes a string - splits the string into an array by a delimiter in this case a space. Then passes this array to reverse which then reverses the order of the array. Then reverse passes this array to map method. It takes each element - calculates the length and returns a new array that contains the string length of each element.
`

console.log(questionFive + "\n");

/*
Question 6
*/
console.log("Question 6:\n");

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // ['laboratory', 'flab', 'elaborate']

function allMatches(stringArr, pattern) {
  return stringArr.filter(word => pattern.test(word));
}

console.log("\n");


/*
Question 7
*/
console.log("Question 7:\n");
const questionSeven = `
Exception handling allows programmers to anticipate errors and allow the program to handle those errors in an approprite manner. Uses try/catch statement. 
`

console.log(questionSeven);