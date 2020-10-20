## JS 109 Study Guide



### Variable Assignments (assignment and reassignments)

#### Key Concepts:

* Variables store information that a program must reference or manipulate - they also allow programmers to label the data in memory so that it can be accessed later

* How does JavaScript assign values?

  * Assigning a value to a variable is called variable initialization. 

    * `let name = 'David';`
    
  * There are three basic ways to create a variable

    * `let var = 0;`

      * Variables declared with 'let' are limited to the scope of a block statement - if initialized in code block , cannot be accessed outside it.

    * `const var = 16;`
      
      * For values that will not be updated and are constant we want to use `const`. JavaScript will prevent us from updating that variable or replacing it. It will also denote to other programmers that this variable is a constant and will not be updated in our code (better readability and understanding)
      * Once you initialize a constant you cannot give it another value. Constants store values that remain the same throughout the execution of a program.
      
    * `var hello = "Hello";`

      * `var` does not have block scope - only function scope
        * So this becomes possible

      ```javascript
      if (true) {
        var b = 2;
      }
      
      console.log(b); // prints 2
      ```

    

  * **Always declare variables with `let` and `const`. JavaScript has bizarre rules when working with undeclared variables. The most notable one is that all undeclared variables are global variables no matter where this undeclared variable was created. They ignore block and function scope.**

    * What does this mean?
  
  ```javascript
  if (true) {
    a = 1; // undeclared variable - operates at the global scope
  }
  
  console.log(a); // print 1 
  
  if (true) {
    let c = 3;
  }
  
console.log(c); // this will fail - ReferenceError
  ```

  ```javascript
function x() {
    hello = 'boo';
  }
  
  x();
  
  console.log(hello); // will actually print 'boo'
  ```
  
  
  
  * One way to update/reassign variables? Note that reassignment just changes what the variable references - does not mutate the value that it was referencing before
  
    * `name = 'Patricia';`




### Variable Scope

#### Key Concepts:

* Main Definition:

  * A variable's scope determines where it is available to use in a program. **The location where you declare a variable determines its scope.**

