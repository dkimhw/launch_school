

## Nested Data Structures

### Referencing Collection Elements

```javascript
let arr = [[1, 3], [2]];

arr[0]; // => [ 1, 3 ]
arr[0][1]; // => 3
```

### Updating Collection Elements

```javascript
let arr = [[1, 3], [2]];

arr[1] = 'hi there';
arr; // => [ [1, 3 ], 'hi there' ]
```

The `arr[1] = 'hi there'` is a destructive action that permanently changed the second element in the `arr` array. It replaced the entire `[2]` inner array with the string `'hi there'`. 

```javascript
let arr = [[1, 3], [2]];
arr[0][1] = 5;

arr; // => [ [ 1, 5 ], [ 2 ] ] - destructive
```

How to add element into an inner array - chaining methods:

```javascript
let arr = [[1], [2]];

arr[0].push(3);
arr; // => [ [ 1, 3 ], [ 2 ] ]
```


### Other Nested Structures

Objects can be nested within an array as well.

```javascript
let arr = [{ a: 'ant' }, { b: 'bear' }];

arr[0]['c'] = 'cat';
arr[0].d = 'dog';
arr; // => [{ a: 'ant', c: 'cat', d: 'dog' }, { b: 'bear' }]
```

### Variable Reference for Nested Collections

The local variables `a` and `b` below are pointing to Array objects - when we place the local variables as elements in an array - the result looks the same as adding the actual Array objects to which they refer to the array. 

```javascript
let a = [1, 3];
let b = [2];
let arr = [a, b];

arr; // => [ [ 1, 3 ], [ 2 ] ]

a[1] = 5; // different way to change values
arr; // => [ [ 1, 5 ], [ 2 ] ]

arr[0][1] = 8;
arr; // => [ [ 1, 8 ], [ 2 ] ]
a;   // => [ 1, 8 ]
```

It produces the same results because `arr[0]` and `a` point to the same array.

### Shallow Copy

#### Shallow Copy Arrays

1. One way to copy an array is to use the `slice` method:

```javascript
let arr = ['a', 'b', 'c'];
let copyOfArr = arr.slice();
copyOfArr; // => [ 'a', 'b', 'c' ];
```

2. A more modern way is:

```javascript
let arr = ['a', 'b', 'c'];
let copyOfArr = [...arr];
copyOfArr; // => [ 'a', 'b', 'c' ];

let arr = ['a', 'b', 'c'];
let copyOfArr = [...arr];

copyOfArr.push('d');

arr;       // => [ 'a', 'b', 'c' ]
copyOfArr; // => [ 'a', 'b', 'c', 'd' ]
```

Both of these techniques create a shallow copy of an array - only the top level array is copied. When the array contains other objects - like nested array - then those objects are shared - not copied. Check the example below:

```javascript
let arr = [['a'], ['b'], ['c']];
let copyOfArr = arr.slice();

copyOfArr[1].push('d');

arr;       // => [ [ 'a' ], [ 'b', 'd' ], [ 'c' ] ]
copyOfArr; // => [ [ 'a' ], [ 'b', 'd' ], [ 'c' ] ]
```

* Notice that - in both examples - both `arr` and `copyOfArr` were changed. This behavior occurs because the destructive method `push` was called on a **shared** array object `['b']` - rather than a separate array. 
* When you mutate a shared object in an array or other collection - it is the shared object you are affecting rather than the collection. 


What about objects?

```javascript
let arr = [{ a: 'foo' }, { b: 'bar' }, { c: 'baz' }];
let copyOfArr = [...arr];

copyOfArr[1].d = 'qux';

arr;       // => [ { a: 'foo' }, { b: 'bar', d: 'qux' }, { c: 'baz' } ]
copyOfArr; // => [ { a: 'foo' }, { b: 'bar', d: 'qux' }, { c: 'baz' } ]
```

The critical thing to be aware of is what level you are working at - especially when working with nested collections and using variables as pointers. Are you working at the level of an outer array or object or at the level of an object within that. 

#### Shallow Copy Objects

Use `assign` to do shallow copy on objects:

```javascript
let obj = { a: 'foo', b: 'bar' };
let copyOfObj = Object.assign({}, obj);

copyOfObj; // => { a: 'foo', b: 'bar' }

copyOfObj['c'] = 'baz';
copyOfObj; // => { a: 'foo', b: 'bar', c: 'baz' }
obj;       // => { a: 'foo', b: 'bar' }
```

Once again - this is a shallow copy. Changes to nested objects within the copy will be reflected in the original.

```javascript
let obj = { a: { b: 'foo' }, c: ['bar'] };
let copyOfObj = Object.assign({}, obj);

obj['a']['d'] = 'baz';
copyOfObj; // => { a: { b: 'foo', d: 'baz' }, c: [ 'bar' ] }
obj;       // => { a: { b: 'foo', d: 'baz' }, c: [ 'bar' ] }
```

### Deep Copy

JS does not have an explicity method for deep copying objects. There is one way to do it - but only works with nested arrays and plain objects. 

Objects that have methods and complex objects like dates or custom objects cannot be deep-cloned with this technique. 

Most use cases of deep copying objects involve only plain objects and arrays, so this technique is useful to learn:

```javascript
let arr = [{ b: 'foo' }, ['bar']];
let serializedArr = JSON.stringify(arr);
let deepCopiedArr = JSON.parse(serializedArr);
```

The JSON.stringify function serializes any object, including arrays, that only have primitives, arrays, and plain objects as elements. Serializing involves converting an object to a string form that can be subsequently converted back into an identical object. The JSON.parse function performs that conversion from a string back to an object.

To verify that this is indeed a deep copy, we'll modify the second element of the deepCopiedArr array, which itself is an array. If the modification doesn't show in the original arr, we can conclude that it's a deep copy:

```javascript
deepCopiedArr[1].push('baz');
deepCopiedArr; // => [ { b: 'foo' }, [ 'bar', 'baz' ] ]
arr;           // => [ { b: 'foo' }, [ 'bar' ] ]
```

### Freezing Objects

What is freezing? In JavaScript, objects can be frozen using the Object.freeze function to prevent them from being modified. The function freezes both arrays and plain objects:

```javascript
let obj = Object.freeze({ a: 'foo' });
let arr = Object.freeze(['a', 'b', 'c']);

obj['b'] = 'bar';
obj; // => { a: 'foo' }

arr.push('d'); // => TypeError: Cannot add property 3, object is not extensible
arr; // => [ 'a', 'b', 'c' ]
```

* In both cases, we cannot modify the object once it's frozen. Interestingly, attempting to mutate a frozen array raises an error, while doing the same with a plain object fails silently. Another one of those JavaScript quirks!


Only mutable objects can be frozen with Object.freeze since immutable objects, like integers, are already frozen. We can check whether an object is frozen with the `Object.isFrozen` method:

```javascript
Object.isFrozen('abc'); // => true
```

What, exactly, does `Object.freeze` freeze? It only freezes the object that is passed to it. If the object passed to it contains other objects, those objects won't be frozen. For example, if we have a nested array, the nested objects can still be modified after passing it to `Object.freeze`:

```javascript
let arr = Object.freeze([[1], [2], [3]]);
arr[2].push(4);
arr; // =>  [ [ 1 ], [ 2 ], [ 3, 4 ] ]
```

