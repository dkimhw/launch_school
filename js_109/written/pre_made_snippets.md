

## Pre-Made Snippets



* Variable assingment + reassignments
  * Three ways:
    * `let`, `const`, `var` (`var` does not have block scope)
      * Once you initialize a constant you cannot give it another value. Constants store values that remain the same throughout the execution of a program.
      * With `const` and objects - cannot reassign what it is pointing to but can change the elements inside it
  * When you assign a new value to a variable, JavaScript changes the variable's content to the new value. Reassigning a variable that points to an object merely changes what the variable points to - it does not change the value of the original object.
  * Always declare variables with `let` and `const`. JavaScript has bizarre rules when working with undeclared variables. The most notable one is that all undeclared variables are global variables no matter where this undeclared variable was created. They ignore block and function scope.
  * Return value of an assignment:
    * In JavaScript, assignment is an expression that **evaluates as (or returns) the expression on the right-hand side of the equal assignment**.

* Variable scope
  * Three main scopes (global, function, block) - scopes are also relative (inner, outer) - i.e. nested functions, nested code blocks
    * Global variables are variables that can be used & called from anywhere in the program.
    * In JavaScript, blocks are segments of code statements grouped by two curly braces.
    * Functions define a new scope for local variables
    * Rules for blocks & functions:
      * Inner scope can access outer scope variables
      * Outer scope cannot access inner scope variables
      * Peer scopes cannot access each other's variables 
      * Nested scopes
      * Variable shadowing - inner scope variables can shadow outer scope variables
        * JavaScript will use the local variable instead of the global variable when there is variable shadowing
  * A variable's scope determines where it is available to use in a program. **The location where you declare a variable determines its scope.** This is incredibly important. Check test_scope.js
  * Note that a local variable only comes into existence when you call that function - the mere act of declaring a function does not create any variable.
    * When `aFunc()` is called - `a` will be created and accessible at the function scope but immediately discarded once the function executes and returns to the main flow of the program
  * JavaScript performs lookup to see if the variable exists outside of the block & function if it doesn’t find it in the local variable.
  
* Variables as Pointers
  * Assignments for Primitives
    * Variables that have primitive values store those values in the variable and passes a copy of the value when used in expressions or used to assign values to other variables. 
    * When you assign a new value to a variable, JavaScript changes the variable's content to the new value. Reassigning value does not affect any other variables that happen to have the same value nor does it change the value of the original value that the variable was storing (referencing if object)
    * When we assign a primitive value to a variable - it also means that we are assigning a copy of that value to this variable (this is a super important concept) and there is no link between the two values and variables. 
      * Useful for describing certain problems
  * Assignments for objects
    * Reassignment does not mutate the variable to the left of the assignment operator. Instead - it changes the variable in such a way that it refers to the object on the right. Each variable has a value and reassigning values does not affect any other variables that happen to have the same value 
      * Reassignment applies to the item you are replacing not the object or array that contains that item: `g[1] = 'x' // mutating expression`
        * We are not reassigning a whole array but reassigning a specific element in the array which mutates the array.
      * **Remember when you are reassinging a whole array or a primitive value - we are only changing what the variable is referencing - it does not impact what the variable was pointing to before.**
        * The only exception is that when we are reassigning specific elements in the array, not the array itself - this type of assignment mutates the underlying object. 
  * Objects
    * There is a difference with objects - variable saves/holds a pointer to a memory location that stores the object so if you have multiple variables pointing to the same object and you use one of the variables to access the pointer and mutate this underlying object - all of the variables will now reflect the mutated object. 
      * With objects, JavaScript variables hold pointers to objects in memory locations not the actual object values (opposite of primitive values). 
    * Example: **When let f = e runs - both f and e both contain the same pointer value. When e.push(3, 4) runs - it uses the pointer to access and mutate the array by appending 3 and 4 to its original object. Since f also points to that same array, both e and f reflect the updated contents of the array when we call them again.**
      * This happens because variables that store objects are references to the memory locations that was storing [1, 2].
  
