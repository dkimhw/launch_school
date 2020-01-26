
let rlSync = require('readline-sync');
let age = Number(rlSync.question('How old are you? '));
console.log(`You are ${age} years old.`);

let printAge = (currentAge, ageToAdd) => {
  console.log(`In ${ageToAdd}, you will be ${currentAge + ageToAdd} years old.`);
}

printAge(age, 10);
printAge(age, 20);
printAge(age, 30);
printAge(age, 40);

