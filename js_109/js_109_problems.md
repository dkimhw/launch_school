### Where to Source Good Problems to Practice?

https://medium.com/launch-school/my-complete-study-guide-for-the-javascript-109-written-interview-assessment-9d95e0340da1

**Precision on language is SO important**

Always read the problem closely - you really need to pay attention to what it is that they are asking for.



## Test Notes



Defintions: For the purposes of this assessment we will use some terms in very precise ways. You should be exremely **precise** in the language that you use. 



Variables:

* Unless mentioned specifically - we use the term variable in the broadest sense possible. On the exam, that means that all of the following should be treated as variables
  * Variables declared with `let` or `const`
  * Function parameters
  * Function names
  * Object property names **are not** variables.



Truthiness

* In the assessment, we want you to be very clear about the distinction between truthy and falsy values and the boolean values `true` and `false`.
* In JavaScript, the *falsy* values `false`, `0`, `NaN`, `""`, `undefined`, and `null` are all said to *evaluate to false* when used in a boolean context. All other values, the *truthy* values, are all said to *evaluate to true*. Note that saying that a value evaluates to true or false is **not** the same as saying that those values **are** `true` or `false`, or that they are **equal to** `true` or `false`. These may seem like subtle distinctions, but they are important ones.
* Use:
  * Use "evaluates to true" or "is truthy" when discussing expressions that only have to be truthy.
  * Use "evaluates to false" or "is falsy" when discussing expressions that only have to be falsy.
  * Do not use "is `true`" or "is equal to `true`" unless you are specifically discussing the boolean value `true`.
  * Do not use "is `false`" or "is equal to `false`" unless you are specifically discussing the boolean value `false`.



Array Elements

* JavaScript arrays have gaps where there are missing elements - elements that have never been assigned a value
* Accessing these elements by index value returns `undefined` but certain operations like `Array.prototype.forEach` ignore those missing elements. That leads to the question of whether the missing elements are really part of the array. We can think about this array as either a 3-element array whose values are missing or as an empty array whose length is 3. Which you choose depends on the context.
* For most purposes: the elements of JavaScript array are accessed by an index value - however, arrays are also objects which means that they can have properties whose name is not a non-negative integer.
  * For example, it is possible to define a property whose key is `"-1"` or `"foo"` on an array.
  * You can access its value using an index-like syntax: `array[-1]` or `array["foo"]`.
  * As with missing values - that leads to the question of whether these properties are array elements. Again the answer is context-dependent. 
    * There may be instances when you want to treat `-1` and `"foo"` properties as elements but often you will not.



Distinctions:

* **Parameters are the names assigned to a function's arguments - arguments are the values that get passed to the function.**
* **Variables** are not passed to or returned by functions: values or **references** are passed



## Problems



### Written Test Examples

#### Problem 1

```javascript
let greeting = 'Hello';

while (true) {
  greeting = 'Hi';
  break;
}

console.log(greeting);
```

* My interpretation:
  * On line one, we initialize variable `greeting` with the value `'Hello'`
  * One line 3 to 6, we have a `while` loop and a `{}` indicating a code block. Within the loop, we are reassigning `greeting` with the value `Hi`. Since, there is no local variable `greeting` in the block scope, JavaScript will look outside of the code block and finds the outer scope variable `greeting` that contains `'Hello'` and uses this for reassignment. This is one of the main rules of variable scoping. Inner scope variables can access outer scope variables. After the reassignment, we call `break` which terminates the current loop. 
  * On line 8, we call `console.log` and pass in the value of `greeting`. This outputs to console the value `'Hi'` .
* LS interpretation:
  * The global variable `greeting` is assigned to the string `'Hello'` on line 1. Within the loop, lines 3 to 6 define a block within which `greeting` is reassigned to the string `Hi` on line 4. The loop stops running when it encounters the `break` on line 5. On line 8, `console.log` is called with value of the variable `greeting` passed to it as an argument



#### Problem 2

```javascript
function myFunc() {
  console.log("Hello, world!");
}

myFunc()
```

* My interpretation:
  * On line 1, we declare a function called `myFunc()`  that takes in no arguments. The main code of the function lies between the `{}` block on lines 1 through 3.
    * Function declaration by itself really doesn't do anything until it is invoked
  * On line 5, we invoke the function and JavaScript executes the code in `myFunc()`. 
    * In the execution of `myFunc()`, it invokes `console.log()` and the argument passed to `console.log()` is `"Hello, world!"`. 
    * As a result, `console.log` outputs to the terminal `Hello, world!`.
    * JavaScript functions without an explicit `return` statement, will return `undefined` by default.  
* LS interpretation
  * The function outputs the string `"Hello, World"` and returns `undefined`
* **This is super important**
  * In programming we are always concerned with the output and the return value - as well as any object mutation. We need to speak in those terms and not use vague results like `results`.



#### Problem 3

```javascript
let a = "Hello";

if (a) {
  console.log("Hello is truthy");
} else {
  console.log("Hello is falsy");
}
```

