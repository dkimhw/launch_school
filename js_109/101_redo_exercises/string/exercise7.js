
/*

Problem:

Input:
- String

Output:
- String
- Ignore non-alpha characters
- Starting with uppercase, if it's uppercase, leave it - else make it upper case
- Then the next alpha charac, if it's uppercase, lowercase it else leave it

Example:

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

Algorithm:

Step 1: Create currentIteration to track whether it should
  be uppercase or lowercase

Step 2: Loop through each characters starting at 0 `idx`

Step 3: For each idx, check the currentIteration
  if it's uppercase - use uppercase logic mentioned above
  if it's lowercase - use lowercase logic

Step 4: Return new string

*/

let isUpperCase = (char) => {
  return char === char.toUpperCase() && /[a-z]/i.test(char);
};

let isLowerCase = (char) => {
  return char === char.toLowerCase() && /[a-z]/i.test(char);
};

let staggeredCase = (str) => {
  let currentIteration = 'uppercase';
  let charArr = str.split('');

  for (let idx = 0; idx < str.length; idx += 1) {
    let char = charArr[idx];
    if (currentIteration === 'uppercase' && /[a-z]/i.test(char)) {
      if (!isUpperCase(char)) {
        charArr[idx] = char.toUpperCase();
      }

      currentIteration = 'lowercase';
    } else if (currentIteration === 'lowercase' && /[a-z]/i.test(char)) {
      if (!isLowerCase(char)) {
        charArr[idx] = char.toLowerCase();
      }

      currentIteration = 'uppercase';
    }
  }

  return charArr.join('');
};

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);