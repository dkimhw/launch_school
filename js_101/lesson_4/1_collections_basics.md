
## Collections Basics


### Element Reference

#### String Element Reference

* Strings use integer based index for each character in the string (starts at 0).

```javascript
let str = 'abcdefghi';
str[2]; // => 'c'
```

* To grab multiple characters:

```javascript
str.slice(2, 5); // =>'cde' ; exclusive 2, 3, 4 only
```

```javascript
let str = 'The grass is green'
console.log(str.slice(4, 9));
```

```javascript
// all characters from start index to end
let str = 'abcdefghi';
str.slice(2); // => 'cdefghi'
```

* No arguments slice() creates a copy:

```javascript
'abcdefghi'.slice(); // => 'abcdefghi'
```

* With negative arguments:

```javascript
'abcdefghi'.slice(-4, -2); // => 'fg'
```

* `slice` vs `substring`:
    * Recommend using `slice` - behavior is more natural and predictable

1. When the start index is greater than the end index, `substring` swaps the two arguments while `slice` returns an empty string:

```javascript
'abcdef'.substring(3, 1); // => 'bc'
'abcdef'.slice(3, 1);     // => ''
```

2. When either argument is negative - `substring` treats them as 0 while `slice` treats them as `length - index`:

```javascript
'abcdef'.substring(-2); // => 'abcdef'
'abcdef'.slice(-2);     // => 'ef'
```

#### Array Element Reference

* Arrays are ordered, zero-indexed collections

* To grab elements at specific indexes:

```javascript
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
arr[2]; // => 'c'
```

* There is a `slice` method for array --> same name but different implementation for array
    * Calling `slice` without any arguments will return a **copy** of the original array


#### Object Element Reference

* Objects use key-value pairs (not ordered). The key is a string and the value can be any JavaScript value including objects. 
* Object keys are also called properties

```javascript
let obj = { fruit: 'apple', vegetable: 'carrot' };
obj.fruit; // => 'apple'
obj.fruit[3]; // => 'l'
obj['vegetable']; // => 'carrot'
obj['vegetable'][0]; // => 'c'
```

* You can use bracket or dot notations to call values

* Keys are always unique - if you have the same key - JS will just take the last value:

```javascript
let obj = { fruit: 'apple', vegetable: 'carrot', fruit: 'pear' }
obj // { fruit: 'pear', vegetable: 'carrot' }
```

* Values however can be duplicated

* `values` and `keys` functions can return arrays of values or keys:

```javascript
let capitals = { uk: 'London', france: 'Paris', germany: 'Berlin' };
Object.keys(capitals);      // => ['uk', 'france', 'germany']
Object.values(capitals);    // => ['London', 'Paris', 'Berlin']
Object.values(capitals)[0]; // => 'London'
```

### Element Reference Gotchas

#### Out of Bounds Indices

* For strings and arrays if you try to reference an index greater than 4:

```javascript
let string = 'abcde';
let array = ['a', 'b', 'c', 'd', 'e'];

string[2]; // => 'c'
array[2];  // => 'c'

string[5]; // => undefined
array[5];  // => undefined
```

* Accessing index less than 0 on an array or a string also returns `undefined` in JavaScript

```javascript
string[-1]; // => undefined
array[-1];  // => undefined
```

#### Invalid Object Keys

* Accessing key or property that doesn't exist returns `undefined`:

```javascript
let obj = {a: 'foo', b: 'bar'};
obj['c']; // => undefined
```

* Sometimes an object contains properties with `undefined` values on purpose. In that case, how do we differentiate between a non-existent property vs. a property that has `undefined` as its value?

```javascript
let obj = { a: 'foo', b: 'bar', c: undefined};
obj.hasOwnProperty('c'); // => true
obj.hasOwnProperty('d'); // => fals
```

* Another way is:

```javascript
Object.keys(obj).includes('c'); // => true
Object.keys(obj).includes('d'); // => false
```

### Conversion

* You can convert string to array / array to string easily in JS:

```javascript
'abcdef'.split(''); // => ['a', 'b', 'c', 'd', 'e', 'f']
'abcdef'.split('')[0]; // 'a'
'apple,orange,mango'.split(','); // => ['apple', 'orange', 'mango']

let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
arr.join(); // => 'a,b,c,d,e,f'
```

### Element Assignment

* You can update elements via accessing them at specific indexes:

```javascript
numbers[1] = numbers[1] + 1;
numbers[2] = numbers[2] + 1;
numbers[3] = numbers[3] + 1;
numbers[4] = numbers[4] + 1;
numbers;    // [ 2, 3, 4, 5, NaN ]
```

* Object assignment:

```javascript
let obj = { apple: 'Produce', carrot: 'Produce', pear: 'Produce', broccoli: 'Produce' }
obj['apple'] = 'Fruit'
obj.carrot = 'Vegetable'
obj
/*
{ apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Produce',
  broccoli: 'Produce' }
*/
```

* String Character Assignment

The big difference here is that strings are immutable and cannot be altered permanently:

```javascript
let str = 'bob';
str[0] = 'B'; // => 'B'
str; // => 'bob'
```

To modify string you need to create a new string with changes:

```javascript
str = 'B' + str.slice(1);
str; // => 'Bob'
```