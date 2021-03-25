

/*

Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.


Understand the Problem:

* Input: Integer (century)
* Output: Str
  * Returns the string form of the integer century
  * So 1950 --> outputs 20th

- Key things to remember - new century ends with 01.


Test Cases:

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"


Algorithms:

What are the two things to think about?

1. How to convert the integer to the right century value i.e. 2001 -> 21
2. How to add the correct appropriate suffix like 'th' or 'st' for 21st

Part 1:

Divide by modulo 100
- If there is a remainder Round up century/100
- If = 0 then just century /100


Part 2:

We have part 1 - call part 1

'st', 'nd', 'rd', or 'th' 

Ending value:

'th': 0, 4, 5, 6, 7, 8, 9
'st': 1
'nd': 2
'rd': 3

Map these values to a object

Access the last value of the prefix and check what ending suffix to append


*/

let centuryPrefix = (centuryYear) => {
  let r = centuryYear % 100;

  if (r === 0) {
    return centuryYear / 100;
  } else if (r > 0) {
    return Math.ceil(centuryYear / 100);
  }
}

let centurySuffix = (prefix) => {
  let prefixString = String(prefix);

  // For the edge cases of 11 - 19:
  if (['11', '12', '13', '14', '15', '16', '17', '18', '19'].includes(prefixString.substring(prefixString.length - 2, prefixString.length))) return 'th';

  if (['0', '4', '5', '6', '7', '8', '9'].includes(prefixString[prefixString.length - 1])) {
    return 'th';
  } else if (prefixString[prefixString.length - 1] === '1') {
    return 'st';
  } else if (prefixString[prefixString.length - 1] === '2') {
    return 'nd';
  } else if (prefixString[prefixString.length - 1] === '3') {
    return 'rd';
  }
}


let century = (centuryYear) => {
  let prefix = String(centuryPrefix(centuryYear));
  let suffix = centurySuffix(prefix);

  return prefix + suffix;
}

console.log(century(1965));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
