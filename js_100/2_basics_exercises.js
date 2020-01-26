
// Basics Exercises of JS 100 Book

// Question 1:
console.log("Question 1 Answer: \n");
console.log('John ' + 'Doe \n');

// Question 2:
let questionTwoValue = 4936;
let num;
console.log("Question 2 Answers: \n");
console.log(`1. Ones place: ${questionTwoValue % 10} \n`);
num = questionTwoValue % 10;
questionTwoValue = (questionTwoValue - num) / 10;

console.log(`2. Tens place: ${questionTwoValue % 10} \n`);
num = questionTwoValue % 10;
questionTwoValue = (questionTwoValue - num) / 10;

console.log(`3. Hundreds: ${questionTwoValue % 10} \n`);
num = questionTwoValue % 10;
questionTwoValue = (questionTwoValue - num) / 10;

console.log(`4. Thousands: ${questionTwoValue % 10} \n`);

// Question 3:
console.log("Question 3 Answers: \n");

console.log(`'true' is ${typeof 'true'} \n`); // string
console.log(`false is ${typeof false} \n`); // boolean
console.log(`1.5 is ${typeof 1.5} \n`); // number
console.log(`2 is ${typeof 2} \n`); //  number
console.log(`undefined is ${typeof undefined} \n`); // undefined
console.log(`{ foo: 'bar' } is ${typeof { foo: 'bar' }} \n`); // object

// Question 4:
console.log("Question 4 Answers: \n");

console.log(`var foo; is a statement \n`);
console.log(`foo = 5; is an expression \n`); // because it returns a value
console.log(`foo is an expression \n`);


// Question 5:

let questionFiveAnswer = `
  The following code logs '510' instead of 15 because JavaScript when concatenating a string to a number will implicitly coerce the number into a string. So JavaScript under the hood is combining two string '5' and '10' resulting in '510';
`
console.log("Question 5 Answers: \n");
console.log(questionFiveAnswer + '\n');

// Question 6 + 7:

console.log("Question 6 + 7 Answers: \n");
console.log(`The value of 5 + 10 is: ${Number('5') + 10} \n`);

// Question 8:

let questionEightAnswer = `
  Does not result in an error. This would be a serious error (trying to access an index of an array that is out of range) in Java but JavaScript simply returns undefined. 
`
console.log("Question 8 Answers: \n");
console.log(questionEightAnswer + '\n');

// Question 9:
let arrayNine = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin'];
console.log("Question 9 Answers: \n");
console.log(arrayNine + "\n");

// Question 10:
let objectTen = { 
  'asta': 'dog',
  'butterscotch': 'cat',
  'pudding': 'cat',
  'neptune': 'fish',
  'darwin' : 'lizard'
}
console.log("Question 10 Answers: \n");

for (let key in objectTen) {
  console.log(`${key} is a ${objectTen[key]}`);
}

// Question 11:

console.log("Question 11 Answers: \n");

console.log("I think it's false");
console.log(`Expected: ${'foo' === 'Foo'} + \n`);

// Question 12:

console.log("Question 12 Answers: \n");

console.log("I think it's 3");
console.log(`Expected: ${parseInt('3.1415')} + \n`);

// Question 13:

console.log("Question 13 Answers: \n");

console.log("I think it's false");
console.log(`Expected: ${'12' < '9'}`);
// When you compare strings in JavaScript, it performs a character-by-character comparison going from left to right. It determines that '1' < '9' so '12' is less than '9'.
