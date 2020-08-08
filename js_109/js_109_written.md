
## JS 109 Study Guide

### Assignments and Comparison

#### Key Concepts:

* Variables store information that a program must reference or manipulate - the y also allow programmers to label the data in memory so that it can be accessed later

* Use descriptive names for variables that accuarately and concisely describe the data the variable contains

* How does JavaScript assign values?

  * Assigning a value to a variable is called variable initialization. 

    * `let name = 'David';`
    * Now, we can use the variable `name` anywhere in the JS program

  * There are three basic ways to create a variable

    * `let var = 0;`

      * Variables declared with 'let' cannot be accessed in block scope - it removes the chance for code blocks to access and change these variables. It makes let truly a local variable and remove ambiguity and potential for bugs.

    * `const var = 16;`
      
      * For values that will not be updated and are constant we want to use const. JavaScript will prevent us from updating that variable or replacing it. It will also denote to other programmers that this variable is a constant and will not be updated in our code (better readability and understanding)
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

      

      * 

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

  

  * One way to update/reassign variables?
    * `name = 'Patricia';`
  * Variable Shadowing

* How does JavaScript compare values?



### Variable Scope

#### Key Concepts:

* Main Definition:

  * A variable's scope determines where it is available in a program. **The location where you declare a variable determines its scope.**

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

    

  * Function scope: Functions define a new scope for local variables. You can think of the scope defined by a function as an inner scope. Nested functions define nested scopes. A variable's scope is determined by where it is declared.

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
      * Note that a local variable only comes into existence when you call that function - the mere act of defining a function does not create any variable.
      * When `aFunc()` is called - `a` will be created and accessible in the funciton scope but immediately discarded once the function executes and returns to the main flow of the program

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
        console.log(number);
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

      

      * Here, `console.log(number)` will use the parameter `number` and discard the outer scoped local variable. This is called variable shadowing - prevents access to outer scope local variable. 
      * Variable shadowing also prevents us from making changes to the outer scoped *`number`*.
      * You want to avoid variable shadowing since it is never what you intend. Choosing long and descriptive variable names is one simple way to ensure that you do not run into any of these weird scoping issues. 

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

* Primitives & Variables

  * Reassigning a value does not affect any other variables that happen to have the same value. This is why `b` remains unchanged. `a` and `b` are independent - changing one does not affect the other
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
  * Instead - it changes the variable in such a way that it refers to the array on the right. Each variable has a value and reassigning values does not affect any other variables that happen to have the same value.

* Does that mean that arrays and other objects get stored directly inside variables like primitives?

  * Not really:

    ```javascript
    let e = [1, 2];
    let f = e;
    e.push(3, 4);
    
    console.log(e); // [1, 2, 3, 4]
    console.log(f); // [1, 2, 3, 4]
    ```

    

  * This happens because these variables that store objects are references to the memory locations that was storing `[1, 2]`. This concept goes back to stack versus heap. Primitive values get stored in the stack - faster but smaller memory. Objects like arrays store the actual value in the heap but a reference to the heap is in the stack

  * When `let f = e` runs - both `f` and `e` both contain the same pointer value. When `e.push(3, 4)` runs - it uses the pointer to access and mutate the array by appending `3` and `4` to its original value. Since `f` also points to that same array, both `e` and `f` reflect the updated contents of the array.

* Same here - we are not reassigning a whole array. We are reassigning a specific element in the array. This code does not mutate the element but it does mutate the array. 

  ```javascript
  let g = ['a', 'b', 'c']
  let h = g
  g[1] = 'x'
  g // [ 'a', 'x', 'c' ]
  
  h // [ 'a', 'x', 'c' ]
  ```

  

### Primitive Values, Types, and Type Conversions

#### Key Concepts:

* Primitive Values

  * What data types are primitive in JS?
  * Primitive values are pass by value. What does that mean? Pass by value means that we pass along a full copy of that value when we assign or pass along primitive values. If you change one variable that holds a primitive value - it does not change other variables with the same value

  ```javascript
  let a = 4;
  let b = a;
  
  a = 7; // Reassign a
  
  console.log(a) // prints 7
  console.log(b) // prints 4
  
  // At this point b and a point to two different values of 4 - they just happen to share the same value
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
      * `null` is an object - goes back to when JavaScript was first developed and was preserved through the years - fixing this would break to omany applications.

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
        let number 42 // note that javascript does not let you call a method directly on a number literal - it think it's a part of floating number
        number.toString(); // 42.toString(); - not allowed
        ```
  
        
  
      * What about array?
  
        ```javascript
        [1, 2, 3].toString() // '1,2,3'
        ```
  
        
  
    * `String()`
  
      * One advantage is `String()` works on `null` and `undefined` - useful because you can avoid program-halting errors that `toString()` can lead to.
  
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