* What scopes are there?

  * Global Scope: Global variables are variables that are available across your program - you can use it anywhere in the program - either globally or from inside a function or a block

    ```javascript
    // name is available throughout the program
    let name = 'Julian';
    console.log(name);
    
    for (let counter = 0; counter < 3; counter += 1) {
      console.log(name);
    }
    
    console.log(name);
    ```

    

  * Function scope: Functions define a new scope for local variables. You can think of the scope defined by a function as an inner scope. 

    * Rule #1: Outer scope variables can be accessed by the inner scope

      * You can change variables from an inner scope and have that change affect the outer scope variable
      * This means that when we instantiate variables in an inner scope - we have to be extremely careful that we are not accidentally re-assigning an existing variable in an outer scope.
        * That's a huge reason why we should avoid single-letter variable names.

      ```javascript
      let a = 1;         // outer scope variable
      
      function logA() {
        console.log(a);  // => 1
        a += 1;          // a is reassigned to a new value
      }
      
      logA(); // => 1
      console.log(a);   // => 2  "a" was re-assigned in the inner scope
      ```

      

    * Rule #2: Inner scope variables cannot be accessed in outer scope

      * Outer scope in this case is the global scope.
      * Note that a local variable only comes into existence when you call that function - the mere act of declaring a function does not create any variable.
      * When `aFunc()` is called - `a` will be created and accessible at the function scope but immediately discarded once the function executes and returns to the main flow of the program

      ```javascript
      function aFunc() {
        let a = 1;
      }
      
      aFunc(); // Cannot access inner scope a
      console.log(a); // ReferenceError: a is not defined
      ```

      

    * Rule #3: Peer scopes do not conflict

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

      

      * `let a = 'hello'` is defined in `funcA()`. Other functions cannot reference variables declared in other functions so `funcB` cannot access `a`.
      * We can re-use variable name `a` in two different scopes without them affecting each other.

    * Rule #4: Nested functions have their own variable scope

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

      

      * Nested functions follow the same rules of inner and outer scoped variables. 
      * The one surprising thing might be that we can define functions within other functions in JavaScript. This is not true of all languages. It's likely that you've used this feature of JavaScript before. If you've used an array iteration method such as forEach inside a method, you've defined a function inside another function

    * Rule #5: Inner scope variables can shadow outer scope variables

      ```javascript
      let number = 10;
      
      [1, 2, 3].forEach(number => {
        console.log(number); // Here the local variable number is shadowing outer scope variable number
      });
      ```

      ```javascript
      let a = 1;
      
      function doit(a) {
        console.log(a); 
      }
      
      doit(3); // => 3
      console.log(a); // => 1
      ```

      

      * Here, `console.log(number)` will use the parameter `number` and discard the outer scoped local variable of the same name. This is called variable shadowing - prevents access to outer scope local variable. 
      * Variable shadowing also prevents us from making changes to the outer scoped *`number`*.
      * You want to avoid variable shadowing since it is never what you intend. Choosing long and descriptive variable names is one simple way to ensure that you do not run into any of these weird scoping issues. 
      
    * Things to note with objects:

      * Objects like arrays are passed into functions as references - that is - the function sees a pointer to the original object.
    * A function can use an object pointer to mutate that object.
      
      * If the function somehow received a copy of the object - it would lose the ability to mutate the original object; it can only mutate the copy.
    * Reassigning a variable that points to an object merely changes what the variable points to - it does not change the value of the original object.
      
    * Things to note for primitives:

      * Primitive values are immutable values that get stored in a variable - unlike objects - we don't store pointers to the primitive values in the variable.
    * **Primitive values are always immutable - thus no matter what happens inside the function - the original value passed to the function never changes.**
      
      * When we pass object into functions as arguments, we pass a pointer for the object into the function - when we pass primitive values as arguments - we pass copy of the primitive value. 

  * When defining a function (parameters), when invoking a function (arguments). During execution, JavaScript makes the arguments passed to a function available to the function as local variables with the same name as the function's parameters.

  * Block scope: In JavaScript, blocks are segmens of code statements grouped by two curly braces. Constructs like `if`, `for`, `while` loops define new block scopes. The rules for block scopes are identical to those for function scopes

    * Outer blocks cannot access variables from inner scopes

    * Inner blocks can access variables from outer scopes

    * Variables defined in an inner block can shadow variables from outer scopes

    * Some quick examples:

      ```javascript
      // cannot access inner scope
      if (true) {
        let a = 'foo';
      }
      
      console.log(a); // ReferenceError
      ```

      ```javascript
      // can access outer scope
      let a = 'foo';
      
      if (true) {
        console.log(a); // => 'foo'
      }
      ```

      ```javascript
      // More complicated problem
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

      

* How do variables interact with function defintion?

  * `let`

    * Has block scope. A block is a sequence of JavaScript code between a pair of opening and closing curly braces (if, for, while statements).

    ```javascript
    if (1 === 1) {
      let a = 'foo' // block scope
    }
    
    console.log(a); // Cannot access a (ReferenceError)
    ```

    

    * JavaScript performs lookup to see if the variable exists outside of the block & function if it doesn't find it in the local variable
      * You can see below that within the block scope - it has access to the global variable `a`. 

    ```javascript
    let a = 'foo';
    if (1 === 1) {
      a = 'bar';
    }
    
    console.log(a); // Prints bar
    ```

    

    * JavaScript will use the local variable instead of the global one if it exists:

    ```javascript
    let a = 'foo';
    if (1 === 1) {
      let a;
      a = 'bar' // updates the local block variable `a` and not the `a` - global variable
    }
    
    console.log(a); // foo
    ```






### Variables as Pointers

#### Key Concepts:

* Variables are pointers or references to a memory location. Variables reference a value in memory.

  * Reassignment - you can change which value that a variable references by reassigning the variable:

    ```javascript
    let myVariable = 'Hello, World';
    myVariable = 23;
    ```

    

* Primitives & Variables

  * Reassigning a value does not affect any other variables that happen to have the same value. This is why `b` remains unchanged. `a` and `b` are independent - reassigning one does not affect the other
  * Variables that have primitive values store those values in the variable. When you assign a new value to a variable, JavaScript changes the variable's content to the new value.

  ```javascript
  let a = 5;
  let b = a; // not a reference. A new "5" for b
  
  a = 8
  
  a // 8
  b // 5
  ```

  

* Objects & Variables

  * Reassignment does not mutate the variable to the left of the assignment operator

  * Instead - it changes the variable in such a way that it refers to the object on the right. Each variable has a value and reassigning values does not affect any other variables that happen to have the same value.

    ```javascript
    let a = [1, 2];
    let b = a;
    
    b = [1, 3]; // b gets a new pointer that points to [1, 3] now
    
    console.log(a); // [1, 2]
    console.log(b); // [1, 3]
    ```

    

* Does that mean that arrays and other objects get stored directly inside variables like primitives?

  * Not really:

    ```javascript
    let e = [1, 2];
    let f = e;
    e.push(3, 4);
    
    console.log(e); // [1, 2, 3, 4]
    console.log(f); // [1, 2, 3, 4]
    ```

    

  * This happens because variables that store objects are references to the memory locations that was storing `[1, 2]`. 

  * When `let f = e` runs - both `f` and `e` both contain the same pointer value. When `e.push(3, 4)` runs - it uses the pointer to access and mutate the array by appending `3` and `4` to its original value. Since `f` also points to that same array, both `e` and `f` reflect the updated contents of the array.

* Same here - we are not reassigning a whole array. We are reassigning a specific element in the array. This code does not mutate the element but it does mutate the array. 

  ```javascript
  let g = ['a', 'b', 'c']
  let h = g
  g[1] = 'x' // mutating expression
  g // [ 'a', 'x', 'c' ]
  
  h // [ 'a', 'x', 'c' ]
  ```

* When working with nested collections and variables reference inner collections directly

  * Examples:

    ```javascript
    let a = [1, 3];
    let b = [2];
    let arr = [a, b];
    arr // => [ [ 1, 3 ], [ 2 ] ]
    
    a[1] = 5;
    arr; // => [ [ 1, 5 ], [ 2 ] ]
    
    arr[0][1] = 8;
    arr; // => [ [ 1, 8 ], [ 2 ] ]
    a;   // => [ 1, 8 ]
    
    arr[0] = 'This will only change in arr'
    console.log(arr);
    console.log(a)
    ```

  

* The value of `arr` changed because `a` still points to the same Array object that `arr[0]` is pointing to. When we modified it by replacing `3` with `5`, we were modifying the same Array object.

* What if we modify the first array in `arr`? Is it different than modifying `a` directly?

  * It produces the same result as modifying `a` directly. In both cases, we are modifying the object that `a` and `arr[0]` point to - we now have two ways to reference the same object. 
  * In the first example, the object was modified through `a`. In the second example the object was modified through `arr[0]`.
  * `a` and `arr[0]` are, in fact, two different ways to reference the same object. The assignment `arr[0][1] = 8` is equivalent to `a[1] = 8`.



### Primitive Values, Types, and Type Conversions

#### Key Concepts:

* Primitive Values

  * Primitive values are pass by value. What does that mean? Pass by value means that we pass along a full copy of that value when we assign or pass along primitive values. If you change one variable that holds a primitive value - it does not change other variables with the same value

  ```javascript
  let a = 4;
  let b = a;
  // At this point b and a point to two different values of 4 - they just happen to share the same value
  
  a = 7; // Reassign a
  
  console.log(a) // prints 7
  console.log(b) // prints 4
  ```



* Data Types

  * Every value in JavaScript has a data type - to check what data type a value is:

  ```javascript
  console.log(typeof 1);
  console.log(typeof 'Patricia');
  ```

  

  * Primitives

    * String

      * Strings are sequence of characters (one of the most common forms of data).

      *  `let name = "David"; `

      * Explain string interpolation:

        * String interpolation is replacing placeholders with values in a string literal
        * Example:

        ```javascript
        let name = 'David';
        console.log(`Your name is ${name}`);
        ```

        

    * Number

      * Represents both integers and decimals

    * Boolean

      * Booleans allows you to control the flow of your program . Allows programmers to use data to check whether expressions evaluate to `true` or `false`:

      ```javascript
      if (5 === 5) {
        console.log('Print this!');
      }
      ```

      

      * Two values:
        * `true`
        * `false`

    * Undefined

      * In JavaScript - used to express the absence of a value
        * For example, `console.log` writes a value to the console but it does not have a concrete return value - thus it returns `undefined`
      * `undefined` also occurs when you initialize a variable without giving it an explicit value.

      ```javascript
      let foo;
      // undefined
      ```

      

    * Null

      * `null` represents the intentional absence of a value (emptiness or nothing).
      * Unlike `undefined` - you need to explicitly use `null` - `undefined` can arise implicitly.
      * `null` is an object - goes back to when JavaScript was first developed and was preserved through the years - fixing this would break too many applications.

* Other Data Types

  * Arrays

    * Definition: Arrays are **ordered** lists - may contain strings, numbers, booleans, and even objects you create (zero-indexed)
    * To access specific elements:

    ```javascript
    let x = ['Hello', true, 10];
    console.log(x[1]);
    ```

    

  * Objects

    * Objects are dictionaries or hashmaps where data is stored in a collection of key-value pairs. This is useful if you need to retrieve data by a specific key (like name for example)
    * Example:

    ```javascript
    let dict = { dog: 'barks', cat: 'meows' }
    console.log(dict['dog']); // returns 'barks'
    ```

    

* Explicit Type Conversions

  * Converting to Numbers

    * `Number` function coerces a string to a number (there are other functions that help you explicitly convert data types):
    ```javascript
      console.log(typeof Number('1'));
    ```
    
      
    
    * `Number()` converts empty strings and strings with only whitespace to `0`  - everything else a number or `NaN`.
      
    * What might happen if you were to convert from one data type (let's say "Patricia") to another type like (Number) that doesn't have a way to really convert:
      
      ```javascript
        console.log(Number('Patricia')); // NaN
      ```
      
        
      
        * It doesn't crash your code - instead it just returns `NaN`. This happens often in JavaScript - the code simply fails silently and lets the programmer determine whether an error is actually a problem.
      
    * `parseInt` & `parseFloat` - always returns a number when the first character of the string value is a digit or the first two characters are a sign and a digit.
    
    ```javascript
      console.log(parseInt('12xyz')); // 12
      console.log(parseInt('3.14')); // 3
      console.log(parseInt('hello3.14')); // NaN
      
      parseInt('12oz') // 12
      parseInt('+12oz') //12
      
      // Same for parsefloat
      console.log(parseFloat('12.5foo')); // 12.5
    ```
    
    
    
    * What about other data types to Number? **No need to memorize this** - just that you need to know that these inconsistencies exist (pretty random assignment for what is not a number and what is a "0") and make sure to check when necessary.
    
      ```javascript
        Number({}) // NaN
        Number([]) // NaN
        Number([4]) // 4
        Number([undefined]) // 0
        Number([1, 2, 3]) // NaN
        Number(undefined) // NaN
        Number(null) // 0
      ```
    
      
    
  * You can use `+` operator to coerce a value to number - it works like `Number()` function but more concise
    
    ```javascript
      +"" // 0
      +'2.3' // 2.3
    ```
    
    
    
    * However - one downside is lack of clarity. `Number()` function makes your intent very clear and leaves no room for ambiguity that can sometimes arise with unary operators
    
  * Coercing Values to Strings
  
    * `toString()`
  
      * Can call on all data types except `null` and `undefined` - illegal to call methods on these types
  
        ```javascript
        let number = 42; // note that javascript does not let you call a method directly on a number literal - it think it's a part of floating number
        number.toString(); // 42.toString(); - not allowed
        ```
  
        
  
      * What about array?
  
        ```javascript
        [1, 2, 3].toString() // '1,2,3'
        ```
  
        
  
    * `String()`
  
      * One advantage of `String()` is that it works on `null` and `undefined` - useful because you can avoid program-halting errors that `toString()` can lead to.
  
        ```javascript
        String(42) // '42'
        String([1, 2, 3]) // '1,2,3'
        String({ a: 'foo', b: 'bar' }) // '[object Object]'
        String(null) // 'null'
        String(undefined) // 'undefined'
        ```
  
        
  
    * Template literals
  
      * In literals - JavaScript implicitly coerces interpolation expressions like ${something} to string values. So don't use `String()`
  
* Implicit Type Conversions

  * Definition: It is when JavaScript coerces one of the values to match the other when you are performing an operation involving values of two different types.

    * Note that it is poor coding to rely on implict coercion - you should be clear and explicit if you want to coerce a value.

  * Implicit Coercion with the `==` operator

    * Behavior is very different when the values you are comparing have different types. Happens often when comparing a string with integer:

      ```javascript
      '1' === 1 // false
      '1' == 1 // true
      ```

      

      * The strict equality operator compares the two values directly - but the non-strict equality operator forces string '1' into a number then compares it with the 1 on the right side.
      * Such operator should be unexpected (string should not equal a number) - always use `===` exclusively.

    * Booleans - behavior is erratic:

      ```javascript
      1 === true // false
      3 === true // false
      0 === false // false
      
      // However:
      1 == true // true
      3 == true // false
      0 == false // true
      ```

      

      * The non-strict operators coerces the values to the same type before comparing them so it can lead to really weird behaviors. You want strict coercion because behavior is simple and straightforward. The data type and value must be same for `===` to return true between two values.

    * Same for `undefined` and `null`:
  
      ```javascript
    undefined == null // true
      ```

      

    * What about objects?

      * Only considers two objects equal only when they are of the same object
  
        ```javascript
        let arr = []
        arr == [] // false
      arr == arr // true
        ```

        

      * When comparing objects and primitive, `==` coerces the object to a primitive before making the comparison
  
        ```javascript
        '' == {} // false
        '[object Object]' == {} // true - converts {} to [object Object]
        [] == '' // true
      [] == 0 // true - '' == 0 is true
        ```

        

    * Relational Operators

      * No strict versions for these operators - when both operands are strings - JavaScript compares them lexicographically. Otherwise, JavaScript converts both operands to numbers before comparing them
  
        ```javascript
        11 > '9';       // true -- '9' is coerced to 9
        '11' > 9;       // true -- '11' is coerced to 11
        123 > 'a';      // false -- 'a' is coerced to NaN; any comparison with NaN is false
        123 <= 'a';     // also false
        true > null;    // true -- becomes 1 > 0
        true > false;   // true -- also becomes 1 > 0
        null <= false;  // true -- becomes 0 <= 0
      undefined >= 1; // false -- becomes NaN >= 1
        ```

        

  * Best Practices:
  
    * Always use explicit type coercions
    * Always use strict equality operators





### Expressions and Return Values (console.log vs return)

#### Key Concepts:

* Expression

  * Definition: Expression is anything that JavaScript can evaluate to a value even if that value is `undefined` or `null`.
  * Some examples:
    *  (`7 + (5 + 2)`) is an expression which returns `14`
    
    * When you run *`console.log()`* you will notice that it returns *`undefined`* - this is the evaluated value of your expression so it returns *`undefined`* while the first example returns *`14`*.
    
      ```javascript
        7 + (5 + 2); // 14
        console.log(5 + 2); // undefined
      ```
    
      


  * Expressions do not have to involve operators - any value is an expression that evaluates to itself

    ```javascript
    "hi"
    ```

  * Statements always evaluate as `undefined` - they are not expressions and different in that you cannot use a statement as part of another expression:


```javascript
let foo; // this is a statement, it is declared but not initalized
console.log(5 * let name); // This is not valid because `let name` is not an expression

