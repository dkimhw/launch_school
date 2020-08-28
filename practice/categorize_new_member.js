/*

PEDAC

Understand the Problem (P):

Explicit requirements:
* There are two main memberships - Senior and Open
* Senior:
  * A member >= 55 years old
  * Handicap > 7
* Open:
  * Everyone that doesn't fit the two criterion from the Senior
* Handicaps range from -2 to +26

Inputs:
* List of lists -> contains to items
  * Each list = memeber info
  * first index = person's age
  * second index = person's handicap
* Any validations?

Outputs:
* List
  * Same length as the input
  * Each element will denote: Senior or Open


Test Cases and Examples (E):

openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]) // ['Open', 'Senior', 'Open', 'Senior']
openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]]) // ['Open', 'Open', 'Open', 'Open']
openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]) // ['Senior', 'Open', 'Open', 'Open']


Data Structures (D):

* Arrays 

Algorithms:

1. Create a new array called "membershipArray"
2. Loop over the input (list of lists)
  a. For each loop create a variable called age list[0]
  b. For each loop create a variable called handicap list[1]
  c. Then if age >= 55 and handicap > 7 - senior -> push to "membershipArray"
  d. Else open -> push to "membershipArray"
3. Return membershipArray

*/


const openOrSenior = (members) => {
  let membershipArray = [];
  members.forEach(member => {
    let age = member[0];
    let handicap = member[1];

    if (age >= 55 && handicap > 7) {
      membershipArray.push('Senior');
    } else {
      membershipArray.push('Open');
    }
  });

  return membershipArray;
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])); // ['Open', 'Senior', 'Open', 'Senior']
console.log(openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]])); // ['Open', 'Open', 'Open', 'Open']
console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]])); // ['Senior', 'Open', 'Open', 'Open']
