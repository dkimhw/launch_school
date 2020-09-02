
/*

PEDAC:

Understand the problem (p):

1. Explicit req
  * Input
    * List of integer arrays - so something like [[1, 2], [3, 4]]
    * The first element of the integer array: people who get on
    * The second element of the integer array: people who get off
  * Output
    * Integer - Return the number of people who are still in the bus on the last stop


Examples / Test Cases (E):

console.log(number([[10,0],[3,5],[5,8]])) // ,5);
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])) // ,17);
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]))  // ,21);

Data Structures (D):

Nested arrays


Algorithms (A):

1. Initialize a variable called - `numPeopleOnBus`
2. Loop over the input nested array - and in each iteration do:
  * We get a list for each element. The first element adds, second element subtracts
  * `numPeopleOnBus` + first element
  * `numPeopleOnBUs` - second element

*/

function number(busStops) {
  let numPeopleOnBus = 0;

  busStops.forEach(arr => {
    numPeopleOnBus += arr[0];
    numPeopleOnBus -= arr[1];
  });

  return numPeopleOnBus;
}

console.log(number([[10,0],[3,5],[5,8]])) // ,5);
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])) // ,17);
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]))  // ,21);
