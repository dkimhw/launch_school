/*
Examples:

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.
*/

// Write a program that solicits six numbers from the user, then logs a message that describes whether or not the sixth number appears amongst the first five numbers.

// User Inputs: User types in six numbers
// Output: Msg that prints out whether or not sixth number appears amongst the first five numbers
function searchingNumbers() {
  keyMap = {
    '1': 'st',
    '2': 'nd',
    '3': 'rd',
    '4': 'th',
    '5': 'th',
    '6': 'last'
  }
  let lastNumber;
  let numArray = [];
  let readlineSync = require('readline-sync');
  for (let i = 1; i <= 6; i += 1) {
    let userInput;
    if (i === 6) {
      console.log(`Enter the ${keyMap[i]} number:`);
      userInput = readlineSync.prompt();
      lastNumber = parseInt(userInput);
    } else {
      console.log(`Enter the ${i + keyMap[i]} number:`);
      userInput = readlineSync.prompt();
      numArray.push(parseInt(userInput));
    }
  }

  if (!numArray.includes(lastNumber)) {
    console.log(`The number ${lastNumber} does not appear in ${numArray}`);
  } else {
    console.log(`The number ${lastNumber} appears in ${numArray}`);
  }
}

searchingNumbers();