* Implict & Explict Coercion:
  
  * Implicit Coercion: It is when JavaScript coerces one of the values to match the other when you are performing an operation involving values of two different types.
  * Explicit Coercion: Explicit type coercion happens when the programmer intentionally uses one of the many built-in functions and operators to coerce one type of value to another. 
  * Rules:
    * When a number is compared with a string using `==` the string is coerced into a number
    * When a boolean is compared with any other value it is coerced into a number and compared again using the `==` operator
    * When an object is compared with a primitive value - the object is coerced into a primitive value and compared again using the `==` operator.
    * A `==` comparison of `undefined` with `null` evaluates to true.
  
* Expressions / Return Values
  * Expression is anything that evaluates to a value - note that not everything resolves to a value - statements like `if`, `for`, `let` do not resolve to a value
  * Return value of `let` statement is always `undefined` and cannot be used in an expression. Some statements cannot be used as part of an expression
  * Any value is an expression that evaluates to itself - i.e. `"hi"`
  * You can use evalute to a value or return a value. They are interchangeable
  * `console.log` versus `return`. Expressions return a value and also can perform an action. Example: `console.log("hello world")`.
  
* Pass by Value (There two ways)
  * Path 1: Pass by value means that when we pass a variable referencing a primitive value to a function parameter we assign the **copy** of the value. As a result, any changes that we make to the argument in the function will leave the original variable unaffected.They hold the same value at this point but are not linked in any way. So any changes that we make to the argument (when the function is invoked) will leave the original variable unaffected. 
    
    * This one is not too bad either.
  
  * **Path 2 - This might be better**: When you pass primitive values to functions, JavaScript is pass-by-value. Since primitive values are immutable, no operations performed on a primitive value can permanently alter the value you are trying to change. They are also known as atomic variables because there isn't a single part of a primitive value that can be mutated.
  
  * Alternate: In other words, when you pass a primitive value to a function, no matter what that function does with that value, you won't be able to see the effects by inspecting the variable that you passed to the function. The reason for this is that primitive values are immutable.
  
    ```javascript
    let a = 5
    
    function add(num) {  
    	num = num + num; 
    	console.log(num); // 10
    }
    
    add(a);
    console.log(a); // 5
    
    function add2(a) {  
    	a = a + a; // "a" here is a local copy of "a" - not the global variable "a" we declared at the top. So we are not actually reassigning global variable but the argument `a`
    	console.log(a); // 10
    }
    
    add2(a);
    console.log(a); // 5 because JavaScript is pass by value - any changes made to the argument will not be reflected in the original variable.
    ```
  
    
  
* Pass by Reference
  * When we pass an object into functions as arguments, we pass a pointer for the object into the function - when we pass primitive values as arguments - we pass copy of the primitive value.
  * JavaScript is pass by reference when operation within the function mutates its argument and affects the original object. Accessing the variable you used to pass into the function again will now reflect the changes that were made in the function**
    * Since JavaScript is a pass by reference when passing objects to functions, mutating the argument can affect the original object. When you call one.splice(0, 1, "two") - we are mutating the underlying object that local argument one and global variable one were both were referencing. Here, we replace "one" in ["one"] with the string value "two". 

* Truthy vs Falsy values 

  * Truthiness means that we can use any logical expression in a conditional statement because any value in JavaScript can be coerced into a boolean value which is why you can use a value like `'Hi'` in a conditional statement
  * `false`, `0`, `''`, `undefined`, `null`, `NaN`

