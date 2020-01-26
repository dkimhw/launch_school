
console.log("Question 1: \n");

console.log(`false || (true && false); is ${false} - Answer: ${false || (true && false)}`);
console.log(`true || (1 + 2); is ${true} - Answer: ${true || (1 + 2)}`);
// Returns the truthiness so since 3 came first it will return 3
console.log(`(1 + 2) || true; is ${3} - Answer: ${(1 + 2) || true}`); 
// Returns the truthiness so since 3 came first it will return 3
console.log(`true && (1 + 2); is ${3} - Answer: ${true && (1 + 2)}`); 
console.log(`false && (1 + 2); is ${false} - Answer: ${false && (1 + 2)}`);
console.log(`(1 + 2) && true; is ${true} - Answer: ${(1 + 2) && true}`);
console.log(`(32 * 4) >= 129; is ${false} - Answer: ${(32 * 4) >= 129}`);
console.log(`false !== !true; is ${false} - Answer: ${false !== !true}`);
console.log(`true === 4; is ${false} - Answer: ${true === 4}`);
console.log(`false === (847 === '847'); is ${true} - Answer: ${false === (847 === '847')}`)
console.log(`false === (847 == '847'); is ${false} - Answer: ${false === (847 == '847')}`);
console.log(`(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; is ${true} - Answer: ${(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false}`);
console.log("\n");

console.log("Question 2: \n");

// Function that checks whether an integer is odd or even
let evenOrOdd = (int) => {
  if (int % 2 === 0) {
    console.log('even');   
  } else {
    console.log('odd');
  }
}

evenOrOdd(3);
evenOrOdd(4);
console.log("\n");


console.log("Question 3: \n");

// Function that checks whether an integer is odd or even
// Has validation checks
function isNumber(int) {
  if (typeof(int) === 'number') {
    return true;
  } else {
    return false;
  }
}

let evenOrOdd2 = (int) => { 
  if (!isNumber(int)) {
    console.log('Not a number');
  } else if (int % 2 === 0) {
    console.log('even');   
  } else {
    console.log('odd');
  }
}

evenOrOdd2('y');
evenOrOdd2(10);
console.log("\n");

console.log("Question 4: \n");

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

console.log(`I think it will print: "Product2", "Product3" `);
barCodeScanner('113'); // even the default gets hit by the fall through
console.log("\n");


console.log("Question 5 \n");

refactoredFunction = `
if (foo()) {
  return 'bar';
} else {
  return qux();
}
`
console.log(refactoredFunction);
console.log('\n');


console.log("Question 6 \n");
console.log(`It prints 'Not Empty'`);

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
   console.log('Empty');
  }
}

/*
Although the array is empty (no elements; lenght = 0), the important point is that it is not falsy!
*/
console.log(`Checking answer: \n`);
isArrayEmpty([]);



console.log("Question 7: \n");

let upperCaseTenCharUp = (string) => {
  if(string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

console.log(upperCaseTenCharUp('hello world'));
console.log(upperCaseTenCharUp('goodbye'));


console.log("Question 8: \n");

function numberRange(num) {
  if (num >= 0 && num <= 50) {
    console.log(`${num} is between 0 and 50`);
  } else if (num >= 51 && num <= 100) {
    console.log(`${num} is between 51 and 100`);
  } else if (num >= 100) {
    console.log(`${num} is greater than 100`);
  } else if (num < 0) {
    console.log(`${num} is less than 0`);
  }
}

numberRange(25);   // '25 is between 0 and 50'
numberRange(75);   // '75 is between 51 and 100'
numberRange(125);  // '125 is greater than 100'
numberRange(-25);  // '-25 is less than 0'