* My interpretation:
  * On line 1 - we initialize a variable called `a` with the value `"Hello"`.
  * On line 3 - we have an `if` statement and `{}` code block from line 3 to 7. 
    * `if` statement takes a condition - basically any expression that evaluates to true or false. In this code, we use `a` as the condition. In JavaScript, non-empty strings will always evaluate to true - thus, non-empty strings like `"Hello"` are considered truthy values but they are not the same as the boolean value of `true`. `if` condition only needs an expression that **can** evaluate to true or false
    * In this case, we are passing the value "Hello" and this is a truthy value. 
    * As a result, we will invoke `console.log('Hello is truthy');`. We pass the value `"Hello is truthy"` to `console.log`. `console.log` will take the argument and output it to the console.
    * The output to the console is: `'Hello is truthy'`. 





### Study Group

#### Problem 1

What does this output? What does it return

```javascript
[[1, 2], [3, 4]].map(arr => console.log(arr[0]));
```



**Explanation:**

* We call `map` function on the nested array structure `[[1, 2], [3, 4]]`. `map` function takes in one argument - a callback function. `map` iterates over each element of the array that it is called on and for each element, it invokes the call back function. 
* `map` also returns a new array of the same size. The value of each element in the array however depends on the return value of the callback function. 
* In this particular code, the callback function takes in the value of the element on each loop and invokes `console.log(arr[0])`. This will output: `1` and `3` (Uses `[]`  to access the first index of each element in the array - `arr[0`]). **Since `console.log()` returns `undefined` - the callback function here also returns `undefined`.** 
* Once `map` function finishes looping the entire array, it will return a new array: [`undefined`, `undefined`] 



#### Problem 2

What does it return?

```javascript
['ant', 'bear'].map(elem => {
  if (elem.length > 3) { return elem; }
});
```



**Explanation:**

* We have an array `['ant', 'bear']` and we call `map` on this array. `map` returns a new array of same length as the array `map` was called on (`2` in this case). `map` also takes in a callback function as an argument. It iterates over the array and passes the value of the element to the callback function and invokes the callback function for each element in the array.
* In this function's case, for each element of the array `map` loops over, the value of the element is passed to the callback function. Then the callback function takes the argument and checks that the `length` property of each `elem` are greater than `3`. If it is greater than `3`, the callback function returns back the same element value. If it is not greater than `3` - since no specific value is returned by the callback function in this case - it will return `undefined`. 

* At the end of the loop `map` returns `[undefined, 'bear']` as a result.





#### Problem 3

What does it return?

```javascript
[1, 2, 3].filter(num => 'hi');
```



* We call `filter` on array `[1, 2, 3]`. 
  * `filter` takes a callback function as its argument. `filter()` iterates over each element of the calling array and invokes the callback function for each passed in element.  It also returns a new array based whether the return value of the callback function is a truthy value. If the return value of the callback function is a truthy value, it will be included in the new array.
* In this particular code, as it loops through the array `[1, 2, 3]`, it will pass the **value of each element** into the callback function. Since the callback function just returns "hi" (single statement callback can implicitly return the expression like this without explicit `return`) and "hi" is a truthy value (it is a non-empty string), all of the elements from the calling array, as a result, will be added to the new array that is returned at the end after `filter` loops through all of the elements.
* The return value is: `[1, 2, 3]`



#### Problem 4

What does it return?

```javascript
let animal = "dog";

const speak = animal => {
  if (animal === undefined) {
    console.log("Bark");
  } else {
    console.log("Meow");
  }
};

speak();
```



* Important: You cannot know what the code will print until line 11 - so don't describe the function until it is actually invoked
* On line 1: we initialize `animal` with the value `"dog"`.
* On line 3: we declare the function `speak` that takes in one argument (parameter `animal`).
* On line 11: we invoke the function `speak()`. No parameters are passed and as a result, the argument `animal` will be `undefined`. One important thing to note here is that `animal` is a local variable of the function `speak()`. It is not the global variable that was initialize in line 1. There is variable shadowing that happens here that prevents the function from ever accessing the global variable `animal`. 
  * Since `ainmal === undefined` is true, `console.log()` outputs to the console `"Bark"`.



#### Problem 5

What does it return?

```javascript
let greeting = "Hello";

const test = str => {
  str.concat(" World!");
  str = str.toLowerCase();
  return str;
}

test(greeting);
console.log(greeting);
```



* On line 1, we initialize the variable `greeting` with value "Hello"
* On line 2, we declare the function `test` that has one parameter `str`
* On line 9, we invoke the function `test()` by passing to the function value of  `greeting` (`hello`). 
  * In the execution of the execution (line 4): We call the method `concat(" World!")` on the value of `str`  - since strings are immutable (cannot mutate primitives like strings) - the value does not change and instead this expression `str.concat(" World!")` actually returns a new string (if we want to use it later we must save the return value in a variable).
    * Remember that we cannot call methods on variables but on the values that are assigned to the variables. 
  * Then we reassign local variable `str` with the return value of expression `str.toLowerCase()` which returns a new string that only contains lowercase letters.
    * At this point, we have `"hello"` in variable `str`
  * Then finally, we call `return str` to return the value `hello`.
* Finally, on line 10: we call `console.log(greeting)` passing the value of `greeting`. Since strings are immutable and pass by value, the global variable `greeting` remains unchanged. This code outputs to console: `Hello` and returns `undefined`.



#### Problem 6

What does it return?



```javascript
let greeting = ["Hello"];

function test(arr) {
  arr = arr.concat("World!");
  return arr;
}

test(greeting);
console.log(greeting);
```



