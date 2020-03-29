

## Variable Scope


### The Global Scope

You can think of global variables as variables that are available across your program. You can use them anywhere in the program, either globally or from inside a function or a block.

```javascript
let name = 'Julian';
console.log(name);

for (let counter = 0; counter < 3; counter += 1) {
  console.log(name);
}

console.log(name);
```

Here, `name` is available throughout the program.


### The Local Scope

Function scope and block scope.

#### Function Scope

Functions define a new scope for local variables. You can think of the scope defined by a function as an inner scope. Nested functions define nested scopes. A variable's scope is determined by where it is declared. 

1. Rule 1 - outer scope variables can be accessed by the inner scope

```javascript
let a = 1;         // outer scope variable

function logA() {
  console.log(a);  // => 1
  a += 1;          // a is reassigned to a new value
}

logA();
console.log(a);   // => 2  "a" was re-assigned in the inner scope
```

* The first is that inner scope can access outer scope variables. 
* The second is that you can change variables from an inner scope and have that change affect the outerscope (`a += 1`).
    * This means that when we instantiate variables in an inner scope - we have to be very careful that we are not accidentally re-assigning an existing variable in an outer scope
    * That's a big reason to avoid single-letter variable names

2. Rule 2: inner scope varaibles cannot be accssed in outer scope

```javascript
function aFunc() {
  let a = 1;
}

aFunc();
// Cannot access inner scope a
console.log(a); // ReferenceError: a is not defined
```

* The outer scope here is the global scope. `a` is scoped in the function (inner scope) - cannot access from an outer scope.


**Deep Dive into Function Scope**

* Note that a local variable only comes into existence when you call that function. There mere act of defining a function doesn't create any variables. 
* The function declaration does define the scope of the variables. When `aFunc` gets invoked, `a` will be created and accessible but immediately discarded once the function executes and returns to the main flow of the program
* We say `a` is in scope within `aFunc`.

3. Rule 3: Peer scopes do not conflict

```javascript
function funcA() {
  let a = 'hello';
  console.log(a);
}

function funcB() {
  console.log(a); // ReferenceError: a is not defined
}

funcA();
funcB();
```

* `let a = 'hello'` is defined in `funcA`. Other functions cannot reference variables declared in other functions so `funcB` cannot access `a`.
* We can re-use variable name `a` in two different scopes without them affecting each other.


4. Rule 4: Nested functions have their own variable scope

Nested functions follow the same rules of inner and outer scoped variables. When dealing with nested functions, our usage of what is "outer" or "inner" is relative. We will switch vocabulary and talk about "first level", "second level", and "third level".

```javascript
let a = 1;           // first level variable

function foo() {     // second level
  let b = 2;

  function bar() {   // third level
    let c = 3;
    console.log(a);  // => 1
    console.log(b);  // => 2
    console.log(c);  // => 3
  }

  bar();

  console.log(a);    // => 1
  console.log(b);    // => 2
  console.log(c);    // => ReferenceError
}

foo();
```

* The one surprising thing might be that we can define functions within other functions in JavaScript. This is not true of all languages. It's likely that you've used this feature of JavaScript before. If you've used an array iteration method such as forEach inside a method, you've defined a function inside another function

```javascript
function logElements(array) {
  array.forEach(function(element) {
    console.log(element);
  });
}

logElements([1, 2, 3]);
```

* We are passing a function to the `forEach` method - this is a function definition within another function. JavaScript is unique in that you can define function inside other functions. 

5. Rule 5: Inner scope variables can shadow outer scope variables

```javascript
[1, 2, 3].forEach(number => {
  console.log(number);
});
```

* Here - `number` is a parameter that the callback function we pass into `forEach` expects. It represents each element as the `forEach` method iterates through the array.
* Parameters are also local variables and the same scoping rules apply to them. Suppose we had a variable named `number` in the outer scope - we know that the inner scope has access to the outer scope so we would essentially have two local variables in the inner scope with the same name. This is called variable shadowing. It prevents access to outer scope local variable.

```javascript
let number = 10;

[1, 2, 3].forEach(number => {
  console.log(number);
});
```

* Here, `console.log(number)` - will use the parameter `number` and discard the outer scoped local variable. Variable shadowing also prevents us from making changes to the outer scoped `number`.

Variable shadowing is also not limited to callback functions. Whenever you have one scope nested within another, variables in the inner scope will shadow variables in the outer scope with the same name.

```javascript
let a = 1;

function doit(a) {
  console.log(a); // => 3
}

doit(3);
console.log(a); // => 1
```

You want to avoid variable shadowing since it is never what you intend. Choosing long and descriptive variable names is one simple way to ensure that you do not run into any of these weird scoping issues. 


#### Block Scope

In JavaScript, blocks are segments of code statements grouped by curly braces (`{}`). Constructs like `if/else` and `for` and `while` loops define new block scopes. The rules for block scopes are identical to those for function scopes.

1. Outer blocks cannot access variables from outer scopes.
2. Inner blocks can access variables from outer scopes.
3. Variables defined in an inner block can shadow variables from outer scopes.

Quick examples:

```javascript
if (true) {
  let a = 'foo';
}

console.log(a); // ReferenceError
```

```javascript
let a = 'foo';

if (true) {
  console.log(a); // => 'foo'
}
```

```javascript
function aFunc() {
  let a = 'foo';

  if (true) {
    let b = 'bar';
    console.log(a); // => 'foo'

    if (true) {
      let c = 'baz';
    }

    console.log(a); // => 'foo'
    console.log(b); // => 'bar'
    console.log(c); // => ReferenceError
  }

  console.log(a); // => 'foo'
  console.log(b); // ReferenceError
  console.log(c); // ReferenceError
}

aFunc();
```