console.log(let name)
// SyntaxError: missing ) after argument list

let myNumber = 3; // returns undefined because of "let" syntax here
myNumber = 4; // this is a statement and an expression

// The assignment of 3 to myNumber is an expression
// let with a variable name and optional assignment formas JS statement
console.log(let myNumber = 3 * 3); // This is not allowed
```



* Another example:

  ```javascript
  let foo = false; // returns undefined
  let bar; // returns undefined
  console.log(bar = false) // returns false and can be printed out
  ```
  
  * The return values are different since the `let` statement always returns `undefined`. But assignment expressions that are not part of a statement return the new value for the variable. 

* Expressions versus Statements

  * Statements: Refers to a syntactic unit of code that expresses an action for the computer to perform.
  
    * Examples:
  
      ```javascript
      theFinalValue = firstValue + secondValue; // statement & expression
      ```
  
      
  
    * This code is a syntactic unit that expresses an operation to be carried out. Therefore, it is a statement by that definition. 
  
    * Note that the assignment statement is also an **expression**. In fact - there are 4 expression in the statement above:
  
      ```javascript
      firstValue;
      secondValue;
      firstValue + secondValue;
      theFinalValue = firstValue + secondValue;
      ```
  
      
  
    * Another common statement is a simple function or method call. For instance:
  
      ```javascript
      console.log("Hello");
      
      // console - expression
      // console.log - expression
      // "Hello" - expression
      // console.log("Hello") - expression
      ```
  
      
  
    * **Important point to review:** Expressions can be part of a statement as shown above but not all statements are expressions (because not everything in the code resolves to a value - expressions are code that resolve to a value)
  
      * What is an example of that?
      * JavaScript distinguishes expressions and statements. A statement is an instruction or an action. Remember conditions with `if`, loops with `while` and `for` — all those are statements, because they just perform actions and control actions, but don't become values. Same with `let`.
  
* Printing (logging) versus returning values

  * When we invoke `console.log` method, we are telling JavaScript to write something to the console (in Node, browser, developer tools). The term log is a synonym for printing or displaying something on the console.
  
  * **Expressions do something but they also return or evaluate to a value.** The returned value may not always be what you expect though:
  
    ```JavaScript
    console.log("Howdy");
    // logs "Howdy"
    // return `undefined`
    ```
  
    
  
    * Here `console.log` displayed "Howdy" on the console, but then it showed the word `undefined` in a different color or dimmer brightness. That extra output is the return value of the expression, and `undefined` tells you that `console.log` returned nothing. 
  
  * Another example:
  
    ```javascript
    let a = console.log("Howdy");
    console.log(a); // undefined
    ```
  
    
  
    * The value returned by `console.log("Howdy")` is `undefined` so that is the value to which `a` gets assigned. Therefore, `a` on the second line evaluates to `undefined`, and `node` shows it as the return value.
  
* Return Values

  * **Expressions always return a value.** Some functions perform an action but will not return anything `console.log` for example. Other functions will not print anything but perform some operation and return a value.





### Pass By Value vs. Pass By Reference

#### Key Concepts:

* JavaScript is a hybrid of Pass by Value and Pass by Reference

  * "how passing an argument into a function may or may not permanently change the value that a variable contains or points to"

* Pass by Value

  * Definition: Pass by value means that when you use a variable to pass an argument to the function, the function cannot do anything that sets the original variable to a different value. No matter what happens in the function - the variable will still contain the same value that was passed to the function.

  * When you pass primitive values to functions - JavaScript is pass by value (they are immutable). No operation performed on a primitive value can permanently alter the value.

    * When you pass a primitive value like Number - no matter what the function does with it - the value you passed into the function will not change

      ```javascript
      let a = 5
      
      function add(num) {
        num = num + num;
        console.log(num); // 10
      }
      
      add(a);
      console.log(a); // 5
      
      function add2(a) {
        a = a + a; // "a" here is a local copy of "a" - not the global variable "a" we declared at the top.
        console.log(a); // 10
      }
      
      add2(a);
      console.log(a); // 5
      
      
      ```

      

  * Example:

    ```javascript
    function changeName(name) {
      name = 'bob';
    }
    
    function anotherFunction() {
      let name = 'jim';
      changeName(name);
      console.log(name); // logs jim
    }
    
    anotherFunction(); // prints jim
    ```

    

    * Note, first that, the code has two different `name` variables. One is in the scope of the `changeName` function while the other is in `anotherFunction`'s scope.  These two names are in separate scopes and have no direct relationship with each other. 
    * You can see above that passing the string to `changeName` did not change the contents of the `name` variable. 
    * Passing a primitive variable to a function parameter means that we make a new local instance of the variable and copy the value - any changes that we make to the argument (when the function is invoked) will leave the original variable unaffected. Reason for that is that primitive values are immutable

  * Another example:

    ```javascript
    function cap(name) {
      name.toUpperCase();
    }
    
    let myName = 'naveed';
    cap(myName);
    console.log(myName); // => 'naveed' - remains unchanged
    ```

    

* Pass by Reference

  * JavaScript is pass by reference **and pass by value** with objects (like array). When an operation within the function mutates its argument - it affects the original object 

  * Example:

    ```javascript
    function addNames(arr, name) {
      arr.push(name);
    }
    
    let names = ['bob', 'kim'];
    addNames(names, 'jim');
    console.log(names); // [ 'bob', 'kim', 'jim' ]
    ```

    

  * But if there is no mutation in the function like using an array function that returns a **new** array instead of mutating the passed in array - you can see that no changes occur on the passed in argument:

    ```javascript
    function addName(arr, name) {
      arr = arr.concat([name]);
    }
    
    let names = ['bob', 'kim'];
    addName(names, 'jim');
    console.log(names); // ['bob', 'kim']
    ```

    

* Remember that reassignment is not a destructive operation:

  ```javascript
  function addName(arr, name) {
    arr = arr.concat([name]);
  }
  
  let names = ["bob", "kim"];
  addName(names, "jim");
  console.log(names); // => [ 'bob', 'kim', ]
  ```

  

* Return value

  * Values returned by functions can be pass-by-value or pass-by-reference as much as we saw with arguments

    ```javascript
    function foo(number) {
      return number;
    }
    
    let number = 1;
    let newNumber = foo(number);
    
    function bar(array) {
      return array;
    }
    
    let array = [1, 2, 3];
    let newArray = bar(array);
    console.log(array === newArray); // true
    ```

    

  * With the `foo` function - we are passing a primitive value `1` into the function. As with all primitive values - the value is passed by value, so `foo` recieves a copy of the original value. It then returns the value of the argument it received which is yet another new value. When all that code runs - both `number` and `newNumber` have a value of `1` but the two variables are not linked in any way - the values are different numbers that just happen to be equal

  * In the `bar` function, we are passing an array `[1, 2, 3]` into the function. As with other arrays and objects, `bar` recieves a pointer to the array. it then returns another reference to the same array to the calling code. When all is done both `array` and `newArray` point to the same array in memory.

* Assignments

  ```javascript
  number = 1;
  newNumber = number; // is this pass by value? Yes
  
  array = [1, 2, 3];
  newArray = array; // is this pass by reference? Yes
  ```

  

  * Simple assignments in JavaScript work a lot like pass-by-value and pass-by-reference
  * In the above code, `number` and `newNumber` have the same values but those values are distinct - if you increment one - it will not change the other. Thus, it looks a lot like pass-by-value
  * Conversely, `array` and `newArray` point to the exact same array. If you use `array` to modify the array - the array reference by `newArray` also changes. Looks a lot like pass-by-reference
  * The similarity is just for you. It is incorrect to speak of assingment in terms of pass-by-value or pass-by-reference. In JavaScript, those terms only apply when calling and returning from functions, not assignments. 

* More references:  https://launchschool.com/lessons/64655364/assignments/33123902



### Control Flow + (comparison) + (Truthiness)

#### Key Concepts

* Conditionals

  * Conditionals help control the flow of your program - depending on how the condition is evaluated - different code can run in your program

    ```javascript
    if (a === '3') {
      console.log("a is 3");
    } else if (a === '4') {
      console.log("a is 4");
    } else {
      console.log("a is neither 3, nor 4");
    }
    
    if (x === 3)
      console.log('x is 3');
      console.log('x is an odd number'); // this is not part of the if statement
    ```

    

* Comparisons (light explanation)

  * Comparison Operators:

    * `>` - greater than (loose comparison)

      * So things like `false > null`, `undefined >= 1` are all valid in JavaScript

    * `>=` - greater than or equal to  (loose comparison)

    * `<` - less than  (loose comparison)

    * `<=` - less than or equal to  (loose comparison)

    * `===` - strict equality operator 

    * `!==` - strict inequality operator

    * `==` - loose equality operator  (loose comparison)

    * `!=` - loose inequality operator (loose comparison)

      ```javascript
      console.log(5 != 5); // same result as !==
      console.log(5 != '5'); // this results in false. With `===` it would be true. 
      ```

      

  * Logical Operators

    * `&&`

      ```javascript
      if((4 === 4) && (5 === 5)) {
        console.log(true);
      }
      ```

      

    * `||`

      ```javascript
      if((4 === 5) || (5 === 5)) {
        console.log(true);
      }
      ```

      

    * `!` - not operator

      ```javascript
      console.log(!true);
      console.log(!false);
      ```

      

    * `!!` - not an operator but coerces a value into boolean values

      ```javascript
      !!3 // true
      !!'' // false
      ```

      

  * Short Circuits

    * JavaScript employs short circuit evaluation meaning that as JavaScript evaluates expression it will take into consideration the overall return result.

    * When evaluating `&&` operator, if any one of the condition returns `false`, the entire expressions must be false as well. JavaScript terminates as soon as it finds one of the expression is false:

      ```javascript
      // In this expression, JavaScript does not need to evaluate the last two boolean values.
      console.log(true && true && false && true && false);
      ```

      

    * Same exact logic for `||`:

      ```javascript
      // Soon as the second expression returns true - the entire expression "false || true || false" must return true
      console.log(false || true || false);
      ```

      

* Truthiness (**Understand false and true vs. falsy and truthy**)

  * Definitions:

    * **falsy**: refers to values that evaluates as false.
      * Not the same thing as being actually the boolean value of `true`
    * **truthy**: refers to values that evaluates as true.
      * Not the same thing as being actually the boolean value of `false`

  * Notice that we use "evaluates as false" or "evaluates as true". Saying that an expression returns `true` or `false` is not the same as saying that it returns a truthy or falsy value, or that it evaluates as true or false. The terms true and false refer to the Boolean values `true` and `false`. 

  * Truthiness means that we can use any logical expression in a conditional statement because JavaScript considers any non-zero (and non-NaN) numbers to be truthy. It does not mean that `num` is equal to `true`:

    ```javascript
  let num = 5;
    // num "evalutes as true"
  if (num) {
      console.log("valid number");
    } else {
      console.log("error!");
    }
    
    // Just because num evaluates as true, it does not mean it is `true`
    console.log(num === true); // false
    ```
    

    
  * The use of truthy and falsy values leads to some surprising code:

    ```javascript
  let name;
    if (name = getNameFromUser()) {
    	console.log(`Hi ${name}`);
    } else {
      console.log("you must enter your name!");
    }
    ```
    
    
    
    * `getNameFromUser` solicits and returns the user's name and returns an empty string if the user does not enter a name. Since an empty string is falsy - we can test for a missing name by evaluating the assignment `name = getNameFromuser()` - if the user did not enter her name the expression evaluates as false, and the code logs `you must enter your name!`
    
  * Any value in JavaScript can be coerced into a boolean value which is why you don't always need an expression that evaluates to true or false.

    * For example: `if` statement does not need something like `5 === 5`. Thus, you can use **any** expression in a conditional statement.

    * Expression evaluates to true or false.

      ```javascript
      a = 5;
      
      if (a) {
        console.log("this is true!");
      } else {
        console.log("this will not run!");
      }
      ```

      

  * In JavaScript, `0` is false:

    ```javascript
    a = 0;
    
    if (a) {
      console.log("0 is false when coerced to boolean");
    } else {
      console.log("0 is false");
    }
    ```

    

  * JavaScript treats the following values as false:

    * `false`
    * `0`
    * `''` (empty string)
    * `undefined`
    * `null`
    * `NaN`
      * `NaN` is still a numeric data type - just means undefined numerical result
      * `typeof NaN` will return "number"
      * Must use `isNaN`.

  * Everything else will evaluate to true

* Operator Precedence

  * JavaScript has a set of precedence rules it uses to evaluate expressions that use multiple operators and subexpressions

  * List of comparison operations from highest precedence to lowest:

    * *`<=`*, *`<`*, *`>`*, *`>=`*
    * *`==`*, *`!=`* 
    * *`&&`*
    * *`||`*

  * Use parantheses - best practice because it's hard to read purely from precedence. Adding parantheses makes expressions much, much easier to understand

    ```javascript
    let x = false;
    let y = false;
    let z = true;
    
    // Much harder to understand
    if (x || y && z) {
      console.log('This will not print');
      // Note that JavaScript evaluates y && z first
    } else {
      console.log('This will print!');
    }
    
    // Easier to understand
    if ((x || y) && z) {
      // Because of the parenthesis x || y is evaluated
      console.log('This will print');
    }
    ```

    

* Ternary Operator

  * Examples:

    ```javascript
    1 === 1 ? console.log("This is true!") : console.log("This is not true!");
    
    let x = true;
    let message = x ? 'this is true' : 'this is not true';
    ```

    

* Switch Statement:

  * Great for comparing single value for strict equality:

    ```javascript
    let a = 5;
    
    switch (a) {
    case 5:
      console.log('a is 5');
      break;
    case 6:
      console.log('a is 6');
      break;
    default:
      console.log('a is neither 5, nor 6');
      break;
    }
    ```

    

  * `break` statement in each *`case`* is crucial. Without that syntax, execution "falls through" to the next *`case`* clause. This behavior is very undesirable in most situations (introduces unpredictability and unreadability and potential bugs to a code base).

    ```javascript
    let a = 5;
    
    switch (a) {
    case 5:
      console.log('a is 5');
    case 6:
      console.log('a is 6');
      break;
    default:
      console.log('a is neither 5 nor 6');
    }
    // It logs:
    // a is 5
    // a is 6
    
    // Situation where it is okay
    switch (a) {
      case 5:
      case 6:
      case 7:
        // executed if a is 5, 6, or 7
        console.log("a is either 5, 6, or 7");
        break;
      case 8:
      case 9:
        console.log('a is 8 or 9');
        break;
      default:
        console.log('a is not 5, 6, 7, 8, or 9');
        break;
    }
    ```

    

### Function Definition and Invocation and Basic Info

#### Key Concepts

* "function defintion and function invocation"

  * The code inside a function is not executed when the function is defined.
  * The code inside a function is executed when the function is invoked - executes the code inside a function

* "function declarations, function expressions, and arrow functions"

  * Function definition (also called function declaration ) consists of the `function` keyword followed by:
    * The name of the function
    * A list of parameters to the function
    * The JavaScript statements that define the function enclosed by curly brackets

* Basic Definitions

  * Function allows programmers to make code shorter and reusable.

  * Parameters - local variable names between `()` . Arguments are the values you pass into the function for each of those parameters.

    ```javascript
    function add(left, right) { // left & right are parameters
      return left + right;      // left & right are arguments
    }
    
    let sum = add(3, 6);        // 3 and 6 are arguments
    ```

    

    * You can think of parameters as placeholders while arguments refer to the values that get stored in the placeholders.
    * Parameters are initialized with the values of the arguments supplied to the function

  * Functions take optional values called arguments:

    * Arguments let you pass data from outside the function's scope into the function so that the function can access the data.
    * If the function does not need additional data from outside - no arguments are necessary.

  * You can name arguments whatever you want but again it should be concise and meaningful. You cannot reference arguments outside of the function.

  * There is also a difference between declaring & invoking (using) a function:

    ```javascript
    // declaring the function
    // by itself it will not do anything
    function printName(name) {
      console.log(name);
    }
    
    // You need to invoke the function for the function to actually run
    let myName = 'David';
    printName(myName);
    ```

    

* Other terminologies

  * When you are invoking a function - it is the same as calling a function (using the function).

  * The local variable names between parenthesis are called parameters. Parameters are used to pass information into functions. Parameters have local scope within a function. Remember that local variables of functions are only alive when function is invoked. They go away when the function that corresponds to their scope stops running.

    ```javascript
    function greetPeople(greetingMessage) {
      console.log(greetingMessage);
    }
    
    greetPeople('Good Morning');
    console.log(greetingMessage); // not accessible
    ```

    

  * Arguments are the values you pass into the function for each of those parameters

    ```javascript
    function add(left, right) { // left & right are parameters
      return left + right; // left & right are arguments
    }
    
    let sum = add(3, 6); // 3 and 6 are arguments
    ```

    

* Function Return Values

  * JavaScript functions by default return `undefined` (all JS function calls evaluate to a value even without an explicity `return` statement). However, you can use the `return` syntax to specify a value that a function can return.

  * When JavaScript encounters the `return` statement it evaluates the expression and stops running the function. Then returns the expression's value to the location where the function was called.

    ```javascript
    function add(a, b) {
      return a + b;
    }
    
    add(2, 3); // => returns 5
    // Note that it doesn't output anything since there was no output methods. However, it does return 5. 
    ```

    

* Nested functions

  ```javascript
  function foo() {
    function bar() {
      console.log("BAR");
    }
  
    bar(); // BAR
    bar(); // BAR
  }
  
  foo();
  bar(); // ReferenceError: bar is not defined
  ```

  

* Default Parameters

  * If you need a function that can be called without an argument but still has a parameter you can provide for each parameter a default value:

    ```javascript
    let say = (words = 'hello') =>  { console.log(words); }
    say();
    ```

    

* Functions vs Methods (Invocation)

  * **Definitions:**

    * A method is a function that belongs to a class/object - it needs the instance of the object/class followed by the method name invocation
      * Methods have access to data associated within the class
      * A method is implicitly passed the object on which it was called
    * Function is a piece of code that you can call directly by name - all data that is passed to a function is explicitly passed

  * We have seen:

    ```javascript
    function add(a, b) {
      return a + b;
    }
    ```

    

  * There is a different syntax for calling methods called "method invocation":

    ```javascript
    'xyxxy'.toUpperCase();
    ```

    

  * There is no easy way to determine whether you need to use a function or method call for any given function - you need to read the documentation or commit common methods to memory.

* What is mutating the caller?

  * A method can permanently alter the object that invokes the method (otherwise known as mutating the calller).
  
  * This is an example of a non-mutating method - leaves the caller unchanged:
  
    ```javascript
    let name = 'David';
    console.log(name.toUpperCase());
    console.log(name);
    ```
  
    
  
  * Some methods do mutate the caller as shown below:
  
    ```javascript
    let oddNumbers = [1, 3, 5, 7, 9];
    oddNumbers.pop();
    console.log(oddNumbers);
    ```
  
    
  
  * Functions can also mutate their arguments:
  
    * This is a function with side effects - not a pure function
  
    ```javascript
    function changeFirstElement(array) {
      array[0] = 9;
    }
    
    let oneToFive = [1, 2, 3, 4, 5];
    changeFirstElement(oneToFive);
    console.log(oneToFive); // prints [9, 2, 3, 4, 5]
    ```
  
    
  
  * Mutation only happens with arrays and object but not for primitive values like numbers, strings, and booleans - operations on immutable data types will always return a new value. Operations on mutable values may or may not return a new value and may or may not mutate the data.
  
  * Functions with side-effects:
  
    * Function modifies a variable that is not locally scoped
    * Function mutates one of its arguments
  
* Pure Functions

  * Definition:

    * Function always returns the same result if the same arguments are passed in. It only depends on the input arguments
  * It also doesn't have any observable side effects like mutating the arguments
    
  * Examples:

    ```javascript
    // Pure function
    function priceAfterTax(productPrice) {
     return (productPrice * 0.20) + productPrice;
    }
    
    // Impure functions
    var tax = 20;
    function calculateTax(productPrice) {
     return (productPrice * (tax/100)) + productPrice; 
    }
    
    ```

    

* Function Composition

  * In function composition, you can use function calls as arguments to another function. Function calls always return a value ( it  can be `undefined` ) but potentially lead to errors so it's important to know what values the functions return.

  * Examples:

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

    

* Three ways to define a function

  * Function declaration - a notable property of function declaration is hoisting

    ```javascript
    function functionName(arguments) {
      // function body
    }
    
    let foo = function () { // this is a function expression
      function bar() {}; // this is a function declaration
    };
    ```

    

  * Function expression - it cannot invoke a function expression before it appears in your program. JavaScript allows you to assign functions to a variable. You are allowed to do this since JavaScript functions are first-class functions.

    * Key feature of first-class functions is that you can treat them as any other value. You can assign them to variable, pass them as arguments to other functions and return them from a function call.

      ```javascript
      let greetPeople = function () {
        console.log('Good Morning');
      }
      
      greetPeople();
      ```

      

  * Arrow functions

    * Example:

      ```javascript
      let greetPeople = () => console.log('Good Morning!');
      greetPeople();
      
      const foo3 = a => 2 * a; // this is a valid function that takes in one argument.
      
      
      let add = (a, b) => a + b; //  Arrow functions have implicit returns if the function body contains one expression
      ```
    
    * Arrow functions may implicitly return values by simply omitting the curly braces that traditionally wrap a function's body if their body only contains a single expression.
    
    * When using implicit returns, object literals must be wrapped in parenthesis so that the curly braces are not mistaken for the opening of the function's body.
    
      ```javascript
      const foo = () => { bar: 1 } // foo() returns undefined
      const foo = () => ({ bar: 1 }) // foo() returns {bar: 1}
      ```
    
      
  
* Functions as first-class and higher-order functions

  * First-class values

    * JavaScript functions are first-class values. Not only can you invoke functions but you can also pass them around your program like any other value.

    * Functions that can be treated as values let us create functions that can take other functions as arguments and return other functions

    * JavaScript is a declarative programming language

      ```javascript
      // map transformation
      let numbers = [1, 2, 3, 4, 5];
      let transformedNumbers = numbers.map(currentNum => currentNum * currentNum);
      
      transformedNumbers; // => [ 1, 4, 9, 16, 25 ]
      ```

      * This declarative style of programming is possible only because we can treat functions as values. The `map` method takes a function as an argument and calls it for each element of the array used to call `map`.

    * Functions that take other functions as arguments are called Higher Order Functions - as are functions that return other functions

      * For example: `forEach` is a higher order function

        ```javascript
        [[1, 2], [3, 4]].forEach(arr => console.log(arr[0]));
        ```

        

      * We use multi-dimensional array `[[1, 2], [3, 4]]` to call `forEach`. Each inner array / element is passed to the callback function, in turn, and assigned to the parameter `arr`. We then use the element reference operator `[]`, to get the value at index `0` of the array. 

      * On the first invocation of the callback, `arr[0]`  returns 1, and on the second, it returns `3`. In each invocation ,`console.log` outputs a string representation of the value returned by `arr[0]`. **Since this is a single statement callback** - the callback's return value is the return value of `console.log(arr[0])` which is `undefined`. 

      * `forEach`, however, does not do anything with this returned value though - and since the return value of `forEach` is always `undefined` - that is what ultimately gets returned.  

    * In JavaScript world - functions that we pass to other functions are often called callback functions. 






### Arrays

#### Key Concepts

* Definition: 

  * Ordered list of elements - each element has a unique index number
  * Arrays can be heterogenous - Arrays can have anything in them including objects and even other arrays
  * Zero-indexed, length is the highest position that has a value plus 1

* You already know how to access and update arrays - really easy

  * `myArray[0]`
  * `myArray[myArray.length - 1] = "0"`
  * Note that `array[array.length] = 10` will add a new value (not a reassignment)

* What if you end up accessing out of bounds index?

  ```javascript
  let array = ['a', 'b', 'c', 'd', 'e'];
  array[5];  // => undefined
  array[-1];  // => undefined
  ```
  
  
  
* Note that arrays declared with `const` are a little strange; while you can't change what arrays a `const` references, you can modify the array's contents:

  ```javascript
  const MyArray = [1, 2, 3];
  
  // That means because it's a constant - you can't reassign it
  // This is not allowed: MyArray = [4, 6, 7];
  
  // However:
  MyArray[1] = 5;
  console.log(MyArray);
  ```

  

  * This is because "variables" are pointers when it comes to arrays and objects. **Review more.**
    * `const` prohibts changing **what thing the ** `const` is pointing to but it does not prohibit changing the content of that thing.

* Some useful methods:

  * `push` (mutates array by adding the values you want to add to the end of the array). It also returns the new length of the array.

    ```javascript
    let array = [1, 2, 3];
    console.log(array.push('a')); // logs to console 4
    console.log(array); // logs to console [1, 2, 3]
    ```

    

    * Remember that functions have actions that they perform and values that they return and you need to understand this concept. In this case, `push` appends elements to the end of the array but it returns the updated length of that array. 
    * It does not return the modified array.

  * `concat` (does not mutate - brand new array - other than that same as `push`)

    ```javascript
    let array = [1, 2, 3];
    let newArray = array.concat(42, 'abc');
    ```

    

    * New array that contains all the elements from the original array followed by the elements passed as arguments

  * `pop` (removes last value - and also returns the removed value)

* `forEach`

  * As argument, `forEach` requires you to pass a callback function that will perform one or more actions on the arguments that are passed to it.

  * Iterates over the elements in the array and invokes the callback function for each element. It passes the element's value to the callback function.

    * A callback function is a function that you pass to another function as an argument. The called function subsequently invokes the callback function at certain times while it runs.

  * Has a return value of `undefined` - **you cannot explicitly return anything with `forEach` or break the loop**. It is specifically designed to loop over the entire array collection.

  * **Important**: This code below invokes the callback function once for each element in the array. `forEach`, during each iteration, invokes the callback with the element's value as an argument. The callback then logs it to the console. Then at the end, `forEach` returns `undefined`.

    ```javascript
    let array = [1, 2, 3];
    
    array.forEach(function (num) {
      console.log(num);
    });
    
    // Outputs:
    // 1
    // 2
    // 3
    ```

    
    
  * `forEach` can be a better way to filter an object that `filter` sometimes.

* `map`

  * `map` returns a new array that contains one element for each element in the array - with each element set to the return value of the callback
  
    ```javascript
    let numbers = [1, 2, 3, 4];
    let squares = numbers.map(num => num * num);
    squares
    ```
  
    
    
  * `map` also considers the return value of the callback function and it uses that return value and places it in a new array. This process repeats for each element in the original array
  
  * Without explicit return value - the callback function will always return `undefined`.  
  
* `filter`  returns a new array that includes all the elements from the calling array for which the callback function returns a truthy value. 

  ```javascript
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2]
  numbers.filter(num => num > 4) // [ 5, 6, 7, 8, 9, 10 ]
  // The body of the callback function in the above example is a
  // single expression. That means that we can eliminate the curly braces
  // and the `return` keyword - and it will still work. 
  ```

  

  * `filter` takes a callback function as an argument and iterates over the elements of the array. During each iteration - it invokes the callback function using the value of the current element as an argument. 
    
    * If the callback returns a truthy value - `filter` appends the element's value to a new array.
      * `filter` examines the return value of the callback on each iteration.
    * Otherwise - it ignores the element's value and does nothing.
    * When `filter` finishes iterating, it returns the array of selected elements: the elements for which the callback returned a truthy value.
    
  * Here the callback's return value is always truthy. How do we know that? If the value is anything other than the six falsy values mentioned above - it's truthy. In this case, the return value is always an integer greater than `0` - all of which are truthy.

    ```javascript
    [1, 2, 3].filter(num => num + 1);
    ```

    

  * When working with `filter` - you must pay attention to the callback's return value. For example, if we write a callback with the curly braces and forget explicit `return` - you get an empty array. Why is that? Since our callback does not explicitly return a value - its implicit return value is `undefined` which is falsy. 

* `reduce ` (does not mutate the caller)

  * Takes two arguments: a callback function and a value that initalizes something called accumulator. The callback function itself also takes two arguments: an element from the array and the current value of the accumulator.

  * `reduce` returns a value that will be used as the accumulator in the next invocation of the callback.

    ```javascript
    let arr = [2, 3, 5, 7];
    arr.reduce((accumulator, element) => accumulator + element, 0);
    
    ```

    

    * On the first invocation, we initalize the `accumulator` as `0`. `element` is `2`. The callback returns `2` which becomes the new `accumulator`. When we invoke the callback again `element` is `3` and callback returns `5`. This process continues until the final return value is `17`.

  * Not limited to just numbers:

    ```javascript
    let strings = ['a', 'b', 'c', 'd'];
    strings.reduce((accumulator, element) => {
      return accumulator + element.toUpperCase()
    }, ''); // ABCD
    ```

    

* `some` looks at the truthiness of the callback's return value to determine its own return value. If the callback function returns a truthy value for any element in the collection - then the `some` method will return true. 

  * `some` takes a callback function as its argument. For every element in the array, it will invoke the callback function. `some` will look at the truthiness of the return value of the callback function. If a callback function returns a truthy value for any element in the collection - `some` returns true. 

    ```javascript
    let animals = { a: 'ant', b: 'bear', c: 'cat' };
    Object.values(animals).some(animalName => animalName.length > 4);
    // => false
    
    Object.values(animals).some(animalName => animalName.length > 3);
    // => true
    ```

    

* `every` - takes a callback function. Executes the callback function once for each element in the array until one callback returns a falsy value. If such an element is found, `every` method immediately returns `false`. Otherwise, returns `true`. It looks at the truthiness of the callback's return value. If all of the callback's return value in every iteration is truthy then `every` returns `true`.

  ```javascript