* Functions

  * Function definition and function invocation
    * The code inside a function is not executed when the function is defined.
      * Parameters - local variable names between () . Arguments are the values you pass into the function for each of those parameters
      * Arguments let you pass data from outside the function’s scope into the function so that the function can access the data.
      * You can set default values for function parameters
    * The code inside a function is executed when the function is invoked
  * Function declaration, expressions, and arrow functions
    * Function declaration - hoisting
    * Function expression - it cannot invoke a function expression before it appears in your program. JavaScript allows you to assign functions to a variable. You are allowed to do this since JavaScript functions are first-class functions.
      * Key feature of first-class functions is that you can treat them as any other value. You can assign them to variable, pass them as arguments to other functions and return them from a function call.
    * Arrow functions implicitly return values by simply omitting the curly braces that traditionally wrap a function’s body if their body only contains a single expression.
      * When using implicit returns, object literals must be wrapped in parenthesis so that the curly braces are not mistaken for the opening of the function’s body.
      * Single expression
        * Without the braces surrounding the body of the arrow function, JavaScript will use the computed value as the return value (single statement expressions - without the braces - in arrow functions are implicitly returned) .
  * Functions that take other functions as arguments are called Higher Order Functions - as are functions that return other functions
  * Function return values
    * JavaScript functions by default return `undefined` (all JS function calls evaluate to a value even without an explicit return statement). However, you can use the return syntax to specify a value that a function can return.
    * When JavaScript encounters the return statement it evaluates the expression and stops running the function. Then returns the expression’s value to the location where the function was called.
  * Mutating the caller
    * A method can permanently alter the object that invokes the method (otherwise known as mutating the caller).
    * Mutation only happens with arrays and object but not for primitive values like numbers, strings, and booleans (they are immutable) - operations on immutable data types will always return a new value. Operations on mutable values may or may not return a new value and may or may not mutate the data.
  * Pure functions
    * Function always returns the same result if the same arguments are passed in. It only depends on the input arguments.
    * No side effects
      * Function modifies a variable that is not locally scoped
      * Function mutates one of its arguments
    * A **side effect** is any application state change that is observable outside the called function other than its return value. **Side effects** include: Modifying any external variable or object property 
      * Like calling `push` inside a function - it will lead to a change to the underlying object hence change the content of what the variable was referencing before this function was called.

