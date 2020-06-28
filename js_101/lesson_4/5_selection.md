
## Selection and Transformation

What is selection?
* Selection is picking some elements out of a collection depending on one or more criterion. 

What is transformation?
* Transformation refers to manipulating every element in the collection.


### Using Loops to Select and Transform

Example of selection:

```javascript
let numbers = [1, 3, 9, 11, 1, 4, 1];
let ones = [];

for (let counter = 0; counter < numbers.length; counter++) {
  let currentNum = numbers[counter];

  if (currentNum === 1) {
    ones.push(currentNum); // appends currentNum to the ones array
  }
}

ones; // => [1, 1, 1]
```

* The `if` condition determines which values are selected and which are ignored. This is the `selection criterion`. 


Example of transformation:

```javascript
let fruits = ['apple', 'banana', 'pear'];
let transformedElements = [];
let counter = 0;

while (counter < fruits.length) {
  let currentElement = fruits[counter];

  transformedElements.push(currentElement + 's'); // appends transformed string into array
  counter += 1;
}

transformedElements; // => ['apples', 'bananas', 'pears']
```

* When performing a transformation - it's always important to pay attention to whether the original collection is mutated or if a new collection is returned. 


### Extracting to Functions

Most of the time - selecting or transforming a collection is a specific "action" - select all odd numbers for example. That naturally lends the specific action being extracted into fiunctions.

**Selction Example**:

```javascript
function selectVowels(str) {
  let selectedChars = '';

  for (let counter = 0; counter < str.length; counter += 1) {
    let currentChar = str[counter];

    if ('aeiouAEIOU'.includes(currentChar)) {
      selectedChars += currentChar;
    }
  }

  return selectedChars;
}
```

```javascript

function selectFruit(produceList) {
  let produceKeys = Object.keys(produceList);
  let selectedFruits = {};

  for (let counter = 0; counter < produceKeys.length; counter++) {
    let currentKey = produceKeys[counter];
    let currentValue = produceList[currentKey];

    if (currentValue === 'Fruit') {
      selectedFruits[currentKey] = currentValue;
    }
  }

  return selectedFruits;
}

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }
```
* Original argument - `produceList` is not mutated
* A new object is returned by the function 

**Transformation Examples:**

The function below multiplies each element in an array by 2:

```javascript
function doubleNumbers(numbers) {
  let doubledNums = [];
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    doubledNums.push(currentNum * 2);

    counter += 1;
  }

  return doubledNums;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
doubleNumbers(myNumbers); // => [2, 8, 6, 14, 4, 12]
myNumbers;                // => [1, 4, 3, 7, 2, 6]
```

### More Flexible Functions

Suppose we wanted to select generic product types - we want to be able to specify whether we are interested in selecting fruits or vegetables or some other kind of produce. One way to build such a function:

```javascript
function selectType(produceList, selectionCriterion) {
  let produceKeys = Object.keys(produceList);
  let selectedItems = {};

  for (let counter = 0; counter < produceKeys.length; counter++) {
    let currentKey = produceKeys[counter];
    let currentValue = produceList[currentKey];

    // used to be (currentValue === 'Fruit')
    if (currentValue === selectionCriterion) {
      selectedItems[currentKey] = currentValue;
    }
  }

  return selectedItems;
}


let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

selectType(produce, 'Fruit');     // => {apple: 'Fruit', pear: 'Fruit'}
selectType(produce, 'Vegetable'); // => {carrot: 'Vegetable', broccoli: 'Vegetable'}
selectType(produce, 'Meat');      // => {}
```