* On line 1: we initialize the variable `greeting` with the variable `["Hello"]`
* On line 3: we declare the function `test` with parameter `arr`.
* On line 8: we invoke the function `test` by passing to the argument value of `greeting`.
  * `arr` now references `greeting` because in JavaScript objects are pass by reference
  * Then on line 4: we reassign argument `arr` with `arr.concat("World!")`. `concat` method is not destructive but instead returns a new array returning `["Hello", "World!"]`
    * Similar to `push` it adds the argument you passed to it at the end of the calling array.
    * Remember that `arr` was referencing the same array object as `greeting` - but after this reassignment it is now pointing to a new array object that contains `["Hello", "World!"]`. 
      * Reassignment does not mean mutation it just changes what the variable references or points to. No mutation occurs here.
  * Then on line 5: we `return` the `arr`. 
  * However, we do not save the return value anywhere
* On line 9, we call `console.log()` because we used `concat`, the underlying object that global variable `greeting` on line 1 was referencing has not changed. We still output to console:
  * `["Hello"]`





### Quiz 2

#### Problem 1 (question 3 in the quiz)

The code below should print both message 50% of the time. What is the bug? Fix it and then answer what will this output & why? 



```javascript
let a = 2;
let b = Math.floor(Math.random() * 2);
a *= b;

if (a = 2) {
  console.log('The value of `a` is two.');
} else {
  console.log('The value of `a` is NOT two.');
}
```



**Fixing the bug:**

The bug is due to `a = 2` - this is an assignment statement. We are assigning `a` by `2` in the condition. Assignment statements return the value that we are reassigning the variable by. In other words, this reassignement expression returns `2`.

Since - `2` in JavaScript evaluates to true (truthy value), it will only print The value of `a` is two.  So we need to change it to    `a === 2`.



**Explanation:**

We first declare and initialize variable `a` with the value of `2`. Then, on the following line, we declare and initalize variable `b` with `Math.floor(Math.random() * 2)`. `Math` is an object that has a variety of useful objects and static methods that we can leverage. `Math.floor` takes in a `Number` and it returns the largest integer less than or equal to the given `Number` (i.e. pass in `5.05` - you will get `5`). `Math.random` returns a random `Number` between 0 and 1. The multiplication by `2` makes sure that the range of values will be between `0` and `2`. 

`Math.floor()` here will turn the resulting number into an integer less than or equal to the value returned by `Math.random() * 2`. The result of this is that you only get a value that is either `0` or `2`. 

Then we reassign `a` by multiplying `a`  * `b` and reassigning the returned value of that multiplication.

Depending on the value of `a`  whether it is `0` or `2`, it will print specific message. If `a = 0` then the code will output to the console `'The value of a is two.'`





#### Problem 2 (question 9 in the quiz)

Look at the following code - What will output to the console?

```javascript
let string = "1.2l"
let num1 = Number(string);
let num2 = parseInt(string);

console.log(num1);
console.log(num2);
```



**Explanation:**

Line 1 we initalize and declare variable, `string`  with "1.2l". 

Then in line 2, we initalize and declare variable `num1` with the return value of `Number(string)`. `Number()` takes in an argument and in this case, it takes in the variable, `string`, that was just initialized. 

Since, Since the string we passed in includes non-numeric character "l", `Number()` will return `NaN`. So `num1` is initialized with `NaN`.

Then in line 3, we initialize `num2` with the value returned from `parseInt(string)`. `parseInt` takes in two arguments, string and radix (optional). In this case we don't use radix option. We pass the value of `string` to `parseInt()`. What is interesting about `parseInt()` is that it will parse the string until it hits a first non-whitespace character that cannot be converted to a number. So in our case here, `parseInt()` is able to correctly parse out `1.2` and stops once it hits `l`. 

As a result, `num2` points to the value `1.2`.

When `console.log` is called for both variables, it will output to console and return `undefined`:

`NaN`

`1.2`



#### Problem 3 (question 10 in the quiz)

What the following return/print?

```javascript
let n = 1; // returns undefined
console.log(n == '1'); // true
console.log(n === '1'); // false
console.log(n = '1'); // '1'
```



**Explanation:**

* We initialize variable `n` with value `1` which is a `Number` data type. Since this is a statement - it will return `undefined`.
* On line 2, when we call `console.log()` we are printing the return value of the expression `n == '1'`. When you use non-strict comparator in JavaScript to compare a `Number` and a `String`, JavaScript will coerce the `Number` to a string. So this expression actually returns true because when you coerce `1` to `'1'`, they are equal to each other.

* On line 3, when we call `console.log()` - we are again printing the return value of the expression `n === '1'`. The `===` is a strict comparator in JavaScript. There is no implicit coercion that will happen. So this will compare `1` and `'1'`.  It will print out `false` because string cannot be equal to a number.

* On line 4, we call console.log()  which prints the return value of the expression `n = '1'`. When we do reassignments in JavaScript - this expression returns the value that the variable was being reassigned to. So in this case, it will return `'1'` since this was the value we were trying to reassign to variable `n`.  So this line of code outputs to console `'1'`. 



#### Problem 4 (question 19 in the quiz)

What does it output and which variable names are in scope after the last line executes but before the program ends?

```javascript
let foo = 1;
// Don't describe the function - it's not relevant until it is invoked
function bar() {
  let xyz = 3;
  const qux = 5;
  return qux;
}

const yam = function() {};
console.log(bar());
```