* Arrays:

  * `every`:

    * `every` takes in a callback function as an argument. It iterates through the elements in the array, calls the callback fuction for each element, and checks whether the return value of the callback function is a truthy or falsy value. If one of the invocations of the callback function returns a falsy value - `every` immediately retuns `false` - otherwise returns `true`.
    * Returns: `true` or `false`

  * `fill` (mutate)
    
    * `fill` method changes elements in an array to a static value.  `fill` takes in one argument and two optional arguments. The first argument is the value that you want to fill the array with. The next two optional arguments are start index and end index - allowing you to set where you want to start filling the static value and where you want to stop. `fill` is also a destructive method (it will change the calling array)
    * `fill` is a destructive array that returns the modified array 
    
  * `map`:
    
    * `map` takes in a callback function as its argument. It iterates through the array, and for each element `map` invokes the callback function once. Then it takes the return value of the callback function and appends it to a new array which `map` returns after it finishes looping. 
      * Not a destructive method
      * Returns a new array of the same size
    
  * `filter`:
    
    * Actions:
      * Definition 1: `filter` takes a callback as an argument. Each element of the array is passed to the callback function and assigned to the parameter `object`. `filter` then invokes the callback function once per element. `filter` returns a new array that only contains the elements where the callback function returned a truthy value.
      * Definition 2: `filter` takes a callback function as an argument and iterates over the elements of the array. During each iteration - it invokes the callback function using the value of the current element as an argument. If the callback returns a truthy value - `filter` appends the element’s value to a new array. Otherwise, it does nothing.
      * Definition 3: `filter` returns a new array that includes all the elements from the calling array for which the callback function returns a truthy value.
    * Return:
      * A new array
    * When working with `filter` - you must pay attention to the callback's return value. For example, if we write a callback with the curly braces and forget explicit `return` - you get an empty array. Why is that? Since our callback does not explicitly return a value - its implicit return value is `undefined` which is falsy. 
    
  * `push` (mutate)
    
    * Return value: new length of the array
    * Action: mutates array by adding the values in the argument to the end of the calling array
    * Remember that functions have actions that they perform and values that they return and you need to understand this concept. In this case, `push` appends elements to the end of the array but it returns the updated length of that array. 
    
  * `concat`

    * Return value: a new array that contains all the elements from the original array followed by the elements passed as arguments
    * Action: Creates a new array with the values from the original array and adds all the values you want to add to the end of the new array

  * `pop` (mutate)

    * Return value: returns the removed value
    * Action: mutates array by removing the last element of the array

  * `forEach`

    * Return value: returns `undefined`  
    * Action:
      * `forEach` invokes the callback function once for each element in the array. `forEach`, during each iteration, invokes the callback with the element’s value as the argument. `forEach` does not do anything with the return value of the callback function. 
      * **You cannot explicitly break the loop**. It is specifically designed to loop over the entire array collection.
    * Example:
      * We use multi-dimensional array `[[1, 2], [3, 4]]` to call `forEach`. Each inner array / element is passed to the callback function in turn, and assigned to the parameter `arr`. We then use the **element reference operator `[]`**, to get the value at index `0` of the array.
      * On the first invocation of the callback, `arr[0]` returns 1, and on the second, it returns `3`. In each invocation ,`console.log` outputs a string representation of the value returned by `arr[0]`. **Since this is a single expression callback** - the callback’s implicit return value is the return value of `console.log(arr[0])` which is `undefined`.
      * `forEach`, however, does not do anything with this returned value though - and since the return value of `forEach` is always `undefined` - that is what ultimately gets returned.
    
  * `some` takes a callback function as its argument. For every element in the array, it will invoke the callback function. `some` will look at the truthiness of callback's return value. If a callback function returns a truthy value for any element in the collection - `some` returns `true`. 

    * Non-mutating

  * `reduce`

    * Action:
      * Takes two arguments: a callback function and a value that initializes something called the accumulator. The callback function itself also takes two arguments: value of the element from the array and the current value of the accumulator. 
      * Ultimately this function loops through the array to reduce the values in the array into a single value
    * Return Value:
      * Returns the accumulator at the end of the iteration

  * `find` 
    
    * Action:
      * Takes a callbackback function as an argument and returns the first element for which the callback function returns a truthy value
    * Return:
      * Value 
      * If the callback function does not return a truthy value for any of the elements - `find` returns `undefined`
    
  * `findIndex` 
    
    * Action
      * Takes a callbackback function as an argument and returns the index of the first element for which the callback function returns a truthy value
    * Return value
      * Index of the first elment for which the callback returns a truthy value
      * `-1` if callback function does not return a truthy value for any of the elements
    
  * `splice` (mutates)

    * Action:
      * The **`splice()`** method changes the contents of an array by removing or replacing existing elements and/or adding new elements [in place](https://en.wikipedia.org/wiki/In-place_algorithm).
      * splice takes in three arguments: starting index, how many elements from the start index to change, the new value that will replace the current value
    * Return value
      * An array containing the deleted elements.
      * If only one element is removed, an array of one element is returned.
      * If no elements are removed, an empty array is returned.

  * `reverse` (mutates)

    * Action
      * Method reverses the order of the elements of the array it is called on. It also mutates the array. 
    * Return value
      * Returns the mutated array

  * `includes` 
    
    * Action
      
      * Method does not take a callback argument - instead - it takes an argument that it looks for in the array used to call it - it returns `true` when the argument exists in the array and `false` when it does not.
      
    * Return value
    
      * boolean value (true if the argument exists in array)
    
    * Doesn't really work for objects
    
      ```javascript
      let arr = ['a', 'b', {c: 'foo'}];
      arr.includes({c: 'foo'}); // => false
      
      let obj = {c: 'foo'};
      let arr = ['a', 'b', obj];
      
      arr.includes(obj); // => true
      ```
    
  * Arrays are objects

    * Must use `Array.isArray(arr)` to check if an object is array or not `typeof arr` will not help.

  * JS Array - Unset elements
    
    * JS treats unset array elements as missing but length property includes the unset elements. JS's built-in methods will not consider empty items. Ambiguity in what is empty
    
      ```javascript
      let arr = [];
      arr.length = 3;
      
      arr; // returns [ <3 empty items> ] 
      Object.keys(arr).length // 0
      arr.length // 3
      ```
    
      
    
    * There is a difference in having `undefined` in an array versus unset elements returning `undefined`. **The unset values are set to `undefined` by JavaScript as an after effect of calling another method.**
    
  * Idea of Empty Array is subjective
    
    * You can create array “elements” with indexes that use negative or non-integer values or even non-numeric values
      
    * You can add properties to arrays - is that empty? Depends:
      
    * All built-in array methods will ignore these properties
      
      ```javascript
      let arr = [];
      arr[-3] = 5;
      arr['foo'] = 'a';
      
      // Is arr empty?
      console.log(arr.length); // 0  Yes if you go by length            
      console.log(Object.keys(arr).length) // [ '-3', 'foo' ]  No if you count the properties
      ```
      
      
    
  * Array equality
    
    * JavaScript treats two arrays as equal when they are the same array not in terms of content but that they occupy the same spot in computer memory. Objects must be the same object for them to be equal
    
  * `sort` (destructive)
    
    * Destructive - use `slice()` if you need to maintain original array
    * Returns the sorted array
    * When `sort` is called without arguments it coerces all the array elements except those that are `undefined` to their string equivalents then sorts them using string comparisons
    * If a callback function is supplied, all non-`undefined` array elements are sorted according to the return value of the compare function (all `undefined` elements are sorted to the end of the array with no call to `compareFunction`. 
    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort 
    
  * `slice` method extracts and returns a portion of the array. Takes two optional arguments - the first is the index at which extraction begins while the second is where extraction ends. Also not destructive

    * Returns new array

  * `shift` (destructive)

    * Action:
      * This method removes the first element from an array 
    * Return value
      * returns the removed element 

  * `unshift` (destructive)

    * Action:
      * This method adds element to the front of the array
    * Return value
      * Returns the new length of the array

  * Method chaining: This is an example of method chaining that allows you to call methods on the return value of another method

* Object

  * Objects store a collection of **key-value pairs**. Each item in the collection has a name that we call key and an associated value. Arrays, on the other hand, associate values with ordered indexes

  * Keys are strings; Values can be any type including other objects

  * Note that there are two ways of referencing an element in an object. The first one is called the dot notation and the second one is the bracket notation. 

  * Whether a key exists:

    ```javascript
    obj.hasOwnProperty('c'); // => true
    obj.hasOwnProperty('d'); // => false
    
    // Another way
    Object.keys(obj).includes('c'); // => true
    Object.keys(obj).includes('d'); // => false
    ```

    

  * `Object.keys` static method returns an object’s keys as an array. You can iterate over that array using any technique that works for arrays.

    * `Object.values`
    * `Object.entries`
      * Static method returns an object's key-value pairs as a nested array
    * `Object.assign()`
      * The **`Object.assign()`** method copies objects from one or more *source objects* to a *target object*. It returns the target object.

* String
  * `concat`
    * Action:
      * Concatenates the string arguments to the calling string
    * Returns:
      * A new string 
    
  * `split`
    * Action: 
      * Separates a given string into multiple strings and returns them in the form of an array. How the string gets split depends on the argument you provide to split
      * On line 3, we call the method split("") on the value of munstersDescription. split takes in one parameter called separator used to split the string into a list of substrings. split returns a new array, and in this case: ["T", "h", "e"...] (because an empty string denotes to split that the split happens on every character of the string ). 
    * Return value:
      * Array of substrings
    
  * `includes`
  
    * Action:
      * Checks whether the string in the argument you passed to it exists in the calling string
    * Return value:
      * `true` or `false`
  
  * `trim`
  
    * Action:
      * Removes whitespaces, new line, tab
    * Return value:
      * New string
  
  * `toUpperCase` and `toLowerCase` - converts the strings to uppercase or lowercase respectively. If you want capitalize combine it with slice
  
    * returns a new string with only lowercase letters
  
  * `charAt` - returns the character given an index
  
  * `slice`
  
    * Extracts a section of a string and returns it as a new string
    * When given negative numbers as the indices, slice treats them as string length + index. In the above, an index of 4 is equivalent to 9 + (-4) since the length of the string is 9 and 9 + (-4) equals 5. Likewise, 2 is equivalent to 7. 
  
  * `substring`
  
    * Same with some differences in edge case behavior
  
  * Differences:
  
    ```javascript
    // Difference 1
    'abcdef'.substring(3, 1); // => 'bc' (swaps 1 and 3)
    'abcdef'.slice(3, 1); // => ''
    'abcdef'.substring(-2); // => 'abcdef' - treats it as 0
    'abcdef'.slice(-2); // => 'ef' - treats them as length - index
    ```
  
  
  
* Continue:
  
  * https://www.w3schools.com/jsref/jsref_continue.asp