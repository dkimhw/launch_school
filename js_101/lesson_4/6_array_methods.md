
## Array Methods

JavaScript provides easier way to work with arrays with built-in methods.


### forEach

```javascript
[1, 2, 3].forEach(number => {
  console.log(number);
});
```

`forEach` is a method that is called on the array. The method takes a function as an argument - the `=> {}` component. Here, we use an arrow function for its simplicity. A function provided to another function/method as an argument is often called a callback.

How does the callback know what `number` is? For each iteration, `forEach` sends the value of the current element to the callback in the form of an argument - in this callback, the argument is `number` - it represents the value of the current element in the array.

`forEach` also passes in index position of the element:

```javascript
[1, 2, 3].forEach((number, idx) => {
  console.log(`${idx}: ${number}`);
});

// logs
// 0: 1
// 1: 2
// 2: 3
```

#### forEach with Strings

We can leverage `split` function to loop through a string:

```javascript
'abcd'.split('').forEach(char => {
  console.log(char);
});
// logs
// a
// b
// c
// d
```

#### forEach with Objects

Looping over values using `values` function:

```javascript
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let produceValues = Object.values(produce);

produceValues.forEach(value => {
  console.log(value);
});
// logs
// Fruit
// Vegetable
// Fruit
// Vegetable
```

Looping over keys:

```javascript
let produceKeys = Object.keys(produce);
produceKeys.forEach(key => {
  console.log(key);
});
// logs
// apple
// carrot
// pear
// brococcoli
```

Looping over keys and values:

```javascript
let produceKeyValues = Object.entries(produce);
// produceKeyValues contains:
//   [['apple', 'Fruit'],
//    ['carrot', 'Vegetable'],
//    ['pear', 'Fruit'],
//    ['broccoli', 'Vegetable']]

produceKeyValues.forEach(keyValue => {
  let [key, value] = keyValue;

  console.log(`${key} is a ${value}`);
});
// logs:
// apple is a Fruit
// carrot is a Vegetable
// pear is a Fruit
// broccoli is a Vegetable
```

```javascript
let [key, value] = keyValue;
```
* This is array destructuring assignment. With this, we can assign elements of the array to multiple variables by wrapping the variable names in the brackets. 
* The first element gets assigned to the first variable - the second element gets assigned to the second variable.

One thing to note is that `forEach` returns `undefined`:

```javascript
let val = [1, 2, 3].forEach(num => console.log(num))
val // undefined
```

* In JavaScript, methods must always return something - even if it's `undefined`. The return value of `forEach` is not important since the sole purpose is iteration.


### filter

We frequently want to filter certain elements from an array:

```javascript
let oddNumbers = [1, 2, 3].filter(num => {
  return num % 2 === 1;
});

oddNumbers; // => [1, 3]
```

* `filter` examines the return values of the callback on each iteration. It determines the truthiness of the return value.
* There is only one thing that `filter` cares about concerning the return value - whether it is truthy or falsy. Note that truthy and falsy are not the same as true and false.
* JavaScript treats six values as falsy: `undefined`, `null`, `NaN`, `0`, `''`, and `false`. All other values are truthy values

#### Important:

When working with `filter` - you must pay attention to the callback's return value. For example, if we write a callback with the curly braces and forget to write an explicit `return` - we will get an empty array.

```javascript
[1, 2, 3].filter(num => {
    num + 1;
})
[]
```

#### Objects

Example of using filter on objects:

```javascript
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let produceKeyValues = Object.entries(produce);
let onlyVegetablesArr = produceKeyValues.filter(keyValue => {
  let [key, value] = keyValue;
  return value === 'Vegetable';
});

let onlyVegetables = {};

onlyVegetablesArr.forEach(keyValue => {
  let [key, value] = keyValue;
  onlyVegetables[key] = value;
});

onlyVegetables; // => {carrot: 'Vegetable', broccoli: 'Vegetable'}
```

But it's much easier when we use `forEach`:

```javascript
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let produceKeyValues = Object.entries(produce);
let onlyVegetables = {};

produceKeyValues.forEach(keyValue => {
  let [key, value] = keyValue;
  if (value === 'Vegetable') {
    onlyVegetables[key] = value;
  }
});

onlyVegetables; // => {carrot: 'Vegetable', broccoli: 'Vegetable'}
```

### map

`map` uses the return value of the callback to perform transformation instead of selection. Then, `map` returns the new transformed array.

```javascript
[1, 2, 3].map(num => num * 2); // [ 2, 4, 6 ]
```

```javascript
[1, 2, 3].map(num => num % 2 === 1) // [ true, false, true ]
```

```javascript
[1, 2, 3].map(num => {
  num * 2;
}); // [ undefined, undefined, undefined ]
```
* Callback will always be `undefined` since it's a callback with curly braces and **without an explicit return value**.

#### filter and map with Strings

Use `split` and `join` to process strings using `filter` or `map` functions

```javascript
let str = "What's up, Doc?";
str.split('')
   .filter(char => 'aeiou'.includes(char.toLowerCase()))
   .join('');
// => 'auo'
```

### some

Examples:

```javascript
[1, 2, 3].some(num => num > 2) // true
[1, 2, 3].some(num => num > 3) // false
```

This function - looks at the truthiness of the callback's return value to determine its own return value. **If the callback function returns a truthy value for any element in the collection, then the `some` method will return true**.


Use `Object.keys`, `Object.values`, `Object.entries` with `some`:

```javascript
let animals = { a: 'ant', b: 'bear', c: 'cat' };
Object.values(animals).some(animalName => animalName.length > 4);
// => false

Object.values(animals).some(animalName => animalName.length > 3);
// => true
```

