

// Input: Integer (no need to validate)
// Output: String form century
// Example: century(2000) => "20th" century
// Consideration: 'st', 'nd', 'rd', or 'th' as appropriate for that number
// Logic: New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.


// First code up logic to calculate the digit
// Less than 100 --> explicit hardcoded if statement logic
// > 100
// Second code up logic to add the appropriate
// "th", "nd" to the century - most likely with a mapping
// Complication: 11th, 12th, 13th --> it only when century number has
// 11, 12, 13 --> it will need 'th'

// Alt Solution: https://launchschool.com/exercises/394e1c53

function century(year) {
  keyValue = {
    '0': 'th',
    '1': 'st',
    '2': 'nd',
    '3': 'rd',
    '4': 'th',
    '5': 'th',
    '6': 'th',
    '7': 'th',
    '8': 'th',
    '9': 'th'
  }

  let centuryString = "";

  if (year % 100 === 0) {
    centuryString = String(Math.floor(year / 100));
  } else if (year % 100 >= 1) {
    centuryString = String(Math.floor(year / 100) + 1);
  }

  // check for 11, 12, 13 --> if so it's "th"
  thArray = ['11', '12', '13'];
  thUse = 0;
  for(let i = 0; i < thArray.length; i += 1) {
    if (centuryString.includes(thArray[i])) {
      thUse = 1;
    }
  }
  // if not --> use the mapping based on last digit
  if (thUse) {
    centuryString += 'th';
  } else {
    centuryString += keyValue[centuryString[centuryString.length - 1]];
  }
  console.log(centuryString);
}

// Test cases
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
