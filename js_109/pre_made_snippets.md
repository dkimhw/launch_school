

## Pre-Made Snippets



* Variable assingment
  * When you assign a new value to a variable, JavaScript changes the variable's content to the new value. Reassigning a variable that points to an object merely changes what the variable points to - it does not change the value of the original object.
  * Always declare variables with `let` and `const`. JavaScript has bizarre rules when working with undeclared variables. The most notable one is that all undeclared variables are global variables no matter where this undeclared variable was created. They ignore block and function scope.
  * Return value of an assignment:
    * In JavaScript, assignment is an expression that **evaluates as the expression on the right-hand side of the assignment**
* Variable scope
  * Three main scopes (global, function, block) - scopes are also relative (inner, outer) - i.e. nested functions, nested code blocks
  * A variable's scope determines where it is available to use in a program. **The location where you declare a variable determines its scope.**
* Variables as pointers
  * Reassignments for Primitives & Objects
    * Variables that have primitive values store those values in the variable. When you assign a new value to a variable, JavaScript changes the variable's content to the new value. Reassigning value does not affect any other variables that happen to have the same value.
  * There is a difference with objects - it is a pointer to a memory location that stores the object so if you have multiple variables poinintg to the same object and you use one of the variables to mutate this underlying object - all of the variables will now return the mutated object. 
* Expressions / Return Values
  * Expression is anything that evaluates to a value - note that not everything resolves to a value - statements like `if`, `for`, `let` do not resolve to a value
  * Return value of `let` statement is always `undefined`
  * Assignment expressions returns the value on the right-hand side of the assignment
  * Any value is an expression that evaluates to itself - i.e. `"hi"`
  * You can use evalute to a value or return a value. They are interchangeable
* Pass by Value
  * Definition: Pass by value means that when you use a variable to pass an argument to the function, the function cannot do anything that sets the original variable to a different value. No matter what happens in the function - the variable will still contain the same value that was passed to the function.
  * Second definition: Pass by value means that when we pass a primitive variable to a function parameter we make a new local instance of the variable and copy the value - any changes that we make to the argument (when the function is invoked) will leave the original variable unaffected. 
* Pass by Reference
  * When we pass object into functions as arguments, we pass a pointer for the object into the function - when we pass primitive values as arguments - we pass copy of the primitive value.
  * JavaScript is pass by reference and pass by value with objects (like array). When an operation within the function mutates its argument - it affects the original object
* Primitive values
  * Primitive values are always immutable. No operation performed on a primitive value can permanently alter the value.
  * Remember that primitives are immutable - they don't have parts that one can change. Such values are said to be atomic. If a variable contains a primitive value - all you can do to that variable is use it in an expression or reassign it - gives it an entirely new value. Even `0 + 0` evaluates to a new value `0`.
* `every`:
  * `every` takes in a callback function as an argument. It iterates through the elements in the array, calls the callback fuction on each element once, and checks whether the return value of the callback function is a truthy or falsy value. If, in one of the invocations of the callback function returns a falsy value -- `every` immediately retuns `false`. If, no falsy value is returned after looping through all of the elements in the array, `every` returns `true`.
* Single statement expressions
  * Without the braces surrounding the body of the arrow function, JavaScript will use the computed value as the return value (single statement expressions - without the braces - in arrow functions are implicitly returned) .
* `fill`:
  * `fill` method changes elements in an array to a static value.  `fill` takes in one argument and two optional arguments. The first argument is the value that you want to fill the array with. The next two optional arguments are start index and end index - allowing you to set where you want to start filling the static value and where you want to stop. `fill` is also a destructive method (it will change the calling array)
  * `fill` is a destructive array that returns the modified array 
* `map`:
  * `map` takes in a callback function as its argument. It iterates through the array, and for each element `map` invokes the callback function once. Then it takes the return values of the callback function to construct a new array which `map` returns after it finishes looping. It is not a destructive method - it returns a new array of the same size. It uses the return values as the new elements in the new array. 
    * Not a destructive method
  * We use multi-dimensional array `[[1, 2], [3, 4]]` to call `forEach`. Each inner array / element is passed to the callback function, in turn, and assigned to the parameter `arr`. We then use the element reference operator `[]`, to get the value at index `0` of the array. 
* `filter`:
  * `filter` takes a callback as an argument. Each element of the array is passed to the callback function and assigned to the parameter `object`. `filter` then invokes the callback function once per element. `filter` returns a new array that only contains the elements where the callback function returned a truthy value.
  * When working with `filter` - you must pay attention to the callback's return value. For example, if we write a callback with the curly braces and forget explicit `return` - you get an empty array. Why is that? Since our callback does not explicitly return a value - its implicit return value is `undefined` which is falsy. 
