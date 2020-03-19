
/*

Inputs: two arrays
Output: order list in ascending order (contains product of all combinations from the inputted arrays)

*/

function multiplyAllPairs(arr1, arr2) {
    let newArr = [];
    for(let i = 0; i < arr1.length; i += 1) {
        for (let j = 0; j < arr2.length; j += 1) {
            newArr.push(arr1[i] * arr2[j]);
        }
    }

    return newArr.sort((a, b) => a - b); // first checking the loop logic works
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

/*

Sort functions

Why does (a, b) => a - b work?

This compares two items and returns a negative number if "a" is smaller than b according to the sort criteria or zero if the order of a and b in the array should not be changed. 
*/

/*

Using for each:

function multiplyAllPairs(array1, array2) {
  let products = [];
  array1.forEach(item1 => {
    array2.forEach(item2 => {
      products.push(item1 * item2);
    });
  });
  return products.sort((item1, item2) => item1 - item2);
}

*/