[1, 2, 3].every(num => num > 2) // false
  ```

  

* `find` - takes a callbackback function as an argument and returns the first element for which the callback function returns a truthy value:

  ```javascript
  [2, 1, 4, 3, 5].find(num => num > 2) // 4
  ```

  

  * If the call back function does not return a truthy value for any of the elements - `find` returns `undefined`

    ```javascript
    [2, 1, 4, 3, 5].find(num => num < 1) // undefined
    ```

    

* `findIndex` - similar to `find` except it returns the index of the element for which the callback returns a truthy value

  ```javascript
[2, 1, 4, 3, 5].findIndex(num => num > 2) // 2
  
  // If no truthy value is returned for any of the elements
  [2, 1, 4, 3, 5].findIndex(num => num < 1) // -1
  ```



* `reverse` method reverses the order of the elements of the array it is called on. It also mutates the array. 

  ```javascript
let nums = [1, 2, 3];
nums.reverse(); // => [3, 2, 1]
nums;           // => [3, 2, 1]
  ```

  

* `includes` method does not take a callback argument - instead - it takes an argument that it looks for in the array used to call it - it returns `true` when the argument exists in the array and `false` when it does not.

  ```javascript
  [2, 1, 3].includes(1) // true
  ```

  

  * Doesn't really work for objects - You might expect a return value of `true` from the `includes` call below, but it returns `false`. That's because `includes` uses the `===` operator to compare its argument with elements of the array. Since the comparison `{c: 'foo'} === {c: 'foo'}` returns `false`, `arr.includes({c: 'foo'})` also returns `false` in the above example.

    ```javascript
    let arr = ['a', 'b', {c: 'foo'}];
    arr.includes({c: 'foo'}); // => false
    ```

    ```javascript
    let obj = {c: 'foo'};
    let arr = ['a', 'b', obj];
    
    arr.includes(obj); // => true
    ```

    ```javascript
    // Other usecases with objects:
    let obj = {a: 'apple', b: 'banana', c: 'custard'};
    Object.keys(obj).includes('c'); // => true
    Object.keys(obj).includes('f'); // => false
    ```

    

* Arrays are objects:

  * `typeof [1, 2, 3]` returns `'object'`.

  * As a consequence if you need to detect whether a variable **references** an array - you need to use `Array.isArray`:

    ```javascript
    let arr = [1, 2, 3];
    Array.isArray(arr); // true
    ```

    

* Weird JS Array Behaviors:

  * If you change an array's `length` property to a new, smaller value, the array gets truncated. JavaScript removes all elements beyond the new final element.

    ```javascript
    let arr = [1, 2, 3];
    arr.length = 2;
    
    console.log(arr); // [1, 2]
    ```

    

  * If you change an array's length to a larger value - the array expands to the new size - however, the new elements do not get initialized. 

    * Why does unset array elements return `undefined`?

    ```javascript
    let arr = [];
    arr.length = 3;
    arr; // returns [ <3 empty items> ]
    arr[0]; // returns undefined
    
    arr.filter(el => el === undefined); // returns []
    arr.forEach(element => console.log(element)); // no output, but returns undefined
    
    arr[1] = 3;
    arr; // returns [ <1 empty item>, 3, <1 empty item> ]
    arr.length; // 3
    arr.forEach(el => console.log(el)); // outputs 3 only
    ```

    

    * JS treats unset array elements as missing but `length` property includes the unset elements.

  * You can create array "elements" with indexes that use negative or non-integer values or even non-numeric values:

    ```javascript
    let arr = [1, 2, 3];
    
    arr[-3] = 4; // 4
    arr; // [ 1, 2, 3, '-3': 4 ]
    
    arr["cat"] = 'Fluffy' // 'Fluffy'
    arr; // [ 1, 2, 3, '-3': 4, cat: 'Fluffy' ]
    ```

    

    * These "elements" are not true elements. They are properties on the array object.
    * All built-in Array methods ignores properties that are not elements like 'cat' from above

  * Since array are objects - you can actually use `Object.keys` method to return an array's keys. Even negative and non-integer indexes are included. 

  * There is a difference in having `undefined` in an array versus unset elements returning `undefined`. **The unset values are set to `undefined` by JavaScript as an after effect of calling another method.**

    ```javascript
    // unset values
    let a = new Array(3);
    let b = [];
    b.length = 3;
    
    // undefined
    let c = [undefined, undefined, undefined]
    
    a;                      // [ <3 empty items> ]
    b;                      // [ <3 empty items> ]
    c;                      // [ undefined, undefined, undefined ]
    
    a[0] === undefined;     // true
    b[0] === undefined;     // true
    ```

    

  * While the `length` property of Array includes `undefined` in the count regardless of how it got set. However, `Object.keys` only counts those that were set explicitly.

    ```javascript
    a.length;                //  3
    b.length;                //  3
    c.length;                //  3
    
    Object.keys(a).length;   //  0
    Object.keys(b).length;   //  0
    Object.keys(c).length;   //  3
    ```

    

* Determining an empty array:

  ```javascript
  let arr = [];
  arr[-3] = 5;
  arr['foo'] = 'a';
  
  // Is arr empty?
  console.log(arr.length);       // 0                Yes
  console.log(Object.keys(arr))  // [ '-3', 'foo' ]  No
  ```

  

  * There is no right answer on what is considered "empty" - It's a decision you have to make depending on what you are working on. 

* Sparse arrays - you can have array elements that are not set (meaning they don't actually exist):

  ```javascript
  let arr = [2, 4, 6];
  arr.length = 5;
  console.log(arr);              // [2, 4, 6, <2 empty items> ]
  console.log(arr.length);       // 5
  console.log(Object.keys(arr))  // ['0', '1', '2']
  ```

  ```javascript
  let arr = [2, 4, 6];
  arr.length = 5;
  arr[4] = undefined
  console.log(arr);              // [2, 4, 6, <1 empty item>, undefined ]
  console.log(arr.length);       // 5
  console.log(Object.keys(arr))  // ['0', '1', '2', '4']
  ```

  * There is a difference between an unset element returning `undefined` and an element actually containing `undefined`

  * Creates ambiguity in what arrays are empty and which are not:

    ```javascript
    let arr = [];
    arr.length = 3;
    
    // Is arr empty?
    console.log(arr.length);       // 3      No
    console.log(Object.keys(arr))  // []     Yes
    
    ```

  * Whether an array is empty depends on the definition - if you want to include the unset elements then it is not empty. If we need to ignore the gaps, you would need to use Object.keys to check that. It depends on what you need to use - no right answer.

* Nested arrays --> array of arrays

  ```javascript
  let teams = [['Joe', 'Jennifer'], ['Frank', 'Molly'], ['Dan', 'Sarah']];
  
  teams[2][1]; // 'Sarah'
  ```

  

* Array Equality

  ```javascript
  console.log([1, 2, 3] === [1, 2, 3]); // false
  
  let a = [1, 2, 3];
  let b = a;
  console.log(a === b) // true
  ```

  

  * JavaScript treats two arrays as equal when they are the same array not in terms of content but that they occupy the same spot in computer memory. Objects must be the same object for them to be equal

    * Assigning `a` to `b` merely makes `b` reference the same array as `a` - it does not create a new array.

  * At first glance above, you might say that arrays in the first example are also "the same array" - but they are not. They are two different arrays that happen to have the same values. However, they occupy distinct positions in memory so they are not the same array - and thus not equal

  * If you want to check that the contents between two arrays are the same then you can create a function that does that:

    ```javascript
    function arraysEqual(arr1, arr2) {
      if (arr1.length !== arr2.length) return false;
    
      for (let i = 0; i < arr1.length; i += 1) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
    
      return true;
    }
    
    console.log(arraysEqual([1, 2, 3], [1, 2, 3])); // logs true
    console.log(arraysEqual([1, 2, 3], [4, 5, 6])); // logs false
    console.log(arraysEqual([1, 2, 3], [1, 2, 3, 4])); // logs false
    
    // Visually you can see they contain the same values
    // But because it contains array (object) - it returns false
    arraysEqual([1, 2, [3, 4], 5], [1, 2, [3, 4], 5]) // returns false
    ```

    
    * Works best when all the elements in both arrays have primitive values - if even one pair of elements contains an array or other object - `arraysEqual` may not return the correct result.

* Removing array elements:

  ```javascript
