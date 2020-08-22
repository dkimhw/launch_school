/*

Quick PEDAC Process

1. Understand the problem

Definition: isogram -> word that has no repeating letters (consecutive or non-consecutive)

Test cases:

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case

2. Input

String (ask if validation required - i.e. if not string return "null"? )
  * Only includes letters --> do we need to validate this
  * Assume that if given empty string
  
  So: isIsogram("") --> true

3. Output

boolean value (true or false whether the inputted string is isogram or not)


4. Data Structures

Array - because it looks like I am going to need some way to loop over each character of the string

5. Implementation (one way - high level)

1. We can first initialize an empty array called letterChecked. 
2. Then we split('') the inputted string. Loop over that splitted string, we check letterChecked array to see if each element during the loop exists in letterChecked
3. If not in letterChecked - add to letterChecked and continue looping until the end
4. If the element in the current loop is in letterChecked - break the loop and return false 
5. If the function gets out of the loop without returning false, return true

Edge cases I need to implement or keep in mind:

1. "" --> true

*/

function isIsogram(word) {
  if (word.length === 0) {
    return true;
  }

  let letterChecked = [];
  let wordArr = word.toLowerCase().split('');
  for (let index = 0; index < wordArr.length; index++) {
    currentLetter = wordArr[index];

    if (letterChecked.includes(currentLetter)) {
      return false;
    } else {
      letterChecked.push(currentLetter);
    }
  }

  return true;
}

console.log(isIsogram("")); // true
console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("aba")); // false
console.log(isIsogram("moOse")); // false // -- ignore letter case
