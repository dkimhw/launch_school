

## Functions

### Using Functions

Example of how to write a function:

```javascript
function say(words) {
  console.log(words);
}

say("hello");
say("hi");
say("how are you");
say("I'm fine");
```
This function allows us to not write `console.log` everytime we want to print something making the code shorter and reusable. The major benefit is that functions make code more maintainable and usable. Usable because programmers now don't need to understand how it was implemented to use in their program (hides the implementation details). For example, I don't need to know how Math object and methods are implemented as long as I know what the functions do.

It also makes it more maintainable because now you only need to make changes to one place.

You can also provide functions with optional values called arguments. Arguments let you pass data from outside the function's scope into the function so it can access the data. If the function doesn't need additional data from outside, no arguments are necessary.

You can name arguments whatever you want but again it should be concise and meaningful. You cannot reference arguments outside of the function.

Some useful terminologies and information:
  * When you are invoking a function - it's the same as calling a function (using the function).
  * The local variable names between parenthesis are called parameters
  * Arguments are the values you pass into the function for each of those parameters.

  ```javascript
    function add(left, right) { // left & right are parameters
      return left + right; // left & right are arguments
    }

    let sum = add(3, 6); // 3 and 6 are arguments
  ```

### Return Values

JavaScript functions by default return `undefined` (always evaluates to a value). However, you can use `return` syntax to specify a value that a function can return. 

Functions are very useful for performing an operation and returning a value like the example above that adds two numbers.

When JavaScript encounters the `return` statement, it evaluates the expression, stops running the function, and returns the expression's value to the location where the function was called.

### Default Parameters

Sometimes you may want a function that can be called without an argument (but still has a parameter). You can do this in JavaScript by providing each parameter a default value. 

```javascript
let say = (words = 'hello') =>  { console.log(words); }
say();
```

### Variable Scope

#### Global Variables

* Global scope - available everywhere within a program
* Function that is declared outside a block or function is a global variable

  ```javascript
  // Functions can access global variables (available everywhere)
  let greetingMessage = 'Good Morning';

  funciton greetPeople() {
    console.log(greetingMessage);
  }

  greetPeople();
  ```

* You can also reassign global variables from inside a function (not a good practice however).

  ```javascript
  // greeting.js
  let greetingMessage = 'Good Morning';

  function greetPeople() {
    console.log(greetingMessage);
  }

  function changeGreetingMessage(newMessage) {
    greetingMessage = newMessage;
  }

  changeGreetingMessage('Good Evening');
  greetPeople(); // logs 'Good Evening'
  ```

* Can be useful for application-wide configuration but generally discourage because it can cause bugs. In general, limit the scope of your variable as much as possible; smaller variable scopes limit the risk that an outer scope might misuse the variable.

#### Local Variables

* Cannot access variables that are declared within a function from outside the function.

  ```javascript
  function greetPeople() {
    let greetingMessage = 'Good Morning';
    console.log(greetingMessage);
  } 

  greetPeople();
  console.log(greetingMessage); // raises ReferenceError
  ```

* Parameters are local variables and used to pass information into functions. Parameters are initalized from the argument passed to the function. Parameters have local scope within a function.

    ```javascript
    function greetPeople(greetingMessage) {
      console.log(greetingMessage);
    }

    greetPeople('Good Morning');
    console.log(greetingMessage); // this is not accessible
    ```

* Local variables are only alive when function is invoked. They go away when the function that corresponds to their scope stops running. 

### Functions vs. Methods

So far all of the functions were invoked like below:

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
```

However, there is a different syntax for calling methods called method invocation. Method invocation is done this way:

```javascript
'xyzzy'.toUpperCase();
```

We call a function like above methods.

There is no easy way to determine whether you need to use a function or method call for any given function - you have to read the documentation or commit them to memory.


### Mutating the Caller

A method can permanently alter the object that invokes the method - it mutates the caller. 

This is a non-mutating method - leaves the caller unchanged:

```javascript
let name = 'Pete Hanson';
console.log(name.toUpperCase());
console.log(name);
```

Some methods mutate the object as shown below:

```javascript
let oddNumbers = [1, 3, 5, 7, 9];
oddNumbers.pop();
console.log(oddNumbers);
```

`pop()` method removes the last element from an array permanently. It also returns the last element that was removed so it can be saved into a different variable. 

Functions can also mutate their arguments.

```javascript
function changeFirstElement(array) {
  array[0] = 9;
}

let oneToFive = [1, 2, 3, 4, 5];
changeFirstElement(oneToFive);
console.log(oneToFive); // prints [9, 2, 3, 4, 5]
```

The above example changes the first index to 9. Not all functions however behave like this. Check below:

```javascript
function addToArray(array) {
  return array.concat(0);
}

let oneToFive = [1, 2, 3, 4, 5];
console.log(addToArray(oneToFive)); // logs [1, 2, 3, 4, 5, 0];
console.log(oneToFive); // logs [1, 2, 3, 4, 5]
```

The concat method creates a copy of the original and adds the `0` to the copy. It keeps the original array intact as shown above.

**Important Note**
  * One important note is that mutation only happens with arrays and objects but not for primitive values like numbers, strings, and booleans (this was also the case for Java).
  * Operations on immutable data types will always return a new value. 
  * Operations on mutable values may or may not return a new value and may or may not mutate data.

You must use documentation or commit to memory whether certain functions mutate the caller. 

### Function Composition

In function composition, you can use function calls as arguments to another function. Function calls always return a value (it can be `undefined`) but potentially lead to errors so it's important to know what values the functions return. 

Examples:

```javascript
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

console.log(add(20, 45));       // => 65
console.log(subtract(80, 10));  // => 70

function times(num1, num2) {
  return num1 * num2;
}

// A more complicated example of function composition:
console.log(times(add(20, 45), subtract(80, 10))); // => 4550
// 4550 == ((20 + 45) * (80 - 10))

```

### Three Ways to Define a Function

1. Function declaration - a notable property of function declaration is hoisting.

```javascript
function functionName(arguments) {
  // function body
}
```

2. Function expression - cannot invoke a function expression before it appears in your program. JavaScript allows you to assign functions to a variable. You are allowed to do this since JavaScript functions are first-class functions. Key faeature of first-class functions is that you can treat them as any other value. You can assign them to variables, pass them as arguments to other functions and return them from a function call.

```javascript
let greetPeople = function () {
  console.log('Good Morning');
}

greetPeople();
```

3. Arrow functions

```javascript
let greetPeople = () => console.log('Good Morning!');
greetPeople();
```

One of the difference is obviously syntatic but also has some properties that make them useful in the context of object-oriented programming - discussed later. 

Arrow functions have implicit returns if the function body contains one expressions:

```javascript
let add = (a, b) => a + b;
```