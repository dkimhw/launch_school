

## Arrays

### What is an Array?

* Order list of elements; each element has a unique index number that you can use to access the element
* Zero-indexed
* Can contain different data types including objects
* Length is the highest position that has a value plus 1
* Access:

  ```javascript
  let myArray = ['a', 'b', 'c'];
  myArray[0];
  ```

* Access last element:

  ```javascript
  let myArray = ['a', 'b', 'c'];
  myArray[myArray.length - 1];
  ```

### Modifying Arrays

#### Replacing and Adding Elements With []

* Replacing:

```javascript
let arr = ['david', 'patricia', 'paul'];
arr[2] = 'grace'; // replaces paul with grace

console.log(arr);
```

* Adding:

```javascript
let arr = ['david', 'patricia', 'paul'];
arr[arr.length] = 'grace'

console.log(arr);
```

#### Adding Elements With `push`

* Adds one or more elements to the end of an array (mutates the arr)
* Returns the array's new length (integer) - what it returns is not an array

```javascript
let arr = ['david', 'patricia', 'paul'];
let x = arr.push('grace');

console.log(arr); // ['david', 'patricia', 'paul', 'grace'];
console.log(x); // 4
```

#### Adding Elements With `concat`

* Doesn't mutate; similar to `push` in that it adds to elements. 
* Returns a brand new array (original array plus new elements).

```javascript
let arr = [ 1, 4, 3, 10, 'a', null, 'xyz', 42, 'abc' ];
let newArr = arr.concat(50); // [ 1, 4, 3, 10, 'a', null, 'xyz', 42, 'abc', 50];

console.log(newArr);
```

#### Removing Elements With `pop`

* Mutates (removes specified element)
* Returns the removed value

```javascript
let arr = [ 1, 4, 3, 10, 'a', null, 'xyz', 42, 'abc' ];
let lastValue = arr.pop(); // returns 'xyz'

console.log(arr); // [ 1, 4, 3, 10, 'a', null, 'xyz', 42]
console.log(lastValue); // 'abc'
```

#### Removing Elements With `splice`

* Lets you remove one or more elements from an array
* Mutates the original array
* Returns a new array that contains the deleted elements

```javascript
let arr = [ 1, 4, 3, 10, 'a', null, 'xyz', 42, 'abc' ];
let deletedElements = arr.splice(3, 2); // deletes two elements starting at position 3

console.log(arr); // [ 1, 4, 3, null, 'xyz', 42, 'abc' ];
console.log(deletedElements); // [ 10, 'a']
```

#### Iterating With `forEach`

* `forEach` iterates over the elements in the array and invokes the callback function for each element. It passes the element's value tot he callback function.
* A callback function is a function that you pass to another function as an argument. The called function subsequently invokes the callback function at certain times while it runs.

```javascript
let array = [1, 2, 3];

array.forEach(function (num) {
  console.log(num);
});

// Outputs:
// 1
// 2
// 3
```

The code above invokes the callback function once for each element in the array. 

#### Transforming Arrays With `map`

* `forEach` works best when you want to use the values of an array's element. 
*  What if you wanted to create a new array based on some operation on the original contents of the array?

With `forEach`:

```javascript
let numbers = [1, 2, 3, 4];
let squares = [];
numbers.forEach(num => squares.push(num * num));
console.log(squares);
```

  * This works well enough but the callback now has a side effect. It modifies the `squares` variable, which is not part of the callback function. Side effects can sometimes lead to trouble.

Consider what happens if you ran `forEach` again after running the above code:

```javascript
numbers.forEach(num => squares.push(num * num));
console.log(squares);
```

  * There is now two copies of the squares since we forgot to reset squares to an empty array

More clean way to deal with situations like this is with `map`:

```javascript
let numbers = [1, 2, 3, 4];
let squares = numbers.map(num => num * num);
squares // [1, 4, 9, 16]

squares = numbers.map(num => num * num);
squares // [1, 4, 9, 16]
```
  
  * `map` returns a new array that contains one element for each element in `numbers`. With each element set to the return value of the callback. This code has no side effects. The callback does not update squares - the return value of the `map` does that
  * We do not have to reset the variable if we rerun the same code

Differences:
* `forEach` performs simple iteration and returns `undefined`
* `map` transforms an array's elements and returns a new array with the transformed values

#### Filtering Arrays with `filter`

* Elements in an array when a condition is applied evaluates to a true will be returned in a new array.

```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2];
numbers.filter(num => num > 4);

numbers // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2]
```

* Does not mutate the caller
* `filter` iterates over the elements of the array. During each iteration, it invokes the callback function, using the value of the current element as an argument. If the callback returns a truthy value, `filter` appends the element's value to a new array.
* Returns the array of selected elements