### Expressions and Return Values

#### Key Concepts:

* Expression

  * Definition: Expression is anything that JavaScript can evaluate to a value even if that value is `undefined` or `null`.
  * Some examples:
    * In the first example (`7 + (5 + 2)`) is an expression.
    
    * When you run *`console.log()`* you will notice that it returns *`undefined`* - this is the evaluated value of your expression so it returns *`undefined`* while the first example returns *`14`*.
    
      ```javascript
        7 + (5 + 2);
        console.log(5 + 2);
      ```
    
      


  * Expressions do not have to involve operators - any value is an expression that evaluates to itself

    ```javascript
    "hi"
    ```

  * Statements always evaluate as `undefined` - they are not expressions and different in that you cannot use a statement as part of another expression:

    ```javascript
    let foo; // this is a statement
    console.log(5 * let name); // This is not valie because `let name` is not an expression

    console.log(let name)
    // SyntaxError: missing ) after argument list
    
    ```

* Expressions versus Statements

  * Statements: Refers to a syntactic unit of code that expresses an action for the computer to perform.
  
    * Examples:
  
      ```javascript
      theFinalValue = firstValue + secondValue;
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
      * JavaScript distinguishes expressions and statements. A statement is an instruction, an action. Remember conditions with `if`, loops with `while` and `for` — all those are statements, because they just perform actions and control actions, but don't become values.
  
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
    a
    ```
  
    
  
    * The value returned by `console.log("Howdy")` is `undefined` so that is the value to which `a` gets assigned. Therefore, `a` on the second line evaluates to `undefined`, and `node` shows it as the return value.
  
* Return Values

  * **Expressions always return a value (Review more).** Some functions perform an action but will not return anything `console.log` for example. Other functions will not print anything but perform some operation and return a value.





### Pass By Value vs. Pass By Reference

#### Key Concepts:

* JavaScript is a hybrid of Pass by Value and Pass by Reference

* Pass by Value

  * Definition: Pass by value is when you pass a variable to a function call, that variable is not affected after the function gets executed no matter what the function does with it (think C)

  * When you pass primitive values to functions - JavaScript is pass by value (they are immutable). No operation performed on a primitive value can permanently alter the value.

    * When you pass a primitive value like Number - no matter what the function does with it - you will not be able to see the effects by inspecting the variable that you passed to the function.

      ```javascript
      let a = 5
      
      function add(num) {
        num = num + num;
        console.log(num); // 10
      }
      
      add(a);
      console.log(a); // 5
      
      function add2(a) {
        a = a + a; // "a" here is a function local copy of "a" - not the global variable "a" we declared at the top.
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

    

    * You can see above that passing the string to `changeName` did not change the contents of the `name` variable. Again think "C" here, we are not passing a pointer but the actual copy of the variable so nothing is changed.

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

    

* More references:  https://launchschool.com/books/javascript/read/more_stuff#variablesaspointers



### Control Flow (Truthiness)

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

    * `>` - greater than

    * `>=` - greater than or equal to

    * `<` - less than

    * `<=` - less than or equal to

    * `===` - strict equality operator

    * `!==` - strict inequality operator

    * `==` - loose equality operator

    * `!=`

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

      

    * `!`

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

  * Definitions (refine more):

    * **falsy**: refers to values that evaluates as false.
      * Not the same thing as being actually `true`
    * **truthy**: refers to values that evaluates as true.
      * Not the same thing as being actually `false`

  * Any value can in JavaScript can be coerced into a boolean value which is why you don't always need an expression that evaluates to true or false.

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

* Basic Definitions

  * The function allows programmers to make code shorter and reusable (easier to maintain and read).

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

  * JavaScript functions by default return `undefined` (remember that expressions always evaluates to a value). However, you can use the `return` syntax to specify a value that a function can return.
  * When JavaScript encounters the `return` statement it evaluates the expression and stops running the function. Then returns the expression's value to the location where the function was called.

* Default Parameters

  * If you need a function that can be called without an argument but still has a parameter you can provide for each parameter a default value:

    ```javascript
    let say = (words = 'hello') =>  { console.log(words); }
    say();
    ```

    

* Functions vs Methods (Invocation)

  * 





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

    