* Arguments vs parameters
  * When defining a function (parameters), when invoking a function (arguments). During execution, JavaScript makes the arguments passed to a function available to the function as local variables with the same name as the function's parameters.
* Variables as Pointers
  * Variables that store primitive values get stored directly inside the variables and passes a copy when passing values to functions
  * Variables that store objects are references to the memory locations that stores the object it was pointing to 
* Pass by value ; pass by reference
  * Pass by value means that we pass along a full copy of that value when we assign or pass along primitive values.  If you change one variable that holds a primitive value - it does not change other variables with the same value
    * When you pass primitive values to functions - JavaScript is pass by value (they are immutable). No operation performed on a primitive value can permanently alter the value.
    * Passing a primitive variable to a function parameter means that we make a new local instance of the variable and copy the value - any changes that we make to the argument (when the function is invoked) will leave the original variable unaffected. 
  * JavaScript is pass by reference **and pass by value** with objects (like array). When an operation within the function mutates its argument - it affects the original object
    * When we pass object into functions as arguments, we pass a pointer for the object into the function - when we pass primitive values as arguments - we pass copy of the primitive value. 
* Truthy & Falsy
  * You are familar with the definitions now
  * Falsy: `false`, `0`, `''`, `undefined`, `null`, and `NaN`
* "function defintion and function invocation"

  * The code inside a function is not executed when the function is defined.
  * The code inside a function is executed when the function is invoked - executes the code inside a function
* `const`
  * `const` prohibts changing **what thing the ** `const` is pointing to but it does not prohibit changing the content of that thing.
* `push` (mutates array by adding the values you want to add to the end of the array). It also returns the new length of the array.
  * Remember that functions have actions that they perform and values that they return and you need to understand this concept. In this case, `push` appends elements to the end of the array but it returns the updated length of that array. 
* `concat`
  * **Explain more**
  * New array that contains all the elements from the original array followed by the elements passed as arguments
* `pop` (removes last value - and also returns the removed value)
* `forEach`
  * As argument, `forEach` requires you to pass a callback function that will perform one or more actions on the arguments that are passed to it.
  * Iterates over the elements in the array and invokes the callback function for each element. It passes the element's value to the callback function.
  * Has a return value of `undefined` - **you cannot explicitly return anything with `forEach` or break the loop**. It is specifically designed to loop over the entire array collection.
* `some` takes a callback function as its argument. For every element in the array, it will invoke the callback function. `some` will look at the truthiness of the return value of the callback function. If a callback function returns a truthy value for any element in the collection - `some` returns true. 
* `every` - takes a callback function. Executes the callback function once for each element in the array until one callback returns a falsy value. If such an element is found, `every` method immediately returns `false`. Otherwise, returns `true`. It looks at the truthiness of the callback's return value. If all of the callback's return value in every iteration is truthy then `every` returns `true`.
* `find` - takes a callbackback function as an argument and returns the first element for which the callback function returns a truthy value
  * If the callback function does not return a truthy value for any of the elements - `find` returns `undefined`
* `findIndex` - similar to `find` except it returns the index of the element for which the callback returns a truthy value
  * `-1` if callback function does not return a truthy value for any of the elements
* `reverse` method reverses the order of the elements of the array it is called on. It also mutates the array. 
* `includes` method does not take a callback argument - instead - it takes an argument that it looks for in the array used to call it - it returns `true` when the argument exists in the array and `false` when it does not.
  * Doesn't really work for objects
* `typeof [1, 2, 3]` returns `'object'`
  * As a consequence if you need to detect whether a variable **references** an array - you need to use `Array.isArray`
* JS Array - Unset elements
  * There is a difference in having `undefined` in an array versus unset elements returning `undefined`. **The unset values are set to `undefined` by JavaScript as an after effect of calling another method.**
* Array equality
  * JavaScript treats two arrays as equal when they are the same array not in terms of content but that they occupy the same spot in computer memory. Objects must be the same object for them to be equal
* `sort`
  * Destructive - use `slice()` if you need to maintain original array
  * When `sort` is called without arguments it coerces all the array elements except those that are `undefined` to their string equivalents then sorts them using string comparisons
* `slice` method extracts and returns a portion of the array. Takes two optional arguments - the first is the index at which extraction begins while the second is where extraction ends. Also not destructive
* Method chaining: This is an example of method chaining that allows you to call methods on the return value of another method

