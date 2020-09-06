

/*

PEDAC:

Understand the problem (p):

1. Explicit reqs

* Input: takes in a string
* Output: string
  * the outputted string should be a kebab case
  * Example. kebabize('camelsHaveThreeHumps') // camels-have-three-humps

* Only include lowercase letters (and the dashes) so remove characters like digits

2. Implicit reqs

* "Jqal" -> "jqal"
* "333Jqal"

Test Cases / Examples (E):

console.log(kebabize('camelsHaveThreeHumps')); // camels-have-three-humps
console.log(kebabize('camelsHave3Humps')); // camels-have-humps


Data Structures (D):

Arrays

Algorithms (A):

1. Initialize a variable and create an array by individual characters split('') 
2. Create a new empty array
3. Loop over this array:
  * On each iteration check for upper case
  * If it is uppercase ("H") -> then add to the new array with "-h" else just add the letter
  * If it is not letter -> remove from the array. 
4. Return the variable with .join('')



*/

function kebabize(str) {
  let strArr = str.split('').filter(chr => /[a-z]/i.test(chr));
  let newStrArr = [];
  let counter = 0;

  strArr.forEach(chr => {
    if (chr === chr.toUpperCase()) {
      if (counter === 0) {
        newStrArr.push(chr.toLowerCase());
      } else {
        newStrArr.push("-", chr.toLowerCase());
      }
    } else {
      newStrArr.push(chr);
    } 

    counter++;
  });

  return newStrArr.join('');
}

console.log(kebabize('camelsHaveThreeHumps')); // camels-have-three-humps
console.log(kebabize('camelsHave3Humps')); // camels-have-humps
