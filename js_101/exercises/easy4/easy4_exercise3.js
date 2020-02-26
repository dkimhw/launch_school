/*
When Will I Retire?
Build a program that logs when the user will retire and how many more years the user has to work until retirement.

Example:

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
*/

function whenRetire() {
  let readlineSync = require('readline-sync');
  console.log("What is your age?");
  let userAgeInput = parseInt(readlineSync.prompt());
  console.log("At what age would you like to retire?");
  let userRetirementAge = parseInt(readlineSync.prompt());

  let yearsToRetirement = userRetirementAge - userAgeInput;
  console.log(`You will retire in ${2020 + yearsToRetirement}`);
  console.log(`You have only ${yearsToRetirement} years of work to go!`);
}

whenRetire();