// To remove all elements
  let numbers = [1, 2, 3, 4];
  
  // Method 1
  numbers.length = 0;

  // Method 2
numbers.splice(0, numbers.length);
  
  // Method 3
  // Loops until numbers.length === 0; 0 is a falsy value so evaluates to false
  while (numbers.length) {
  	numbers.pop();
  }

  // Remove one element
numbers.splice(2, 1); // removes "3" from the array
  ```
  
  
  
* `sort`

  * Destructive - use `slice()` if you need to maintain original array

  * When `sort` is called without arguments it coerces all the array elements except those that are `undefined` to their string equivalents then sorts them using string comparisons
  
    ```javascript
    [2, 11, 9, 4, 107, 21, 1].sort() //.[ 1, 107, 11, 2, 21, 4, 9 ]
  [null, 'a', true, 1].sort() // [ 1, 'a', null, true ]
    ```

    
  
  * `undefined` is always placed at the end of the array no matter what the other values are:
  
  ```javascript
    [undefined, 11, 'z', 'x', 'y', undefined].sort() // [ 11, 'x', 'y', 'z', undefined, undefined ]
  ```
  
  
  
  * When working with strings that have multiple characters, `sort` compares them character by character, so the strings beginning with `a` come before those beginning with `b`; if both characters are the same, then the next character in each string is compared, and so on. If one string is shorter than another, but equal through the length of the shorter string, then the shorter string comes before the longer one. For instance, `'cap'` is shorter than `'cape'`, so `'cap'` comes first in the result.
  
    ```javascript
  ['arc', 'bat', 'cape', 'ants', 'cap'].sort() // [ 'ants', 'arc', 'bat', 'cap', 'cape' ]
    ```

    

  * The string order is determined by a character's code point in the UTF-16 encoding. It is the code point that determines the result when we compare one character with another using the relational operators.
  
    ```javascript
    'A' < 'a' // 65 < 97 true
    ```
  
    

    * Uppercase letters come before lowercase letters (sometimes called **ASCIIbetical** order)
    * Digits and most punctuation come before letters.
    
    * There are several punctuation characters between the uppercase and lowercase letters, and several more that come after all of the letters.
    
  * `sort` takes an optional callback argument. The return value of that callback determines the final sequence produced by the sort. 
  
    ```javascript
    [2, 11, 9, 4, 107, 21, 1].sort((a, b) => a - b)
    ```
  
    
  
    * The `sort` function iterates over our array and supplies our callback function with two elements each time. It arranges the relative positions of the two elements by:
    * If the callback returns a number less than 0, place `a` before `b`.
    * If the callback returns a number greater than 0, place `b` before `a`
    * If the callback returns 0, leave them unchanged
  
    ```javascript
    let words = ['go', 'ahead', 'and', 'jump'];
    words.sort((a, b) => a.length - b.length);
    
    ```
  
    
  
  * Other examples:
  
    ```javascript
    let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
    scores.sort((a, b) => {
      let totalAScore = a.reduce((number, next) => number + next);
      let totalBScore = b.reduce((number, next) => number + next);
    
      return totalAScore - totalBScore;
    });
    ```
  
    
  
* Other Array Methods

  * `slice` method extracts and returns a portion of the array. Takes two optional arguments - the first is the index at which extraction begins while the second is where extraction ends. Also not destructive

    ```javascript
    let fruits = ['mango', 'orange', 'banana', 'pear', 'apple'];
    fruits.slice(1, 3); // ['orange', 'banana']
    fruits.slice(2) // second argument defaults to rest of array
     fruits.slice() // duplicates array  [ 'mango', 'orange', 'banana', 'pear', 'apple' ]
    ```

* `shift` & `unshift`:

  ```javascript
  let numbers = [1, 2, 3, 4, 5];
  let reversedArray = [];
  numbers.forEach((number) => {
  	// unshift adds element to the front of the array.
    reversedArray.unshift(number);
  });
  
  console.log(reversedArray); // [5, 4, 3, 2, 1]
  console.log(numbers); // [1, 2, 3, 4, 5]
  ```

   * `splice()`

     ```javascript
     let numbers = [1, 2, 3, 4, 5];
     numbers.splice(2, 1); // splice returns the removed elements in an array - [3]
     console.log(numbers); // [1, 2, 4, 5]
     
     numbers.splice(); // this is not destructive? Why?
     console.log(numbers); // [1, 2, 4, 5]
     ```

     

### Objects

#### Key Concepts

* Definition:

  * Objects store a collection of **key-value pairs**. Each item in the collection has a name that we call key and an associated value. Arrays, on the other hand, associate values with ordered indexes

  * Keys are strings

  * Values can be any type including other objects

  * Keys are unique:

    ```javascript
    let obj = { fruit: 'apple', vegetable: 'carrot', fruit: 'pear' }
    obj // { fruit: 'pear', vegetable: 'carrot' }
    ```

    

* Creating Objects:

  * Object literal syntax

    ```javascript
    let person = {
      name:    'Jane',
      age:     37,
      hobbies: ['photography', 'genealogy'],
    };
    ```

    

  * Braces `{}` delimit the list of key-value pairs contained by the object. 

* Accessing & Updating objects:

  ```javascript
  let obj = { fruit: 'apple', vegetable: 'carrot' };
  obj.fruit; // => 'apple'
  obj.fruit[3]; // => 'l'
  obj['vegetable']; // => 'carrot'
  obj['vegetable'][0]; // => 'c'
  ```

  

  * Note that there are two ways of referencing an element in an object. The first one is called the **dot notation** and the second one is the **bracket notation**. In the above example, we use the dot notation to access the value of the `'fruit'` key and the bracket notation to access the value of the `'vegetable'` key. **It is important to note that the `[0]` part of `obj['vegetable'][0]` and `[3]` in `obj.fruit[3]` in the above example is string element reference.** The string `'carrot'` is returned by `object['vegetable']` and `[0]` is used to access the first letter of that value.

  * Accessing a key that doesn't exist:

    ```javascript
    let obj = {a: 'foo', b: 'bar'};
    obj['c']; // => undefined
    ```

    

    * What if an object contains a value of `undefined` on purpose - how do you know that the key exists?

      ```javascript
      let obj = { a: 'foo', b: 'bar', c: undefined};
      obj.hasOwnProperty('c'); // => true
      obj.hasOwnProperty('d'); // => false
      
      // Another way
      Object.keys(obj).includes('c'); // => true
      Object.keys(obj).includes('d'); // => false
      ```

      

  * Access using dot notation or bracket notation

    ```javascript
    person.name;
    person['age'];
    
    // if you have a variable that contains a key's name you must use a bracket notation
    let key = 'name';
    person[key];
    ```

    

  * Adding new key-value pairs

    ```javascript
    person.height = '5 ft';
    person['gender'] = 'female';
    ```

    

  * Delete key-value pairs

    ```javascript
    delete person.height;
    ```

    

  * With `const` declaration, we are prohibited from changing what thing the `const` points to - but it does not prohibit changing the content of that thing.

    ```javascript
    const MyObj = { foo: "bar", qux: "xyz" };
    MyObj.qux = "hey there";
    MyObj; // { foo: 'bar', qux: 'hey there' }
    
    MyObj = {} // Uncaught TypeError: Assignment to constant variable.
    ```

    

* Objects vs. Primitives

  * Objects include (not limited to this):

    * Functions
    * Arrays
    * Simple Objects
    * Date Objects

  * Objects are complex values composed of primitive values or other objects. For example, an array object has a `length` property that contains a number: a primitive value. **We can change parts of an object - objects are mutuable**.

  * Remember that primitives are immutable - they don't have parts that one can change. Such values are said to be atomic. If a variable contains a primitive value - all you can do to that variable is use it in an expression or reassign it - give it an entirely new value. Even `0 + 0` evaluates to a new value `0`.

    ```javascript
    let s = "Axe";
    s[0] = 'a';
    s // Axe - immutable
    
    let sArr = ["A", "x", "e"];
    sArr[0];
    sarr // ["a", "x", "e"];
    ```

    

* Iteration

  * `for/in` loop:

    ```javascript
    let person = {
      name: 'Bob',
      age: 30,
      height: '6 ft'
    };
    
    for (let prop in person) {
      console.log(person[prop]); // must use bracket since `prop` is a variable that contains a property name - not the property name itself.
    }
    ```

    

    * `for/in` also iterates over the properties of an object's prototypes as well:

      ```javascript
      let obj1 = { a: 1, b: 2 }
      let obj2 = Object.create(obj1);
      obj2.c = 3;
      obj2.d = 4;
      
      for (let prop in obj2) {
        console.log(obj2[prop]);
      }
      
      // If you want to limit it to the object's own properties
      for (let prop in obj2) {
        // hasOwnProperty method returns `true` if the name of the property is one of the calling object's own properties `false` if it is not
        if (obj2.hasOwnProperty(prop)) {
          console.log(obj2[prop]);
        }
      }
      
      ```

  * `Object.keys` static method returns an object's keys as an array. You can iterate over that array using any technique that works for arrays.
  
    ```javascript
    let person = {
      name: 'Bob',
    age: 30,
      height: '6 ft'
  };
    
    let personKeys = Object.keys(person); // returns ['name', 'age', 'height']
    
    personKeys.forEach(key => console.log(person[key]));
    // Bob
    // 30
    // 6 ft
    ```
  
    
  
  * Order of the object's keys is not guaranteed
  
  * `Object.values` - same as `Object.keys` but only returns array of values

  * `Object.entries` - returns the keys and values in a nested array format:

    ```javascript
  let person = { name: 'Bob', age: 30, height: '6ft' };
    console.log(Object.entries(person));
  // logs [[ 'name', 'Bob' ], [ 'age', 30 ], [ 'height', '6ft' ]]
    ```

    ```javascript
    let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
    Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();
    
    ```
  
    
  
* `Object.assign` - takes objects as arguments - can take multiple arguments. Mutates the first object:

  ```javascript
  let objA = { a: 'foo' };
  let objB = { b: 'bar' };
  
  Object.assign(objA, objB); // { a: 'foo', b: 'bar' }
  objA; // { a: 'foo', b: 'bar' }
  objB; // { b: 'bar' }
  
  ```

  * If you don't want to mutate the first object, use empty object

    ```javascript
    let objA = { a: 'foo' };
    let objB = { b: 'bar' };
    
    let objC = Object.assign({}, objA, objB);
    
    objA; // { a: 'foo' }
    objB; // { b: 'bar' }
    objC; // { a: 'foo', b: 'bar' }
    
    ```




### Working with Strings

#### Key Concepts

* Strings are immutable

  ```javascript
  let str = 'bob';
  str[0] = 'B'; // => 'B'
  str; // => 'bob'
  
  // You must reassign it with a new string string
  str = 'B' + str.slice(1);
  str; // => 'Bob'
  ```

  

* `concat`

  ```javascript
  'Hello '.concat('World!') // 'Hello World!'
  ```
  
  
  
* `includes` - takes a string as the argument and returns a boolean signifying whether that string exists within the string that `includes` was called on

  ```javascript
  'Eeny, meeny, miny, moe'.includes('miny') // true
  ```
  
  
  
* `split` - separates a given string into multiple strings and returns them in the form of an array. How the string gets split depends on the argument you provide to `split`

  ```javascript
  'abcdef'.split() // ['abcdef']
  'abcdef'.split('') // ['a', 'b', 'c', 'd', 'e', 'f']
  ```
  
  
  
* `trim` - removes whitespaces, \n, \t from both ends of the string it is called on

  ```javascript
  '  abcdef   '.trim() // 'abcdef'
  ```
  
  
  
* `toUpperCase` and `toLowerCase` - converts the strings to uppercase or lowercase respectively. If you want capitalize combine it with `slice`

  ```javascript
  function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  
  capitalize('pete'); // => 'Pete'
  ```

  

* Useful functions to know - `charAt` & `subString`

  ```javascript
  // charAt returns the character given an index
  // substring takes in several optional arguments. 
  // if you want to return certain sections of the string you can provide the starting index and the end index
  let munstersDescription = "the Munsters are CREEPY and Spooky.";
  munstersDescription.charAt(0).toUpperCase() +
    munstersDescription.slice(1).toLowerCase();
  ```

* Useful examples:

  ```javascript
  let title = "Flintstone Family Members";
  let padding = Math.floor((40 - title.length) / 2);
  
  title.padStart(padding + title.length);
  ```

  ```javascript
  let statement1 = "The Flintstones Rock!";
  let statement2 = "Easy come, easy go.";
  
  function countLowerCase(str) {
    let count = 0;
    str.split('').forEach(el => {
      if (/[a-z]/i.test(el)) {
        if (el === el.toLowerCase()) count++;
      }
    });
    return count;
  }
  
  // Test case
  console.log(countLowerCase(statement1));
  console.log(countLowerCase(statement2));
  ```

  

* `slice` & `substring`

  * `slice`

    ```javascript
    let str = 'abcdefghi';
    str.slice(2); // => 'cdefghi'
    'abcdefghi'.slice(-4, -2); // => 'fg'
    ```

    * When given negative numbers as the indices, `slice` treats them as `string length + index`. In the above, an index of `-4` is equivalent to `9 + (-4)` since the length of the string is 9 and `9 + (-4)` equals `5`. Likewise, `-2` is equivalent to `7`.
    * The behavior of `slice` is more natural and predicatable when dealing with edge cases

  * Differences (similar in many ways)

    ```javascript
    // Difference 1
    
    'abcdef'.substring(3, 1); // => 'bc' (swaps 1 and 3)
    'abcdef'.slice(3, 1);     // => ''
    
    'abcdef'.substring(-2); // => 'abcdef' - treats it as 0
    'abcdef'.slice(-2);     // => 'ef' - treats them as length - index
    ```

    



### Loops

#### Key Concepts

* `while` loop is an event-vased loop where the code within the `while` block keeps running until a certain event is reached.

  ```javascript
  let balance = 100;
  let goalBalance = 200;
  
  while (balance < goalBalance) {
    balance *= 1.05;
  }
  
  console.log(balance);
  ```

* `for` - for definite sequence and a finite ending. 

  ```javascript
  let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
  let upperNames = [];
  
  for (let index = 0; index < names.length; index += 1) {
    upperNames.append(names[index].toUpperCase());
  }
  
  console.log(upperNames);
  ```

  

* `continue`:

  * The `continue` statement terminates the execution of the statements in the current iteration of the current or labeled loop and continues execution of the loop with the next iteration

  ```javascript
  let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
  let upperNames = [];
  
  for (let i = 0; i < names.length; i += 1) {
    if (names[i] === 'Naveed') {
      continue;
    }
  
    upperNames.push(names[i].toUpperCase());
  }
  
  console.log(upperNames);
  ```

  

* `break` - for cases where you might want to skip the remaining iterations:

  * `break` statement terminates the current loop 
  
  ```javascript
  let array = [3, 1, 5, 9, 2, 6, 4, 7]
  let indexOfFive = -1;
  
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 5) {
      indexOfFive = 1;
      // adding break here stops the loop from runnning after it finds 5
      break;
    }
}
  ```
  
  



### Other JavaScript Concepts

#### Key Concepts

* Method chaining allows you to call methods on the return value of another method

  ```javascript
  let str = 'Pete Hanson';
  let names = str.toUpperCase().split(' ').reverse().join(', ');
  console.log(names);
  // outputs: HANSON, PETE
  ```

  

* Regex can be used to test whether a string matches a given pattern.

  * You can combine this with if statements as well

  ```javascript
  /o/.test('bobcat'); // true
  /l/.test('bobcat'); // false
  ```

  ```javascript
  if (/b/.test('bobcat')) {
    // this branch executes since 'b' is in 'bobcat'
    console.log("Yes, it contains the letter 'b'");
  } else {
    // this branch does not execute since 'bobcat' contains 'b'
    console.log("No, it doesn't contain the letter 'b'");
  }
  ```

  ```javascript
  "bobcat".match(/[bct]/g);
  ```

  

  * `g`  flag - a global match. It returns an array that contains each matching substring. The `g` example returns an array consisting of the matched `b`, `c`, and `t`.

* Error Handling

  * Complex programs can lead to uncertainities and sometimes failures.

  * JavaScript is a forgiving language as it fails silently by returning values like `NaN`, `undefined`, `null` but you still need a way to handle these errors slient or not silent.

  * JavaScript allows programmers to handle these failures through `try` and `catch` syntax. Exception handling is a process that deals with errors in a manageable and predictable way.

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

    

* Shallow Copy

  * When you need to copy an entire collection - to, for example, save the original collection before performing some modifications.

  * Ways to copy array:

    ```javascript
    let arr = ['a', 'b', 'c'];
    let copyOfArr = arr.slice();
    copyOfArr; // => [ 'a', 'b', 'c' ];
    copyOfArr.push('d');
    copyOfArr; // => [ 'a', 'b', 'c', 'd' ]
    arr;  // => [ 'a', 'b', 'c' ]
    
    let arr2 = ['a', 'b', 'c'];
    let copyOfArr2 = [...arr];
    copyOfArr2; // => [ 'a', 'b', 'c' ];
    ```

    

  * Only the top level array is copied - when the array contains other objects like nested array, then those objects are shared - not copied. 

    ```javascript
    let arr = [['a'], ['b'], ['c']];
    let copyOfArr = arr.slice();
    
    copyOfArr[1].push('d');
    
    arr;       // => [ [ 'a' ], [ 'b', 'd' ], [ 'c' ] ]
    copyOfArr; // => [ [ 'a' ], [ 'b', 'd' ], [ 'c' ] ]
    ```

    

    * This behavior occurs because the destructive method `push` was called on a shared object, `['b']` rather than a separate array. **When you mutate a shared object in an array or other collection - it is the shared object you are affecting rather than the collection**

  * What about objects? Changes to nested objects within the copy will be reflected in the original

    ```javascript
    let obj = { a: { b: 'foo' }, c: ['bar'] };
    let copyOfObj = Object.assign({}, obj);
    
    copyOfObj['c'] = 'baz';
    copyOfObj; // => { a: 'foo', b: 'bar', c: 'baz' }
    obj;       // => { a: 'foo', b: 'bar' }
    
    obj['a']['d'] = 'baz';
    copyOfObj; // => { a: { b: 'foo', d: 'baz' }, c: [ 'bar' ] }
    obj;       // => { a: { b: 'foo', d: 'baz' }, c: [ 'bar' ] }
    ```

    

* Deep Copy

  ```javascript
  let arr = [{ b: 'foo' }, ['bar']];
  let serializedArr = JSON.stringify(arr);
  let deepCopiedArr = JSON.parse(serializedArr);
  
  deepCopiedArr[1].push('baz');
  deepCopiedArr; // => [ { b: 'foo' }, [ 'bar', 'baz' ] ]
  arr;           // => [ { b: 'foo' }, [ 'bar' ] ]
  
  ```

  

* Freezing Objects

  * Objects can be frozen using the `Object.freeze` function to prevent objects from being modified 

    ```javascript
    let obj = Object.freeze({ a: 'foo' });
    let arr = Object.freeze(['a', 'b', 'c']);
    
    obj['b'] = 'bar';
    obj; // => { a: 'foo' }
    
    arr.push('d'); // => TypeError: Cannot add property 3, object is not extensible
    arr; // => [ 'a', 'b', 'c' ]
    ```

  * Only mutable objects can be frozen with `Object.freeze` - since immutable objects like `String` are already frozen. We can check whether an object is frozen with `Object.isFrozen`.

  * `Object.freeze` only freezes the object that is passed to it. If the object passed to it contains other objects - those objects will not be frozen. For example, if we have a nested array, the nested objects can still be modified after passing it to `Object.freeze`.

    ```javascript
    let arr = Object.freeze([[1], [2], [3]]);
    arr[2].push(4);
    arr; // =>  [ [ 1 ], [ 2 ], [ 3, 4 ] ]
    ```

    