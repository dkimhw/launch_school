

## Callback Functions


### Functions as First-Class Values and Higher Order Functions

The term **first-class value** or **first-class object** is used to describe values that can be passed to functions as arguments or returned by those functions. In JavaScript, functions themselves are first-class values. 

Not only can you invoke functions but you can also pass them around your program like any other value. Functions that can be treated as values let us create functions that can take other functions as arguments and return other functions. It allows for a more declarative and expressive style of programming.

Example with transforming an array of numbers using `for` loop:

```javascript
// for loop transformation
let numbers = [1, 2, 3, 4, 5];
let transformedNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
  let currentNum = numbers[index];
  let squaredNum = currentNum * currentNum;

  transformedNumbers.push(squaredNum);
}

transformedNumbers; // => [ 1, 4, 9, 16, 25 ]
```

Same but with `map`:

```javascript
// map transformation
let numbers = [1, 2, 3, 4, 5];
let transformedNumbers = numbers.map(currentNum => currentNum * currentNum);

transformedNumbers; // => [ 1, 4, 9, 16, 25 ]
```

* There is a dramatic difference between the styles in these two snippets.
* The first one uses what we call an **imperative** approach - it is called imperative because you are telling interpreter what to do each step of the way. Declare and initialize an empty `transformedNumbers` array, declare a counter, increment, etc.
* The second way uses `declarative` approach. We are declaring what we need to do with the `numbers` array by saying: "Map each element of the array to the return value of passing that element to the given callback function."

This declarative style of programming is possible only because we can treat functions as values. The `map` method takes a function as an argument and calls it for each element of the array used to call `map`. Functions that take other functions as arguments (and ones that return other functions) are called **higher order functions**. In JS - these functions are called callbacks.

### Example 1

```javascript
[[1, 2], [3, 4]].forEach(arr => console.log(arr[0]));
// 1
// 3
// => undefined
```

1. Each inner array is passed to the callback and assigned to local variable `arr`. The element.
2. Then calls `console.log` on `arr[0]` - return value of `console.log` is `undefined`. `forEach` does not do anything with the return value. 
3. `forEach`'s return value is always `undefined`


### Example 2

```javascript
[[1, 2], [3, 4]].map(arr => console.log(arr[0]));
// 1
// 3
// => [undefined, undefined]
```

### Example 3

```javascript
[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});

// prints: 1, 3
// returns: [1, 3]
```

When using callbacks with curly braces we must explicitly return values - even though `arr[0]` element reference returns a number - the callback returns `undefined` since the callback does not explicitly return the number. 

```javascript
[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  arr[0];
});

// 1
// 3
// => [undefined, undefined]
```

Even this will not work:

```javascript
let x = [[1, 2], [3, 4]].map(arr => {
    console.log(arr[0]);
    3;
});


console.log(x);
```

### Example 4

```javascript
let myArr = [[18, 7], [3, 12]].forEach(arr => {
  // This basically loops [18, 7], [3, 12] arrays
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});

// Prints: 18, 7, 12
// Returns: undefined --> because of `forEach`
```

* There are 4 return values to pay attention to: the return value of calls to `forEach` and `map` and the return value of both callbacks.
* the return values, it's important to understand how the method used in the example works. In this case, we're using `forEach` on the outside, which ignores the return value of the callback. Thus, we can see that the value of `myArr` is undefined.


### Example 5

```javascript
[[1, 2], [3, 4]].map(arr => {
    // arr = [1, 2]
    return arr.map(num => num * 2); // loops [1, 2] and loops and multiplies by 2
});

// [[2, 4], [6, 8]]
```

### Example 6

```javascript
[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
    // { a: 'ant', b: 'elephant' } --> false
    return Object.keys(object).every(key => object[key][0] === key);
    // loop key array - check that every key ('a', 'b') is equal to object[key][0] which for the first one is 'a' from 'ant'
});
// => [ { c: 'cat', d: 'dog' } ]
```


### Example 7

```javascript
[[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
    // [8, 13, 27]
    return arr.filter(item => {
        if (typeof item === 'number') {    // if it's a number
            return item > 13;
        } else {
            return item.length < 6;
        }
    });
});

// [[27], ['apple']]
```

### Example 8

```javascript
[[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
    // [ [1], [2], [3], [4] ]
    return element1.forEach(element2 => {
        // Looping over one at a time: [1], [2], etc.
        return element2.filter(element3 => {
            return element3.length > 0;
        });
    });
});

// => [ undefined, undefined ] - because of forEach returns undefined
```
* `forEach` does not care about the callback's return value and it always returns new array that contains `undefined` values.


### Example 9

```javascript
[[[1, 2], [3, 4]], [5, 6]].map(arr => {
  // [[1, 2], [3, 4]], [5, 6]
  return arr.map(elem => {
    // [1, 2], 5
    if (typeof elem === 'number') { // it's a number
      return elem + 1; // 6 
    } else {                  // it's an array
      return elem.map(number => number + 1); // 1, 2
    }
  });
});

// [ [[2, 3], [4, 5]] , [6, 7]]
```

### Misc Tips

Don't mutate the collection that you are iterating through. That includes selection and transformation - as well as any other iterative method provided by JS arrays:

```javascript
let arr = [1, 2];

arr.map(subArr => arr.pop()); // => [ 2, <1 empty item> ]
```

`map` is always supposed to return an array with as many elements as the array it is called on. Here though - it does not do that because we mutate the array during the `map` call.