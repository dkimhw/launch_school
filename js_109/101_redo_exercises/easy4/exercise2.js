
/*

Write a program that solicits six numbers from the user, then logs a message that describes whether or not the sixth number appears amongst the first five numbers.


Understand the Problem:

* No input on the function
* Output:
  - Msg = The number 17 appears in 25,15,20,17,23.

Test Case:

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

Algorithm:

Use readline-sync to get user inputs
Add each input into an array
Look through the array and see if the last number exists

*/

let search = () => {
  let readlineSync = require('readline-sync');
  let searchArr = [];
  
  searchArr.push(readlineSync.question('Enter the 1st number: '));
  searchArr.push(readlineSync.question('Enter the 2nd number: '));
  searchArr.push(readlineSync.question('Enter the 3rd number: '));
  searchArr.push(readlineSync.question('Enter the 4th number: '));
  searchArr.push(readlineSync.question('Enter the 5th number: '));

  let lastNum = readlineSync.question('Enter the last number: ');
  let inArr = searchArr.includes(lastNum);

  if (inArr) {
    console.log(`The number ${lastNum} appears in ${searchArr.join(',')}.`)
  } else {
    console.log(`The number ${lastNum} does not appear in ${searchArr.join(',')}.`)
  }
}

search();