
## Other

[https://launchschool.com/books/javascript/read/more_stuff#variablesaspointers]

### Variables as Pointers

Variables are pointers or references to a memory location. Variables reference a value in memory.

#### Working With Primitives

```javascript
let a = 5;
let b = a; // not a reference. A new "5" for b

a = 8

a // 8
b // 5
```

This is not surprising - reassigning a value does not affect any other variables that happen to have the same value. This is why `b` remain unchanged. `a` and `b` are independent - changing one does not affect the other.

Variables that have primitive values store those values in the variable. When you assign a new value to a variable, JavaScript changes the variable's content to the new value. 

#### Working with Objects

```javascript
let c = [1, 2];
let d = c;
c = [3, 4];

c // [3, 4]
d // [1, 2]
```

This is different from what Java does. In Java, c & d would be the same. The two variables return different arrays.

This code works like this because the reassignment does not mutate the variable to the left of the assignment operator. Instead, it changes the variable in such a way that it refers to the array on the right. Each variable has a value and reassigning values does not affect any other variables that happen to have the same value. 

**Does that mean that arrays and other objects get stored directly inside variables like primitives?**

Not quite. Let's look at this example:

```javascript
let e = [1, 2];
let f = e;
e.push(3, 4);

console.log(e); // [1, 2, 3, 4]
console.log(f); // [1, 2, 3, 4]
```

**What is happening here?**

This is because these variables that store objects are references to the memory locations that was storing [1, 2]. This concept goes back to stack versus heap. Primitive values get stored in stack - it's a faster but smaller memory. Objects like arrays store the actual value in the heap but a reference to the heap is in the stack. 

When `let f = e` runs, both `f` and `e` both contain the same pointer value. When `e.push(3, 4)` runs, it uses the pointer to access and mutate the array by appending 3 and 4 to its original value. Since `f` also points to that same array, both `e` and `f` reflect the updated contents of the array. 

#### Gotchas

```javascript
let g = ['a', 'b', 'c']
let h = g
g[1] = 'x'
g // [ 'a', 'x', 'c' ]

h // [ 'a', 'x', 'c' ]
```
We are not reassigning a whole array. We are reassigning a specific element in the array. This code doesn't mutate the element but it does mutate the array. 


### Method Chaining

Example:

```javascript
let str = 'Pete Hanson';
let names = str.toUpperCase().split(' ').reverse().join(', ');
console.log(names);
// outputs: HANSON, PETE
```

The main concept here is that you can call methods on the return value of another method. 

### Regex

Regular expression can be used to test whether a string matches a given pattern.

Examples of how to use regex in JavaScript:

```javascript
/o/.test('bobcat'); // true
/l/.test('bobcat'); // false
```

You can combine this with if statements:

```javascript
if (/b/.test('bobcat')) {
  // this branch executes since 'b' is in 'bobcat'
  console.log("Yes, it contains the letter 'b'");
} else {
  // this branch does not execute since 'bobcat' contains 'b'
  console.log("No, it doesn't contain the letter 'b'");
}
```

When a match occurs with a regex that contains the `/g` flag - a global match - it returns an array that contains each matching substring. The `/g` example returns an array consisting of the matched `b`, `c`, and `t`.

```javascript
"bobcat".match(/[bct]/g);
```

Regex is a great tool for a whole slew of different problems.

One thing to note --> use `test` if you only need to know that a pattern exists or not --> it's faster.

### Math Object

This object contains useful methods and properties:

```javascript
// Square root a number
Math.sqrt(36);
Math.PI;
```

### Dates

If you want to work with dates - JavaScript has a `Date` object that make it easier to work with dates right off the bet:

```javascript
let date = new Date('December 25, 2012');
date.getDay(); // 2 - returns a number for the day of the week - 0 for Sunday
```

To get a day name:

```javascript
function getDayOfWeek(date) {
  let daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return daysOfWeek[date.getDay()];
}

let date = new Date('December 25, 2012');
console.log(getDayOfWeek(date));
```

### Exceptions

Complex programs can lead to uncertainities and sometimes failures. 

JavaScript is a forgiving language as it fails silently by returning values like `NaN`, `undefined`, `null` but you still need a way to handle these errors slient or not silent. 

JavaScript allows programmers to handle these failures through `try` and `catch` syntax. Very much like Java. You can use this to anticipate and handle errors that may occur in your program.

Exception handling is a process that deals with errors in a manageable and predictable way. 

Here is the syntax:

```javascript
try {
  // perform an operation that may produce an error
} catch (exception) {
  // an error has occurred. do something about it here.
  // for example, log the error
} finally {
  // Optional 'finally' block; not used often
  // Executes even if an exception occurs.
}
```

Example with one of the common JavaScript errors when we try to call a method on the values `undefined` or `null`:

```javascript
// exception_handling.js

let names = ['bob', 'joe', 'steve', undefined, 'frank'];
names.forEach(name => {
  console.log(`${name}'s name has ${name.length} letters in it.`);
});

// Log output
// bob's name has 3 letters in it.
// joe's name has 3 letters in it.
// steve's name has 5 letters in it.
// TypeError: Cannot read property 'length' of undefined
//     at names.forEach (repl:2:42)
//     at Array.forEach (<anonymous>)
```

How to handle the error:

```javascript
let names = ['bob', 'joe', 'steve', undefined, 'frank'];

names.forEach(name => {
  // The try block is here because we are anticipating that there maybe bad data in the names data.
  try {
    console.log(`${name}'s name has ${name.length} letters in it.`);
  } catch {
    console.log('Something went wrong.');
  }
});

// Log output
// bob's name has 3 letters in it.
// joe's name has 3 letters in it.
// steve's name has 5 letters in it.
// Something went wrong
// frank's name has 5 letters in it.
```

### Stack Traces

You don't need to know anything more about the call stack. The takeaway is that JavaScript uses it to display the stack trace when an exception occurs. Knowing how to use this information is invaluable when you have to debug a program.

A word of advice: use your stack traces. Make sure you understand what it is telling you, and look at the code that it identifies as the failure point. If you don't use the trace, you may introduce more problems in the code, or worse yet, "fix" code that already works. The stack trace lets you focus on the right part of the program.