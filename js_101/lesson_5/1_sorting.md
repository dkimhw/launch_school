

## Sorting

Sorting is a useful operation when you need to order a collection in a particular order. It's most common on arrays - since items in arrays are accessed via their index - order in the array is important.

JS objects don't maintain order. They have key-value pairs so the order is generally not critical. 

### What is sorting?

Sorting is setting the order of the items in a collection according to some criteria. 

It is possible to write sorting code manually - however, that code is pretty complex and not needed at the moment. 

We can use JS's `sort` method to handle complex sorting operations.


### Sorting in JS

#### Default Sorting Behavior

Sorting algorithms must perform a comparison of some kind between the items in a collection. It uses the results of those comparisons to rearrange the order of the collection.

We expect the following to return `[1, 2, 4, 9, 11, 21, 107]` in JS but that's not the case here at all.

```javascript
[2, 11, 9, 4, 107, 21, 1].sort(); // [ 1, 107, 11, 2, 21, 4, 9 ]
```
* What JavaScript is doing is that it converts all the numbers to strings and compares them by their Unicode character codes. This is why you see all the numbers that start with `1` move to the beginning of the array.

When `sort` is called without arguments - it coerces all the array elements except `undefined` to their string counterparts and perform string comparisons:

```javascript
[null, 'a', true, 1].sort() // [ 1, 'a', null, true ]
```

`undefined` values are special case in sorting - they go to the back:

```javascript
[undefined, 11, 'z', 'x', 'y', undefined].sort() // [ 11, 'x', 'y', 'z', undefined, undefined ]
```

#### Sorting Alphabetically

Orders letters alphabetically:

```javascript
['c', 'a', 'e', 'b', 'd'].sort() // [ 'a', 'b', 'c', 'd', 'e' ]
```

What about strings with multiple characters? In this case, `sort` compares them character by character so the strings beginning with `a` comes before those beginning with `b`. If both characters are the same - then the one that is shorter comes first: `cap` vs `cape`:

```javascript
['arc', 'bat', 'cape', 'ants', 'cap'].sort() // [ 'ants', 'arc', 'bat', 'cap', 'cape' ]
```

#### Sorting is Destructive

```javascript
let vowels = ['u', 'i', 'a', 'e', 'o']
vowels.sort() // [ 'a', 'e', 'i', 'o', 'u' ]
vowels // [ 'a', 'e', 'i', 'o', 'u' ]
```

Must create a copy:

```javascript
let vowels = ['u', 'i', 'a', 'e', 'o']
vowels.slice().sort() // [ 'a', 'e', 'i', 'o', 'u' ]
vowels // [ 'u', 'i', 'a', 'e', 'o' ]
```

#### Sorting UTF-16

Operators like `<`, `>`, `===` work with strings using UTF-16. Each character is given a UTF code (i.e. `+` is 43).

```javascript
'A' < 'a'         // 65 < 97 - true
'Z' < 'a'         // 90 < 97 - true
'!' < 'A'         // 33 < 65 - true
```

* Uppercase letters come before lowercase letters
* Digits and most punctuation come before letters
* There are several punctuation characters between the uppercase and lowercse letters and several more that come after all the letters
* There is an extended ASCII table that contains accented and other characters - this comes after the main ASCII table.

#### Generic Sorting

How do you sort numbers? The default behavior of `sort` is not helpful because it converts all numbers to strings before comparing them. 

`sort` takes an optional callback argument - the return value of that callback determines the final sequence produced by the sort 

```javascript
[2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}); // => [ 1, 2, 4, 9, 11, 21, 107 ]
```

Code Explanation:
* The `sort` function iterates over our array and supplies our callback function with two elements each time. It arranges the relative positions of the two elements using the following rules:

1. If the callback returns a number less than `0`, place `a` before `b`.
2. If the callback returns a number greater than `0`, place `b` before `a`.
3. If the callback returns `0` - leave the relative positions of `a` and `b` unchanged.

Let's use the first two numbers in the array, `2` and `11` - as an example. When our callback function gets invoked the first time: `a` will be `2` and b will be `11`. Since `a < b`, our callback returns `-1` and therefore `2` will be placed before `11` in the aorted array. 

The same comparison gets performed for each pair of numbers - and the result is an array of numbers sorted in ascending order.

We can simplify the code above. We know that we want to return a negative number when `a < b` and a positive number when `a > b`. Looking at our logic - we can easily replace the whole `if/else` conditional with `return a - b`:

```javascript
[2, 11, 9, 4, 107, 21, 1].sort((a, b) => a - b);
```

To do so descending:

```javascript
[2, 11, 9, 4, 107, 21, 1].sort((a, b) => b - a);
```

```javascript
[2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
  console.log(`a is ${a} and b is ${b}`);
  return a - b;
});

// a is 11 and b is 9
// a is 2 and b is 9
// a is 11 and b is 4
// a is 9 and b is 4
// a is 2 and b is 4
// a is 11 and b is 107
// a is 107 and b is 21
// a is 11 and b is 21
// a is 107 and b is 1
// a is 21 and b is 1
// a is 11 and b is 1
// a is 9 and b is 1
// a is 4 and b is 1
// a is 2 and b is 1
// => [ 1, 2, 4, 9, 11, 21, 107 ]
```

#### Sorting Words Based on Length

```javascript
let words = ['go', 'ahead', 'and', 'jump'];

words.sort((a, b) => a.length - b.length);
```

#### Sorting Sub-Arrays

```javascript
let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
scores.sort((a, b) => {
  let totalAScore = a.reduce((number, next) => number + next);
  let totalBScore = b.reduce((number, next) => number + next);

  return totalAScore - totalBScore;
});
```