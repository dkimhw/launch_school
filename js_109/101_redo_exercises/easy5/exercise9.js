
/*

Problem:
Input:
  - Array
Output:
  - undefined
  - Outputs to console the number of occurrences of each element
    in input arr.

Example:

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

Algorithm:

Step 1: Loop through the array & store each element value as a key of
an object. If the key exists, increment by 1. If not, add key and
value = 1.

Step 2: Loop through the object and output to console the occurrences

*/

let countOccurrences = (arr) => {
  let occurrences = {};

  arr.forEach(el => {
    if (occurrences.hasOwnProperty(el)) {
      occurrences[el] += 1;
    } else {
      occurrences[el] = 1;
    }
  });

  Object.entries(occurrences).forEach(el => {
    console.log(`${el[0]} => ${el[1]}`);
  });
};

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);