**Explanation**

* The first line - we are initializing a variable called `foo` with the value `1`.

* Then we declare a function called `bar` and then `yam`.

* On the last line - we invoke the function `bar()` which prints to the console the value `5` and returns `undefined`. `foo`, `bar`, `yam` are all in scope but the internal variables in `bar` are not. Once the function ends - the connection between `qux` and `5` ends and `qux` goes out of scope.



### Practice Problems: Easy 1

#### Problem 1 (question 1 in Easy 1)

```javascript
let numbers = [1, 2, 3];
numbers[6] = 5;

console.log(numbers[4]); 
```



What does the code output below?

* On line 1, we initialize variable `numbers` with array with three elements `[1, 2, 3]` - length of 3
* We use the `[]` operator to access index 6 of `numbers` and assign the value `5`.  We know that from the code above that there is no index 6 in `numbers`. What happens next is that the `numbers` array is  expanded up to index 6. So the array `numbers` becomes:
  * `[1, 2, 3, <3 empty items>, 6]` - there are 3 empty items because these are elements in `numbers` that have not be set yet. 
* Then on the final line of the code - we call `console.log(numbers[4]);`. Since the index `4` is not set - `numbers[4]` evaluates to `undefined` and as a result, this line of code outputs `undefined` to the console and `console.log(numbers[4]);` also returns `undefined`



### Practice Problems: Easy 2

#### Problem 1 (Question 10 on Easy 2)

```javascript
let statement1 = "The Flintstones Rock!";
console.log(statement1.split('').filter(char => char === 't').length
);
```



**Explanation:**

* So on the first line, we initialize `statement1` with the string `"The Flintstones Rock!"`.
* Then on the second statement, we call `console.log()` - we pass in the expression `statement1.split('').filter(char => char === 't').length` . `console.log()` will output to the console the value that expression evaluates to.
  * This is an example of method chaining that allows you to call methods on the return value of another method.
  * Breaking down the expression: we call `split('')` on the string value of `statement1`. `split('')` effectively turns the string into an array based on the delimiter. Since the delimiter passed in was an empty string, each element in the array will be the individual characters in the string (i.e. `['T', 'h', 'e'...]` ).
  * Then taking the return value of `split('')` which is a new array, we call `filter(char => char === 't')`.
    * `filter()` function takes in a callback function as an argument - it effectively loops over each element and for each element, calls the callback function. `filter()` returns a new array (not destructive) for all the elements where the callback function returns a truthy value. 
    * In this case, since `char === 't'` (single expression so it is implicitly returned) evaluates to either a boolean `true` or `false`, it will evaluate to true only for elements where character was exactly `'t'`. Since this is also a strict comparison operator, each character must be exactly `'t'` in both data type and value. `filter()` returns `['t', 't']`
      * https://riptutorial.com/javascript/example/17665/implicit-return
    * Then we use the return value of `filter()` which returns a new array to access its property `length` and returns the the number of elements in the array. Finally, the `console.log()` takes the return value of `length` to the console which is: `2`.



### Practice Problems: Easy 3

