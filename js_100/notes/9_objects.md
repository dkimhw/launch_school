
## Objects

[https://launchschool.com/books/javascript/read/objects]

OOP - modeling problems as objects that have actions (responsibilities) and state - characteristics that distinguish them between objects

### What are Objects?

* Stores key-value pairs (arrays store values with ordered indexes). Key-value pairs are also called object properties. Property can be used to refer to the key name. 
* An object's keys are strings but the values can be any type including other objects

* How to create an object using **object literal** syntax?

```javascript
let person = {
  name: 'Jane',
  age: 37,
  hobbies: ['photography', 'genealogy']
};
```
  * Three key-value pairs
  * Can store any values as you can see above

* Access (two ways):

```javascript
person.name // dot notation
person['age'] // bracket notation
```
  * Most developers prefer do notation 
  * However, if you have a variable that contains a key's name - you must use bracket:

  ```javascript
  let key = 'name';
  person[key]
  ```

* Different ways to add values:

```javascript
person.height = '5 ft';
person['gender'] = 'female';
```

* Deleting values from object:

```javascript
delete person.age;
delete person['gender'];
delete person['hobbies'];
person
```
  * `delete` removes the key-value pair from the object and returns `true` unless it cannot delete the property.

### Objects vs. Primitives

* Primitives are the basic (atomic) types in JavaScript:
  * string
  * numbers
  * booleans
  * null
  * undefined
* Objects include:
  * Arrays
  * Date Objects
  * Functions

Objects are complex values composed of primitive values or other objects. Array object for example has a `length` property that contains a number: a primitive value. Objects are mutable. Primitive values, however, are immutable. 

If a variable contains a primitive value - all you can do is use it in an expression or reassign it (give a new value). All operations on primitive values evalute to new values. `0 + 0` evaluates to a new value of `0`.

```javascript
let number = 20;
let newNumber = number +1;
newNumber // evaluates to a new number
number // original value remains unchanged
```

```javascript
let object = { a: 1, b: 2, c: 3};
object.c = object.c + 1 // Changes the objects value to 4
object // However note that c property has an entirely new number since it is storing a primitive.
```

### Prototypes

Objects can inherit from other objects - we call this prototype. If `a` inherits from `b` - `a` is a prototype and has access to properties and methods defined on `b`.

`Object.create` - creates a new object and sets the prototype for that object to the passed in object. `studentBob` inherits from `bob`. You have access to `name` property even without explicitly defining it

```javascript
let bob = { name: 'Bob', age: 22 };
let studentBob = Object.create(bob);
studentBob.year = 'Senior' // Can add additional properties specific to studentBob

console.log(studentBob.name); // logs 'Bob'
```

### Iteration

#### For/in Loop

```javascript
let person = {
  name: 'Bob',
  age: 30,
  height: '6ft'
};

for (let prop in person) {
  // prop in each iteration receives a key from the person object
  // we use prop to access the value from person
  // cannot use dot notation since `prop` is a variable that contains a property name and not the property name itself.
  console.log(person[prop]);
}
```

`for/in` iterates over the properties of an object's prototypes as well:

```javascript
let obj1 = { a: 1, b: 2 }
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

for (let prop in obj2) {
  console.log(obj2[prop]);
}

// 1
// 2
// 3
// 4

```

If you want to limit the loop to object's own properties (properties it defined for itself - not inherited):

```javascript
let obj1 = { a: 1, b: 2 }
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

for (let prop in obj2) {
  if (obj2.hasOwnProperty(prop)) {
    console.log(obj2[prop]);
  }
}

```

#### Object.keys

* Returns an object's keys as an array
* Returns the object's own keys - does not include keys from the prototype

```javascript
let person = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
};

let personKeys = Object.keys(person);
// returns ['name', 'age', 'height']

personKeys.forEach(i => console.log(person[i]));
// Bob
// 30
// 6 ft
```

#### Order of Object Properties

* It's not guaranteed. It varies across JavScript engines. It's good to assume that it order will be the same on iteration.



### Common Operations

#### Object.values

* Returns array of own property values (cannot predict order of the values in returned array)

```javascript
let person = { name: 'Bob', age: 30, height: '6ft' };
let personValues = Object.values(person);
console.log(personValues); // logs [ 'Bob', 30, '6ft' ]
```

#### Object.entries

* Returns the keys and values in an array of nested arrays format:

```javascript
let person = { name: 'Bob', age: 30, height: '6ft' };
console.log(Object.entries(person));
// logs [[ 'name', 'Bob' ], [ 'age', 30 ], [ 'height', '6ft' ]]
```

#### Object.assign

Mutates the first object that is passed. Adds the second passed object onto the first object in the argument.

```javascript
let objA = { a: 'foo' };
let objB = { b: 'bar' };

Object.assign(objA, objB);

console.log(objA); // { a: 'foo', b: 'bar' }
console.log(objB); // { b: 'bar' }
```

If you need to create a new object - use an empty object as the first argument:

```javascript
let objA = { a: 'foo' };
let objB = { b: 'bar' };

Object.assign({}, objA, objB); // Can pass multiple arguments
{ a: 'foo', b: 'bar' }

console.log(objA); // { a: 'foo' }
console.log(objB); // { b: 'bar' }
```

### Arrays vs. Objects

* Do the individual values have names or labels? If yes, use an object. If the data doesn't have a natural label, an array should suffice.

* Does order matter? If yes, then array.

* Do I need a stack or queue structure? Arrays are good at mimicking simple "last-in-first-out" stacks and "first-in-first-out" queues.


### Object Keys

* All valid keys:
  * 1
  * '1'
  * undefined
  * 'hello world'
  * true
  * 'true'

However, JavaScript coerces non-string key values to strings. For example, `1` and `'1'` are the same key as `true` and `'true'` (same for `undefined`).

```javascript
let myObj = {};
myObj[true] = 'hello' // same as myObj['true'] = 'hello'
console.log(myObj);

myObj['true'] = 'world' // accessing the same variable but in two syntatically different ways
console.log(myObj); // 'world'
```


### Review Concepts:

1. Every value in JavaScript is either a primitive or an object
2. Primitives are atomic values
3. Objects are "compound" values made up of primitives or other objects
4. Primitive values are immutable. In other words, you can't add to, remove from or otherwise change a primitive value. Any operation performed on a primitive value returns a new primitive value.
  * Need to better understand this
5. Objects are mutable. That is, certain operations on objects can change the object in place. All variables that have a reference to that object will see that change