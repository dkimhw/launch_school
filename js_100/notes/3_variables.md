
## Variable Naming

Variables store information that a program must reference or manipulate. They also allow programmers to label the data in memory so that it can be accessed later. Descriptive names make it easier for programmers to access and use data without issues.

A variable name must accurately and concisely describe the data that the variable contains. In large programs, it can be difficult to remember what information each variable contains. A descriptive variable name can help programmers know what data might be stored. 

## Declaring and Assigning Variables

A variable declaration is a statement that asks the JavaScript engine reserve space for a variable with a particular name.

Using `let`:

```javascript
let name = 'David Kim';
```

Assigning a value to a variable is called variable initialization. Now we can use the variable `name` anywhere else in the JavaScript program.

You can also reassign but without the `let` operator since you have initalized it already.

```javascript
name = 'Patricia Arnaiz';
```

Interesting thing to note here - really works like Java and primitive data types:

```javascript
let a = 4
let b = a // at this point b and a point to two different values of 4 - they just happen to share the same value.

a = 7

console.log(b); // this will be 4
```

Variables reference values in memory that are not deeply-linked to each other. If you change one variable, it does not change other variables with the same value (not always the case).

## Declaring Constants

```javascript
const firstName = 'Mitchell';
```

Once you initialize a constant you cannot give it another value. Constants store values that remain the same throughout the excecution of a program, a block within the program, or a function.

## Variable Scope

A variable's scope determines where it is available in a program. The location where you declare a variable determines its scope. 

In JavaScript, `let` and `const` keywords have block scope. A block is a sequence of JavaScript code between a pair of opening and closing curly braces. This includes if, for, while statements. 

```javascript
if (1 === 1) {
  let a = 'foo';
}

console.log(a); // ReferenceError - cannot access a
```

If you had declared the variable beforehand, JavaScript actually uses variable lookup to update the variable:

```javascript
let a = 'foo';
if (1 === 1) {
  a = 'bar';
}

console.log(a); // bar
```

```javascript
let a = 'foo';
if (1 === 1) {
  let a; 
  a = 'bar' // updates the local block variable a and not the a - global variable declared outside.
}

console.log(a); // foo
```

Always declare your variables with `let` and `const`! JavaScript has bizarre rules when working with undeclared variables. The most notable one is that all undeclared variables are global variables no matter where this undeclared variable was created. They ignore block and function scope.