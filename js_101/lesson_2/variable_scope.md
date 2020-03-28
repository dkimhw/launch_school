

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