[https://launchschool.com/lessons/0206c7f9/assignments/da7ec933]

#### Problem 1 (Question 2 on Easy 3)

```javascript
console.log([1, 2, 3] + [4, 5]);
```



**Explanation:**

* Outputs to console: 1,2,34,5
* In JavaScript `+` operator implicitly converts arrays into strings and then concentates the two strings. As a result, it outputs to console: `1,2,34,5`



#### Problem 2 (Question 3 on Easy 3)

What will the following code output?

```javascript
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1)
```



**Explanation:**

* On the first line, we initialize the value `str1` with the string value `"hello there"`.
* On the second line, we initialize the value `str2` with the value of `str1`. With primitive values like `String`, it is important to note that `str2` and `str1` do not contain the same `String`. With primitive values, JavaScript is strictly pass by value - it always passes a copy of the string. Thus, line 2 assigns `str2` a new string that happens to be a copy of `str1`.  
* On the third line, we reassign `str2` with a new string value of `"goodbye!"`.  There is no impact on `str1` because again strings are immutable and copy of the string was passed when initializing `str2` . 
* On the final line, `console.log()` is invoked and we pass it the value of `str1`. It outputs to console `"hello there"`. 



#### Problem 3 (Question 4 on Easy 3)

What will the following code output?

```javascript
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

arr2[1] = 50;
console.log(arr2);
console.log(arr1);
```



**Explanation:**

* On line one, we initialize variable `arr1` with an array with 5 elements and a mix of objects and integers.
* On line two, we initialize variable `arr2` with a copy of `arr1` by utilizing `slice()` method with no arguments passed into it.
  * At this point `arr1` and `arr2` are pointing to two different objects
* On line three, we access index 0 of `arr2` . Then we access the property `first ` of `arr[0]` using the dot notation. We reassign  `arr2[0].first` with value `42`. This is a mutates the object - meaning now `arr2` contains: `[{ first: 42 }, { second: "value2" }, 3, 4, 5]`. 
  * Note also that since `slice()` is a shallow copy - `arr1[0]` and `arr2[0]` point to the same object `{first: "value1"}`. 
  * Thus, when we replace the value of the `first` in that object by using `arr2`, the changes shows up in `arr1` as well
* As a result when we call `console.log(arr1);`, it prints:
  * `[{ first: 42 }, { second: "value2" }, 3, 4, 5]`
* On line 6, we access index 1 element using the bracket notation `arr2[1]` and reassign it with value 50. 
  * Since `arr1` and `arr2` are pointing to two separate array objects, in this case, this reassignment only impacts `arr1`.  You are no longer mutating the object in index 0 but reassigning it with a different value
  * So when we call the next two `console.log()` we get:
    * ` [{ first: 42 }, 50, 3, 4, 5 ]`
    * `[{ first: 42 }, { second: 'value2' }, 3, 4, 5 ]`





### Practice Problems: Medium 1

[https://launchschool.com/lessons/0206c7f9/assignments/e4fb9aaf]



#### Problem 1 (Question 2 on Medium 1)

```javascript
let munstersDescription = "The Munsters are creepy and spooky.";

munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");
```



* On line 1: we initialize the variable `munstersDescription` and assign it with the value `"The Munsters are creepy and spooky."`
* On line 3, we call the method `split("")` on the value of `munstersDescription`. `split` takes in one parameter called `separator` used to split the string into a list of substrings. `split` returns a new array, and in this case: `["T", "h", "e"...]` (because an empty string denotes to `split` that the split happens on every character of the string ). Then on that return value, we call `map` method.
* `map` method takes in a callback function. It iterates through every element of the array, and for each element, invokes the callback. `map` returns a new array of the same size and adds the return value of the callback function into the new array which `map` returns at the end of the loop. 
  * Here, on iteration 1, value `"T"` is passed to the callback. Inside the callback, there an `if` statement with the following expression passed to the `condition` of `if` statement: `char === char.toUpperCase()`. If the passed in argument `char` is an uppercase - this expression will evaluate to true and the callback will return `char.toLowerCase()` which `map` will place into the new array. If not, callback returns `char.toUpperCase()`. 
  * At the end `map` returns an array of the same characters but with their cases flipped 
* Finally on the last line we call `.join("")` on the return value of `map`. `join` method returns a new string by concatenating all of the elements in the array separated by a specified separator string in this case `""`. The final output is: 



#### Problem 2 (Question 5 on Medium 1)

What will the following to lines of code output?

```javascript
console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);
```



**Explanation:**

* On line 1, we output to the console the sum of 0.3 + 0.6 using `console.log` function. The expression `0.3 + 0.6` does not evaluate to `0.9` - this is because JavaScript uses floating point numbers for all numeric operations and floats are not precise numbers.
* On line 2, we call `console.log()`. `console.log()` will output to the console the evaluation of the expression: `0.3 + 0.6 === 0.9`. This will evalute to false. This is because `0.3 + 0.6` will return a float which lack precision in numbers (`0.89999999` which is not equal to `0.9`)



#### Problem 3 (Question 6 on Medium 1)

What will the following code output?

```javascript
let nanArray = [NaN];

console.log(nanArray[0] === NaN);
```



**Explanation:**

* On line one we intialize a variable `nanArray` with an array with one element (`NaN`). 
* On line 2, we invoke `console.log()` and this prints the evaluated value of the expression `nanArray[0] === NaN`
  * The expression acesses the first element of `nanArray` and does a strict equality comparison with JavaScript primitive value `NaN`. 
  * `NaN` is a special numeric value that indicates that an operation that was intended to return a number failed and JavaScript does not let you use `==` or `===` to determine if a value is `NaN`.
  * So this will actually return `false` despite both of these values being compared being `NaN`.
  * Instead, you must use `Number.isNaN(nanArray[0])`



#### Problem 4 (Question 7 on Medium 1)

What is the output of the following code?

```javascript
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);
```



**Explanation:**

* Line 1, we initialize variable `answer` with the value `42`.
* Line 3, we declare the function `messWithIt` which takes in one argument (parameter called `someNumber`).
* Then on line 7, we initialize variable called `newAnswer` and assign it the return value of the function `messWithIt(answer)`. Here, we invoke `messWithIt` and pass in the value of `answer` (value of `42`). 
  * Then within the function, `messWithIt` takes the argument `someNumber` and adds `8` to it and the function returns the sum of `someNumber`  and  `8` which is `50`
* On line 9, we call `console.log()` , `console.log()` outputs to console the evaluated value of the expression `answer - 8`.  It prints out `34` to the console.
  * The reason is because `Number` is a primitive value (immutable). So when we pass a primitive value into a function as an argument - original value we passed to the function can never be changed (only a copy is passed to the function - pass by value) which is why `34` was printed and not `42`. 



#### Problem 5 (Question 8 on Medium 1) - Review

```javascript
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

messWithDemographics(munsters);
```



What will happen to the `munsters` object?



**Explanation:** 

* So in the first line we initialize a variable `munster` with an object that contains five key-value pairs
* On line 9 - we are declaring `messWithDemographics()` function that takes in a parameter called `demoObject`.
* Then on line 16, we invoke the function `messWithDemographics` and we pass in the value of `munsters` variable.
  * Once we invoke `messWithDemographics(munsters)`, the following happens in the function.
  * First, we call `Object.values()` (takes in an object and returns the values of each key-value pair in the object as an array) on argument `demoObject` which now points to the same object `munster` variable points to. This returns an array of values from the object: `[32, 30, 402, 10, 23]`. 
  * Then we call `forEach` on the returned array value. `forEach` takes in a callback function and for each element it loops through, it calls the callback function. `forEach` also returns `undefined`.
    * In each callback function call, it takes the `familyMember` argument and does the following operations:
      * `familyMember["age"] += 42;`
        * It reassigns the value associated with the key `age` by taking the current value in `age` key and adding `42` to it.
      * `familyMember["gender"] = "other";`
        * Here - we are accessing `gener` key for each element and reassigning the value with `"other"`
    * The key thing to note here is that this actually mutates the underlying object that `munsters` and argument `demoObject` was pointing to because objects are passed by reference. The above operations directly accessed the same object using `age` and `gender` key and changed the object's values.





#### Problem 7 (Question 10 on Medium 1) - Review

```javascript
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

console.log(bar(foo()));
```



What will this code output?



**I am having hard time explaining the operations of a function**



**Explanation:**

* On line 1 - we declare the function `foo` which takes in a parameter `param` and has a default value of `no`.
* On line 5 - we declare the function `bar` which takes in a parameter `param` and has a default value of `no`.
* Then on line 9 - we call `console.log()`. `console.log()` will output to the console the evaluated value of the expression `bar(foo())`.
  * Unpacking the expression `bar(foo())`
    * We first invoke `bar()` - it takes in one argument and here we are passing to `bar()` - the return value of `foo()`. 
      * `foo()` is then invoked. Since no argument was passed in - `foo()` will use the default value `no`. The function`foo()` will always return `"yes"`.
    * Now `bar()` will use the return value of `yes` after invoking `foo()` .
      * Next `bar()` uses `param` argument to check if it is `"no"` with a strict equal comparator. Since `param` currently holds the value of `"yes"`, the `bar()` function will return `"no"`.
      * Uses a ternary operator for control flow





### Practice Problems: Hard 1

[https://launchschool.com/lessons/0206c7f9/assignments/59c055ee]



#### Problem 1 (Question 2 on Hard 1)

```javascript
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);
```



What does the last line in the following code output?



**Explanation:**

* On line 1, we initialize variable `object` with Object `{ first: [1]}`. 
* On line 2, we initialize variable `numArray` with the value contained in `object["first"]`
  * `object["first"]` accesses the key-value pair in `object` and returns the value of the key `"first"` in `object`
* On line 3, we call the method `push` on the value of `numArray` passing the argument `2`. `push` takes in one or more arguments. You pass in the values that you want to append to the end of the **calling array**.
* On line 4, we call `console.log(numArray)`. This will output the evaluated value of numArray expression to the console.
  * Since `push` is a destructive method, it will have changed the object that `numArray` is pointing to. So it will output to console `[1, 2]`.
* On line 5, we call `console.log(object)`. This function will output to the console: `{ first: [1, 2] }`. This is because the value of the key `first` is also an object (Arrray). `object['first']` points to the same object as `numArray`. This is an important concept in JavaScript - Objects in JavaScript are pass by reference and the underlying objects can be mutated. So when we changed the underlying object using a destructive method like `push` - it results in `{ first: [1, 2] }`.



```javascript
// make a copy
let object = { first: [1] };
let numArray = object["first"].slice();
numArray.push(2);

console.log(numArray);
console.log(object);

// use a method that returns a new array
let object = { first: [1] };
let numArray = object["first"].concat();
numArray.push(2);
```





#### Problem 2 (Question 3 on Hard 1)

```javascript
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
```



What will the following code print out?

* On line 1: function `messWithVars` is declared - takes in three arguments.
* On line 7 through 9 - we declare three variables.
* On line 11, we invoke the function `messWithVars` and we pass to the function values of the following function parameters: `one`, `two`, and `three`
  * Inside the function now:
    * We reassign argument `one` with the value of  argument `two`
    * We reassign argument `two` with the value of  argument `one`
    * We reassign argument `three` with the value of argument `one`
  * Now:
    * `one` contains `["two"]`
    * `two` contains`["two"]`
    * `three` contains `["two"]`
  * Important concept here:
    * Variable scoping. Note that the arguments `one`, `two`, and `three` are local variables scoped to the function. They are not the same as the global variables of the same name outside. There is variable shadowing going on here where within the function you can no longer access global variables of the same name because JavaScript will use the local variable `one` instead of global variable `two`. 
    * So all we were doing was reassigning the local variables and not the global variables. Global variables remain unchanged
* So when we call `console.log` lines 13 through 15 we get:
  * one is: one
  * two is: two
  * three is: two



```javascript
function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
```



* Same explanation above. However, with one major difference.
  * We reassign argument `one` with array `["two"]`
  * We reassign argument `two` with array `["three"]`
  * We reassign argument `three` with array `["one"]`
* It's important to note that the `one`, `two`, and `three` in the function are not the global variables - they just share the same name. These are local variables scoped at the function scope. There is variable shadowing happening here where local variable of the function shadows the global variables (`one`, `two`, and `three`) preventing you from accessing the global variables.
  * As a result, all we are doing here is reassigning the local variables
  * And once the function finishes its invocation - these local variables cease to exist and cannot be accessed from outside the function scope. 
* As a result we still get the same output to the console because the global variables `one`, `two`, and `three` remain unchanged.



```javascript
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
```

* The big difference now is that we use `splice` which is a destructive Array method.
  * `splice` takes in three arguments: starting index, how many elements from the start index to change, the new value that will replace the current value 
* Since JavaScript is a pass by reference when passing objects to functions, they are mutable. When you call `one.splice(0, 1, "two")` - we are mutating the underlying object that local argument `one` and global variable `one` were both were pointing to. 
* As a result, we get the following outputs to console:
  * one is: two
  * two is: three
  * three is: one 







### Practice Problems: Lesson 4 Practice Problems

[https://launchschool.com/lessons/60e10aa5/assignments/d4f91ca2]



#### Problem 1 (Question 1)

```javascript
[1, 2, 3].filter(num => 'hi');
```

**Explanation:**

* On line 1, we call `filter` function. The calling array is `[1, 2, 3]`. The `filter` method takes a callback function, and for each element in the array, `filter` invokes the callback function once. `filter` evaluates the return value of the callback function. If the return value is truthy, then it adds the current element into a new array that will be returned at then end of the loop. If the return value is falsey, then the current element is not added and moves onto the next element in the array. Once the `filter` has looped through the entire calling array, it will return a new array where the callback function returned a `truthy` value.
* So in this case, the return value is `[1, 2, 3]`. That is because on each invokation of the callback function, the callback returns `'hi'` (single line expressions in arrow functions are implicitly returned - n o need for `return` syntax). Since non-empty strings like `'hi'` are truthy values, `filter` will add all of the elements into the new array. 
* The return value of this expression is: `[1, 2, 3]`





#### Problem 2 (Question 2)

```javascript
[1, 2, 3].map(num => {
  num * num;
});
```



**Explanation:**

* On line 1 we call the  `map` method on [1, 2, 3]. `map` method takes a callback function as an argument. It iterates through each element and invokes the callback function once for each element. 
  * `map` takes the return value of the callback function and adds it to a new array in the same index position as the current element. As a result, `map` returns a new array of the same size but not necessarily the same elements.
* Note however that there is no explicit return value on line 2 for the callback function. Without the explicit return value - the callback function's default return value is `undefined`. As a result, we get the following return value for the above expression:
  * `[undefined, undefined, undefined]`



#### Problem 3 (Question 3)

```javascript
[1, 2, 3].map(num => num * num);
```



**Explanation:**

* On line 1 we call the  `map` method. `map` method takes a callback function as an argument. It iterates through each element and invokes the callback function once for each element. 
  * `map` takes the return value of the callback function and adds it to a new array in the same index position as the current element. As a result, `map` returns a new array of the same size but not necessarily the same elements.
* **Without the braces surrounding the body of the arrow function, JavaScript will use the computed value as the return value (single statement expressions - without the braces - in arrow functions are implicitly returned) .** The callback function takes the argument `elem` and multiplies it by itself and returns that value. So the output is: `[1, 4, 9]`



#### Problem 4 (Question 4)

```javascript
['ant', 'bear', 'caterpillar'].pop().length
```

**Explanation:**

* We call method `pop()` on `['ant', 'bear', 'caterpillar']` on line 1. `pop()` is a destructive method that will remove the last value of the array and return the value it just removed. 
  * This is also an example of a method chaining where you call methods on the return values of methods
* Since on line 1 we are using method chaining, we are actually **accessing (you are not actually callling - it's not a function)** the `length` property on the return value of `pop()` which is the value it just removed - `caterpillar`. `length` of `caterpillar` is 11.
  * So the above expression evaluates to the value of 11. 





#### Problem 5 (Question 5)

```javascript
[1, 2, 3].every(num => {
  return num = num * 2;
});
```

**Explanation:**

* On line 1, we invoke method `every` on array `[1, 2, 3]`. `every` takes in a callback function as an argument. It iterates through the elements in the array, calls the callback fuction on each element once, and checks whether the return value of the callback function is a truthy or falsy value. If, in one of the invocations of the callback function returns a falsy value -- `every` immediately retuns `false`. If, no falsy value is returned after looping through all of the elements in the array, `every` returns `true`.
* In this case, the value of each element in `[1, 2, 3]` is passed in as the argument to the callback function. Then the callback function takes the argument (`num`) and reassigns `num` with the expression `num * 2` . In JavaScript, assignment is an expression that **evaluates as the expression on the right-hand side of the assignment** and that is being returned. So in this case, it returns `num * 2`. So as an example, in the first iteration, `1` is passed to the callback function and the callback function returns `2`. Since non-zero integers are truthy values, `every` will return `true`.





#### Problem 6 (Question 6)

```javascript
let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);

console.log(arr);
```



* On line 1, we initialize variable `arr` with the value `[1 ,2, 3, 4, 5]`
* On line 2, we call method `fill` on the array value of `arr`. `fill` method changes all elements in an array to a static value.  `fill` takes in one argument and two optional arguments. The first argument is the value that you want to fill the array with. The next two optional arguments are start index and end index - allowing you to set where you want to start filling the static value and where you want to stop
  * `fill` is also a destructive method (it will change the calling array)
* In this case, `fill` will replace the elements in `arr` with the value `1` starting from index 1 and up to index 5. This will create an array that is: `[1, 1, 1, 1, 1]`
* When we call `console.log` on line 4, it will output to the console `[1, 1, 1, 1, 1]`



#### Problem 7 (Question 7)

```javascript
['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});
```

* We are calling `map` on the array `['ant', 'bear']` on line 1. `map` takes in a callback function as its argument. It iterates through the array, and for each element `map` invokes the callback function once. Then it takes the return values of the callback function to construct a new array which `map` returns after it finishes looping. It is not a destructive method - it returns a new array of the same size. It uses the return values as the new elements in the new array. 
* As `map` iterates through the array, it passes the value of the element to the argument `elem`. Then the callback function takes `elem` and accesses the `length` property and if the length value is greater than `3` - callback function with return the back `elem`. 
  * On the first invocation, for example, `elem` is `ant`. Since `'ant'.length` is not > 3 - `map` will output `undefined`.  Since there was no explicit return value when  `elem.length` was not `> 3`.  But since `bear.length` is greater than 3 `map` returns the following array: `[undefined, 'bear']`. 





### Practice Problems: Lesson 5 Working with Collections

[https://launchschool.com/lessons/778acada/assignments/a2ba7936]



#### Problem 1 (Question 6)

```javascript
[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});
```

* We use the array `[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }]` to call `filter`. `filter` takes a callback as an argument. Each element of the array is passed to the callback function and assigned to the parameter `object`. `filter` then invokes the callback function once per element. `filter` returns a new array that only contains the elements where the callback function returned a truthy value.
* Inside the callback function we use `Object.keys(object)` to call `every` function. `every` function, like `filter`, takes a callback function as an argument. It iterates through the array and invokes the callback function once per element. Unlike `filter`, `every` returns `false` if one of the callback function invocations returns a falsy value (immediately ends the loop). If all of the callback function invocations returns a truthy value, `every` returns `true`.
* On the first invocation, we pass the value `{ a: 'ant', b: 'elephant' }` to the callback function. Then we call `Object.keys()` by passing in the argument `object`. This returns `['a', 'b']`. `every` then loops over this array passing each element's value to the parameter `key`. We then use the element reference operator `[]` to access `object`'s values using the argument as the key. Then we use an additional reference operator to access the first index of the value returned by `object[key]` which in this case is a string so we would get back `a` then on the next iteration `b`.
* We take this value (`object[key][0]`) and compare it agains the argument `key`. If they are equal to each other, the single statement callback will return `true` - if not, `false`. On the first iteration of `filter`,  `every` returns `false` since `b` is not equal to `e`. On the second iteration of `filter`, `every` returns `true`.
* As mentioned above `filter` returns a new array that only contains the elements where the callback function returned a truthy value. On the first iteration, it returned a falsy value (`false`) and on the second iteration, it returned a truthy value (`true`). It get back `[{ c: 'cat', d: 'dog' }]`.





#### Problem 2 (Question 7)

```javascript
[[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
  return arr.filter(item => {
    if (typeof item === 'number') {    // if it's a number
      return item > 13;
    } else {
      return item.length < 6;
    }
  });
});
```

Explanation

* On line 1, we call `map` on the array `[[8, 13, 27], ['apple', 'banana', 'cantaloupe']]`. `map` takes in a callback function as its argument. It iterates through the array, and for each element `map` invokes the callback function once. Then it takes the return values of the callback function to construct a new array which `map` returns after it finishes looping. It is not a destructive method - it returns a new array of the same size. It uses the return values as the new elements in the new array.
  * Inside the callback function, `return` statement is called on the return value of `arr.filter()`. `filter` takes a callback as an argument. Each element of the array is passed to the callback function and assigned to the parameter `object`. `filter` then invokes the callback function once per element. `filter` returns a new array that only contains the elements where the callback function returned a truthy value.
  * So in this case, on the first invocation, value `[8, 13, 27]` is passed in as the argument to `map`. Then in the callback function of `map` - we call `filter` on `[8, 13, 27]`.  We pass the value of each element `8`, `13`, and `27`. We invoke the filter's callback each time on these arguments.
  * For the first iteration of `filter`, we pass in value `8` to the parameter `item`. `if` statement checks whether the arugment `item` is a number - if so `return item > 13`. In this case since `8 > 13` evaluates to false - the first callback invocation returns `false`.  For the subsequent values `13` and `27` - returns `false`, `true` respectively. 
  * The return value of the `map`'s callback as a result `[27]` (remember that `filter` only adds to the newly returned array for truthy values)
  * On the second invocation of `map`:  value of `['apple', 'banana', 'cantaloupe']` is passed. `filter` then is called on this array. Since the elements are not number - in the `if` statment inside the `filter`'s callback, it will return: `item.length < 6`. For example, `apple` - since it is less than 6 will return `true` . However, `'banana'` and `'cantaloupe'` will return `false`.
    * `filter` will return `['apple']`
* The final return value is: `[[27], ['apple']]`.







#### Problem 3

https://launchschool.com/lessons/64655364/assignments/7c0087dd



```javascript
let number = 10;

[1, 2, 3].forEach(number => {
  console.log(number);
});
```

* Core concepts:
  * Inner scope has access to outer scope. We now have access to outer scope variable and inner scope variable of the same name. This is called variable shadowing and prevents access to the outer scope variable. In this case, JavaScript will opt to use the local variable in the inner scope - scoped to the callback function



```javascript
let a = 1;

function doit(a) {
  console.log(a); // => 3
}

doit(3);
console.log(a); // => 1
```

