
// Question 1

console.log("Question 1: \n");

let name = 'Victor'

console.log(`Good Morning, ${name}.`);
console.log(`Good Afternoon, ${name}.`);
console.log(`Good Evening, ${name}.\n`);


// Question 2

console.log("Question 2: \n");

function printAge(ageGiven, ageToAdd) {
  console.log(`In ${ageToAdd}, you will be ${ageGiven + ageToAdd} years old`);
}

let age = 20;
console.log("You are 20 years old.");
printAge(age, 10);
printAge(age, 20);
printAge(age, 30);
printAge(age, 40);

console.log("\n");

// Question 3

let ansThree = `
'let' is a block scoped variable - thus anything decalared within a code block cannot be accessed outside.
`
console.log("Question 3: \n");
console.log(ansThree + "\n");

// Question 4

let ansFour = `
The code outputs to console three times with Victor. Code fails at line 6 because you cannot modifiy a variable that was initialized with const.
`
console.log("Question 4: \n");
console.log(ansFour + "\n");


// Question 5

let ansFive = `
It will output bar. The reason is the code first instantiates a foo global variable. It then instantiates a block level foo variable that shadows or hides the variable from line 1. What JavaScript can access after those two parts run is the global variable and not the block level foo variable. 
`
console.log("Question 5: \n");
console.log(ansFive);
let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo + "\n");

// Question 6

let ansSix = `
Will not cause an error. It will print 'bar'. This is because first variable declares FOO at the global level. Then creates a second FOO variable at the block level that shadows the first FOO varaible. The FOO variable in the block level disappears after the code block runs.
`
console.log("Question 6: \n");
console.log(ansSix);