### Arrays Can Be Odd

* If you change an array's length property to a new, larger value, the array expands to the new size. The new elements get initialized to `undefined`.

```javascript
arr = [1, 2, 3];
arr.length;

arr.length = 4;
arr; // [ 1, 2, 3, <1 empty item> ]
```

* If you change an array's length property to a new smaller value, the array gets truncated

```javascript
arr = [1, 2, 3];
arr.length;

arr.length = 2;
arr // [1, 2]
```

* You can create array "elements" with indexes that use negative or non-integer values:

```javascript
arr = [1, 2, 3];
arr[-3] = 4;
arr; // [1, 2, 3, '-3': 4]

arr[3.14] = 'pi';
arr; // [ 1, 2, 3, '-3': 4, '3.14': 'pi' ]

arr.cat = 'Fluffy';
arr; // [ 1, 2, 3, '-3': 4, '3.14': 'pi', cat: 'Fluffy' ]

arr.length // they don't count towards the length of the array
```
  * Not sure if I understand this behavior
  * These elements are not true elements. They are properties on the array object.
  * They do not count towards the length of the array


### Nested Arrays

* Array elements can contain other arrays:

```javascript
let teams = [['Joe', 'Jennifer'], ['Frank', 'Molly'], ['Dan', 'Sarah']]

teams[2]; // ['Dan', 'Sarah']
teams[2][0]; // 'Dan'
```

### Array Equality

JavaScript tests memory location for equality when comparing to array objects. This rule holds for JavasScript objects in general. Remember Java, the `.equals` method checks for memory location equality. If you really want to test equality of the objects you have to implement your own `.equals`.

```javascript
let checkArrayEquality = [1, 2, 3] === [1, 2, 3];
// these two arrays are not the same. They happen to contain the same values. They occupy different memory location.
console.log(checkArrayEquality); // false

let a = [1, 2, 3];
let b = a;
let checkArrayEquality2 = b === a;
console.log(checkArrayEquality2); // true
```
  * Assigning `a` to `b` does not make a new array/object. It merely makes `b` reference the same array as `a`.

Like in Java you must create your own equality logic:

```javascript
function arraysEqual(arr1, arr2) {
  // You can write JS code like this if there is only the return statement
  // Also if they are not the same length they are not the same so this is straightforward.
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

console.log(arraysEqual([1, 2, 3], [1, 2, 3])); // logs true
console.log(arraysEqual([1, 2, 3], [4, 5, 6])); // logs false
console.log(arraysEqual([1, 2, 3], [1, 2, 3, 4])); // logs false
```

Work only if it's with primities like numbers - if it contains an object:

```javascript
console.log(arraysEqual([1, 2, [3, 4], 5], [1, 2, [3, 4], 5]));
```

### Common Array Methods

[https://launchschool.com/books/javascript/read/arrays#commonarraymethods]

#### `includes`

* Determines whether an array includes a given element:

```javascript
let a = [1, 2, 3, 4, 5];
a.includes(2);
a.includes(10);
```

* `includes` uses `===` to compare elements of the array. We cannot use `includes` to check for the existence of a nested array or an object:

```javascript
let a = [1, 2, [3, 4], 5];
a.includes([3, 4]);
```

#### `sort`

* Returns a sorted array
* Also mutates the original array

```javascript
let a = [5, 3, 8, 2, 4, 1];
console.log(a.sort()); // [ 1, 2, 3, 4, 5, 8 ]
console.log(a); // [ 1, 2, 3, 4, 5, 8 ]
```

#### `slice`

* Extracts and returns a portion of the array.
* Two arguments: first is the index at which the extraction begins while the second is where the extraction ends (returns elements up to but excluding that index)
* If the second argument is not given - returns the rest of the array
* `slice` with no arguments returns a copy of the entire array - it returns a new array with the same elements as the original. Useful when you need to use a destructive method on an array that you don't want to modifiy

```javascript
let fruits = ['mango', 'orange', 'banana', 'pear', 'apple'];

console.log(fruits.slice(1, 3)); // ['orange', 'banana']
console.log(fruits.slice(2)); // ['banana', 'pear', 'apple']
console.log(fruits.slice()); // ['mango', 'orange', 'banana', 'pear', 'apple']
```

#### `reverse`

* The `reverse` method reverses the order of an array.
* Mutates the original array

```javascript
let numbers = [1, 2, 3, 4];
numbers.reverse();
numbers;
```

* Use `slice` with no arguments if you do not want to mutate the original array:

```javascript
let numbers = [1, 2, 3, 4];
let reversedNumbers = numbers.slice().reverse();
reversedNumbers;
numbers;
```