### every

Examples:

```javascript
[1, 2, 3].every(num => num > 2) // false
[3, 4, 5].every(num => num > 2) // true
```

Looks at the truthiness of the callback's return value but the method only returns true if the callback's return vaue in every iteration is truthy.

With Objects:

```javascript
let animals = { a: 'ant', b: 'bear', c: 'cat' };
Object.values(animals).every(animalName => animalName.length > 2);
//  => true
```

### find

The `find` method takes a callback function as an argument and returns the first element for which the callback function returns a truthy value:


```javascript
[2, 1, 4, 3, 5].find(num => num > 2) // 4
```

If the callback function doesn't return a truthy value for any of the elements:

```javascript
[2, 1, 4, 3, 5].find(num => num < 1) // undefined
```

### findIndex

Same as `find` except returns the index.

Example:

```javascript
[2, 1, 4, 3, 5].findIndex(num => num > 2) // 2
```

When not found:

```javascript
[2, 1, 4, 3, 5].findIndex(num => num < 1) // -1
```

### reverse

`reverse` - self-explanatory. Mutates the original array.

```javascript
let nums = [1, 2, 3];
let reversedNums = nums.slice().reverse(); // to not mutuate the original array

reversedNums; // => [3, 2, 1]
nums;         // => [1, 2, 3]
```

### includes

Unlike the methods we have described so far - `includes` doesn't take a callback argument. Instead, it takes an argument that it looks for in the array used to call it: it returns `true` when the argument exists in the array and `false` when it doesn't. 

```javascript
[2, 1, 3].includes(1) // true

[2, 1, 3].includes(5) // false
```

Objects & `includes`:

```javascript
let obj = {a: 'apple', b: 'banana', c: 'custard'};
Object.keys(obj).includes('c'); // => true
Object.keys(obj).includes('f'); // => false
```

hasOwnProperty:

```javascript
let obj = {a: 'apple', b: 'banana', c: 'custard'};
obj.hasOwnProperty('c'); // => true
obj.hasOwnProperty('f'); // => false
```

Some weird behavior to look out for with objects:

```javascript
let arr = ['a', 'b', {c: 'foo'}];
arr.includes({c: 'foo'}); // => false
```

```javascript
let obj = {c: 'foo'};
let arr = ['a', 'b', obj];

arr.includes(obj); // => true
```

### Array Keys

Empty Array:

```javascript
let arr = [];
console.log(arr);              // []
console.log(arr.length);       // 0
console.log(Object.keys(arr))  // []
```

With Elements:

```javascript
let arr = [2, 4, 6];
console.log(arr);              // [2, 4, 6]
console.log(arr.length);       // 3
console.log(Object.keys(arr))  // ['0', '1', '2']
// These string values correspond to the indexes of the array
```

We can add properties to arrays that are **not** elements of the array. All we have to do is use a key that is not an unsigned integer:

```javascript
let arr = [2, 4, 6]
arr[-3] = 5;
arr['foo'] = 'a';
console.log(arr);              // [ 2, 4, 6, '-3': 5, foo: 'a' ]
console.log(arr.length);       // 3
console.log(Object.keys(arr))  // [ '0', '1', '2', '-3', 'foo' ]
arr.map(x => x + 1);           // [ 3, 5, 7 ]
```

* Notice how we are adding two elements to the array - one with an "index" of `-3`and one with an index of `'foo'`. 
* Both of these "elements" show up when we log `arr` - however the length of the array is till `3`. 
* We also see that `map` ignores the non-element values. All Array methods ignore properties that are not elements.

This weird behavior leads to ambiguity on whether an array is "empty":

```javascript
let arr = [];
arr[-3] = 5;
arr['foo'] = 'a';

// Is arr empty?
console.log(arr.length);       // 0                Yes
console.log(Object.keys(arr))  // [ '-3', 'foo' ]  No
```

* No right answer - you have to decide when writing the code


### Sparse Arrays

Arrays are "sparse". The number of elements in an array is not necessarily the same as its length. There can be gaps in the array. 

One way to create these gaps is the following:

```javascript
let arr = [2, 4, 6];
arr.length = 5;
console.log(arr);              // [2, 4, 6, <2 empty items> ]
console.log(arr.length);       // 5
console.log(Object.keys(arr))  // ['0', '1', '2']
```

* Array now has 5 elements but two of them are shown as **empty items**. The empty items have no value at all. In fact, those elements do not exist as you can see on the last line.

If you try to access either of the empty items - you get `undefined`:

```javascript
console.log(arr[3]);           // undefined
```

But it doesn't mean that the value is `undefined` - value is not set at all. Let's see what happens when we assign one of the empty items as `undefined`:

```javascript
let arr = [2, 4, 6];
arr.length = 5;
arr[4] = undefined
console.log(arr);              // [2, 4, 6, <1 empty item>, undefined ]
console.log(arr.length);       // 5
console.log(Object.keys(arr))  // ['0', '1', '2', '4']
```

* The `arr[4]` is now `undefined` - the element now exists

This behavior again makes it difficult to understand what arrays are empty and which are not:

```javascript
let arr = [];
arr.length = 3;

// Is arr empty?
console.log(arr.length);       // 3      No
console.log(Object.keys(arr))  // []     Yes
```

* Do determine what is "empty"? - we need to determine what we mean by an empty array. If we want to include the gaps, then we can use `length` to determine whether the array is empty. 
* If we need to ignore the gaps - then we must look at the object keys to learn whether the array is empty - keeping in mind that some of the object keys may not be unsigned integers
* Again - there is no one right answer here - you have to decide what empty means. 