

/*

Problem:
- Input:
  * Array of integers (always between 0 and 19)
- Output:
  * Sort the array by integers on the English word and not by the integer
  * So zero for example if sorted by integer is first right Ascending order
  * But it's the last since starts with "zero"
  * Returns sorted array based on the word of the integers

// returns an array of those integers sorted based on the English word for each number:

Example:

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

Algorithm:

Step 1: Create a mapping between the integer and the words
Step 2: Create an array of words based on the mapping
Step 3: Sort the array of words
Step 4: Map the words to integers
Step 5: Return the integer


Total Complexity = O(n)

*/

let alphabeticNumberSort = (arrInt) => {
  const numToWord = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen', 
    19: 'nineteen'
  }

  let arrWord = arrInt.map(el => String(el)).map(el => numToWord[el]);
  arrWord.sort();

  let reverseMap =  {};
  Object.entries(numToWord).forEach(arr => {
    reverseMap[arr[1]] = arr[0];
  });

  return arrWord.map(el => Number(reverseMap[el]));
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]






