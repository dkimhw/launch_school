
/*

PEDAC

Understand the problem (p):

1. Input: Integer
2. Output: Array
  * Start at one * but if tower level is 3 --> the string quote is length = 5
  * Add two on the sides at each level


Test Case / Examples (E):
[
  '  *  ', 
  ' *** ', 
  '*****'
]

console.log(towerBuilder(1)); // ["*"]);
console.log(towerBuilder(2)); // [" * ","***"]);
console.log(towerBuilder(3)); //["  *  "," *** ","*****"]);

Data Structures (D):

Array

Algorithms (A):

1. Initialize a variable called elementStringLength
  * 1 + (towerlength - 1) * 2
2. Initialize a variable called tower = []
3. Intialize a variable starsToAdd
4. Use the input (tower length) to determine how many times to loop- then within each loop
  * Determine how much padding to add to right and left of the stars we need to add
    * Padding logic:
      * For each iteration, know what starsToAdd is
      * Subtract (elementStringLength - starsToadd ) / 2 is how much padding to add on either side
  * Incremen `starsToAdd` by 2
5. Return `tower`

*/

function towerBuilder(nFloors) {
  let elementStringLength = 1 + ((nFloors - 1) * 2);
  let tower = []
  let starsToAdd = 1;

  for (let i = 0; i < nFloors; i++) {
    let padding = (elementStringLength - starsToAdd) / 2;
    let floor = ' '.repeat(padding) + '*'.repeat(starsToAdd) + ' '.repeat(padding);
    tower.push(floor);
    starsToAdd += 2;
  }

  return tower;
}

console.log(towerBuilder(1)); // ["*"]);
console.log(towerBuilder(2)); // [" * ","***"]);
console.log(towerBuilder(3)); //["  *  "," *** ","*****"]);