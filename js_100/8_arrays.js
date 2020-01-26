
/*
Question 1
*/
console.log("Question 1:\n");

let array1 = [1, 2, undefined, 4];
console.log(array1.length); // 4

let array2 = [1];
array2.length = 5;
console.log(array2.length); // 5

let array3 = [];
array3[-1] = [1];
console.log(array3.length); // 0

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;
console.log(array4.length); // 3

let array5 = [];
array5[100] = 3; // this is accessing an array position
console.log(array5.length); // 101
console.log("\n");

/*
Question 2
*/
console.log("Question 2:\n");

let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

console.log(myArray.filter(num => num % 2 === 0));
console.log("\n");

/*
Question 3
*/

console.log("Question 3:\n");

let myArray2 = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray2.forEach(function(numArr) {
  numArr.forEach(function(num) {
    if (num % 2 === 0) {
      console.log(num);
    }
  })
})

/*
Question 4
*/

console.log("Question 4:\n");

let fourArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

console.log(fourArray.map(function(num) {
  if (num % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}));

/*
Question 5
*/

console.log("Question 5:\n");
let fiveArray = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

// Assumes the filter
function filterInteger(i) {
  return i.filter(e => Number.isInteger(e));
}

console.log(filterInteger(fiveArray) + "\n");

/*
Question 6
*/

console.log("Question 6:\n")
let sixArr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

const oddLengths = (arr) => {
  let lenArr = arr.map(i => i.length);
  return lenArr.filter(num => num % 2 != 0);
}

console.log(oddLengths(sixArr) + "\n");

/*
Question 7
*/

console.log("Question 7:\n")

function withoutLoopCheckThree(arr) {
  return arr.includes(3);
}

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(withoutLoopCheckThree(numbers1));
console.log(withoutLoopCheckThree(numbers2));
console.log(withoutLoopCheckThree(numbers3));
console.log("\n");

/*
Question 8
*/

console.log("Question 8:\n");
let eightArr = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];

console.log(eightArr[1][2]);