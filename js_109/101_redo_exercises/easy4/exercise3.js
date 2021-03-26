

/*

Build a program that logs when the user will retire and how many more years the user has to work until retirement.


Understand the Problem:

* Input: No function input; has user inputs
* Output: To console - a msg based on user inputs


Test Case:

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!


Algorithm:

Step 1: Ask users for two inputs
Step 2: Using those two inputs and current system year - calculate the retirement year and years of work left. 
Step 3: Return message based on calculated values.

*/


let retire = () => {
  let readlineSync = require('readline-sync');
  let age = readlineSync.question('What is your age? ');
  let retirementAge = readlineSync.question('At what age would you like to retire? ');
  let currentYear = new Date().getFullYear();

  let remainingYearsToRetirement = retirementAge - age;
  let retirementYear = currentYear + remainingYearsToRetirement;
  
  console.log(`It's ${currentYear}. You will retire in ${retirementYear}`);
  console.log(`You have only ${remainingYearsToRetirement} years of work to go!`);
}


retire();