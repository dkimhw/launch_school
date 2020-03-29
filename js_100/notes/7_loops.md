
## Loops

Most programs need code that can be ran over and over until some ending condition occurs. Most programming languages do this through loops. There are several forms of it.

### While Loop

`while` loop is an event-based loop where the code within the `while` block keeps running until a certain event is reached (in this case, condition evaluates to false). Can cause infinite loops if programmer doesn't correctly provide an ending condition.

```javascript
let counter = 1;
while (counter <= 10) {
  console.log(counter);
  counter += 1; // concise syntax to increment by 1
}
```

In `while` loops, you need to provie some way to make the loop condition `false`. This can be done via a variable as shown above. 

Another example:

```javascript
let balance = 100;
let goalBalance = 200;

while (balance < goalBalance) {
  balance *= 1.05;
}

console.log(balance);
```

#### Looping Over Arrays With While

One of the common uses is iterating or looping over each element of an array and perform some action.

Arrays are extremely useful data structures. You can use loops to read and manipulate the elements.

Example:

```javascript
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
let index = 0; // array is zero-indexed so start at 0

// ensures that the condition evaluates to `false` after the loop handles the last element (it will be equal to it so no longer holds true)
while (index < names.length) {
  upperNames.push(names[index].toUpperCase()); // `push` method appends new values to an array
  index += 1;
}

console.log(upperNames);
```

#### Do/While Loop

Differences:
* Executes at least once since the conditional check occurs at the end of the loop instead of the beginning. 
* A `while` loop cannot be guaranteed to run at least once since the initial condition check may be false.

Example:

```javascript
let answer;
do {
  answer = prompt("Do you want to do that again?");
} while (answer === 'y');

// this loop keeps running until user enters in something other than lowercase y
// also guaranteed to run at least once
```

### for Loops

If you have a definite sequence of events to run - then a for loop is a good choice especially for data structures like arrays.

Example:

```javascript
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  upperNames.append(names[index].toUpperCase());
}

console.log(upperNames);
```

Some advantages:

1. Easy to understand 
2. On the same line you declare the `index` variable, set loop condition, and increment `index` on the same line
3. The syntax allows you to move the `index` variable from global into for loop scope.


### Controlling Loops

JS uses `continue` and `break` to provide more control over loops.

#### `continue`

Let's say you wanted all the uppercase name in our upperNames array except 'Naveed' - `continue` statement can help.

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

#### `break`

Sometimes you might want to skip all remaining iterations of a loop. For instance, when you search an array for a specific value, you probably want to stop searching once you find it. There is no reason to keep searching if you don't need any subsequent matches.

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

### Array Iteration

forEach is an ehanced loop for looping arrays easily:

```javascript
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

names.forEach(function (name) {
  console.log(name);
});

// you can pass an anonymous function
```

One of the unique features is that it has first-class functions. That means that functions are values - you can assign them to variables, pass them around as arguments to other functions, and even use them as return values in other functions. 

When you pass a function as an argument to another function - that other function calls the function represented by the argument. This is what `forEach` does. `forEach` loops through each element in an array in sequence and invokes a function with the name as an argument.

The anonymous function is free to do whatever it needs to do with the argument. 


### Recursion

Recursive functions are functions that call themselves. 

#### A simple exercise

```javascript
function doubler(number) {
  console.log(number * 2);
}
```

Let's say you want to keep printing and only stopping if the result is greater than 50. The above code doesn't really do this for you. You can use recursion to help you in this case.

```javascript
function doubler(number) {
  console.log(number);

  if (number <= 50) {
    doubler(number * 2);
  }
}
```

The `doubler` function above logs a new number, then calls itself with a new value twice that of the input number. To make the recursion stop, we add in a condition number less than equal to 50

#### Complex Example

Function that calculates the nth number in the Fibonacci sequence.

```javascript
function fibonacci(number) {
  if (number < 2) {
    return number;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2); 
  }
}
```

The recursive calls work their way down. `f(6)` calls `f(5)` and `f(4)`; `f(5)` calls `f(4)` and `f(3)`. Eventually, the code reaches the lowest level in which the tree always has a 1 or 0 return value in this algorithm. Once it reaches the bottom, the code starts adding return values and percolating back up the tree. When it works its way back to the top - it returns the final result.

The fact that this code calls itself twice makes it more complicated than most recursive code. For instance, `f(4)` is calculated twice.

Every recursive function has a baseline condition that marks the end of the recursion (`number < 2` in the code) and some code that recursively calls the function with a new argument. In most cases, the baseline condition returns a concrete value that gets reused as the code "unwinds" the recursive calls. Each unwind step uses the previous return values to calculate an intermediate results the gets returned in the next step. In our example, the last step evaluates `f(6)` as `f(5) + f(4)` which yields 8. 
