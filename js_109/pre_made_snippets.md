

## Pre-Made Snippets



* `every`:
  * `every` takes in a callback function as an argument. It iterates through the elements in the array, calls the callback fuction on each element once, and checks whether the return value of the callback function is a truthy or falsy value. If, in one of the invocations of the callback function returns a falsy value -- `every` immediately retuns `false`. If, no falsy value is returned after looping through all of the elements in the array, `every` returns `true`.
* Return value of an assignment:
  * In JavaScript, assignment is an expression that **evaluates as the expression on the right-hand side of the assignment**
* `fill`:
  * On line 2, we call method `fill` on the array value of `arr`. `fill` method changes all elements in an array to a static value.  `fill` takes in one argument and two optional arguments. The first argument is the value that you want to fill the array with. The next two optional arguments are start index and end index - allowing you to set where you want to start filling the static value and where you want to stop. `fill` is also a destructive method (it will change the calling array)
* `map`:
  * `map` takes in a callback function as its argument. It iterates through the array, and for each element `map` invokes the callback function once. Then it takes the return values of the callback function to construct a new array which `map` returns after it finishes looping. It is not a destructive method - it returns a new array of the same size. It uses the return values as the new elements in the new array. 
  * We use multi-dimensional array `[[1, 2], [3, 4]]` to call `forEach`. Each inner array / element is passed to the callback function, in turn, and assigned to the parameter `arr`. We then use the element reference operator `[]`, to get the value at index `0` of the array. 
* `filter`:
  * `filter` takes a callback as an argument. Each element of the array is passed to the callback function and assigned to the parameter `object`. `filter` then invokes the callback function once per element. `filter` returns a new array that only contains the elements where the callback function returned a truthy value.
  * When working with `filter` - you must pay attention to the callback's return value. For example, if we write a callback with the curly braces and forget explicit `return` - you get an empty array. Why is that? Since our callback does not explicitly return a value - its implicit return value is `undefined` which is falsy. 
* Primitive values
  * Primitive values are always immutable - thus no matter what happens inside the function - the original value passed to the function never changes.
  * When we pass object into functions as arguments, we pass a pointer for the object into the function - when we pass primitive values as arguments - we pass copy of the primitive value.
* Arguments vs parameters
  * When defining a function (parameters), when invoking a function (arguments). During execution, JavaScript makes the arguments passed to a function available to the function as local variables with the same name as the function's parameters.
* Assignments
  * When you assign a new value to a variable, JavaScript changes the variable's content to the new value. Reassigning values does not affect any other variables that happen to have the same value.
* Variables as Pointers
  * Variables that store primitive values get stored directly inside the variables and passes a copy when passing values to functions
  * Variables that store objects are references to the memory locations that stores the object it was pointing to 
* Pass by value ; pass by reference
  * Pass by value means that we pass along a full copy of that value when we assign or pass along primitive values.  If you change one variable that holds a primitive value - it does not change other variables with the same value
    * When you pass primitive values to functions - JavaScript is pass by value (they are immutable). No operation performed on a primitive value can permanently alter the value.
    * Passing a primitive variable to a function parameter means that we make a new local instance of the variable and copy the value - any changes that we make to the argument (when the function is invoked) will leave the original variable unaffected. 
  * JavaScript is pass by reference **and pass by value** with objects (like array). When an operation within the function mutates its argument - it affects the original object
* Expressions
  * Expression is anything that JavaScript can evaluate to a value
  * Evaluated value of your expression
  * Any value is an expression that evaluates to itself
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

