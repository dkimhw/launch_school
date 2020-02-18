

// Assume all characters will be numeric.
// Cannot use out of box Javascript cast functions

// Convert a string number to number data type
// Input string - assume input is string numbers
// There is no need to address signed numbers like -3 in this function

https://apurplelife.com/2020/02/11/7-months-to-retirement/

// My first instinct here is to do a split convert it to an array
// But that would give me a list of array in string
// Then you would essentially map string to digit
function stringToInteger(strNum) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };

  let number = 0;
  let strArray = strNum.split('');
  let intArray = strArray.map(num => DIGITS[num]);

  for (let i = 0; i < intArray.length; i += 1) {
    number = (10 * number) + intArray[i];
  }
  return number
}

console.log(stringToInteger("4321"));
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
