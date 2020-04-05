

1. Choose descriptive name for your variables
    * Use camel case when naming everything
    * Constants --> all uppercase
    * Variables should never start with an uppercase letter
2. Time spent debugging and struggling through code is okay because it helps you retain information
3. Avoid magic numbers
    * A magic number is a number that appears in your program without any information that describes what that number represents
    * To avoid magic numbers - use constants to specifically give context and information to what number or data you are using:

```javascript

const NUMBER_CARDS_IN_HAND = 5;

function dealHand() {
  let hand = [];
  for (let cardNumber = 0; cardNumber < NUMBER_CARDS_IN_HAND; ++cardNumber) {
    hand.push(dealCard());
  }

  return hand;
}

```

4. Formatting
    * When indenting code, we will always use two space characters - never use tab characters
    * When using curly braces, if your block is multiple lines, the opening brace is on the same line as the initial statement and the ending brace is on its own line. 
    * Semicolons should always terminate a statement. With no semicolon to separate them, JavaScript sometimes sees the next statement as part of the former statement, which leads to undesired behavior.
    * Always use spaces between the keywords and following opening parenthesis, and between the closing parenthesis and opening brace:

    ```javascript

        // Bad
        var counter=0;
        while(counter<15){
            counter+=1;
        }

        // Good
        var counter = 0;
        while (counter < 15) {
        counter += 1;
        }xw
    ```

    * Using one `var` declaration per variable. It avoids thinking about whether to swap out a `;` for a `,`.

    ```javascript
    // Bad
    var firstName = 'Shane',
        lastName = 'Riley',
        dogs = ['Josie', 'Libby'];

    // Good
    var firstName = 'Shane';
    var lastName = 'Riley';
    var dogs = ['Josie', 'Libby'];
    ```

5. Mutating Constants
    * Another common mistake that people make is to change the values of constants. For example:

    ```javascript
    const CARDS = [1, 2, 3];
    ```

    * Since `CARDS` is a constant, you shouldn't add, remove, or modify its values. JavaScript lets you do that, but you should not. ESLint should help you avoid doing it accidentally.

### 6. Functions
* The instinct to turn code into a function is good. However, make sure that the function does one thing, and that its responsibility is limited. That implies indirectly that your functions should be short. 10 to 15 lines is good. More than that - try to break it up
* Some important rules to remember:
    * Don't log something to the console and return a significant value. 
    * Decide whether the function should return a value with no side effects or perform side effects with no return value. If you do both, you probably won't remember what the function does when you need to use it. The function name should reflect whether it has side effects or not
        * For instance, you can use a name like `updateElementAt` as the name of a function that updates the content of a collection, such as an array. The term update implies that you're changing something externally -- a side effect -- rather than obtaining a new value.
    * Don't name a function `returnTotal`. Just call it `total`. That is enough to imply that a function is returning a value. Furthermore, we would not expect `total` to have side effects or to print a value to the console. We would expect the function to look something like this:

    ```javascript
    function total(cards) { // [1, 2, 3]
        let sum = // compute sum of `cards` values
        return sum;
    }
    // => Number
    ```

    * If you find yourself always looking at the function implementation it is a sign that function is misnamed or doing more than one thing.

### 7. Functions should be at the same level of abstraction

Functions take in some input and return an output. We should be able to copy and paste the function anywhere and use it. When working with a function, you should mentally extract the function from the program and work with it in isolation.

If functions in your program are correctly compartmentalized - it makes programming much simpler especially on large programs. You can see this when you read good code - the functions are all at the same layer of abstraction.

Examples - given four functions which stand out?

`deal()`, `hit()`, `stay()`, `iterateThroughCards()`

The last one `iterateThroughCards` is not at the same abstraction level as the other functions. The other functions are in the language of the game - verbs that are used only for this game. They all specify "what" to do but leave the implementation details to the actual function. 

You should not care about the implementation details when you are using the function. The last function is a programmer concern - iterating through the cards - it's how you perform the task

8. Function names should refelct mutation

When we see a function called `updateTotal`, we assume that it mutates the passed-in parameter. Therefore, we probably will not expect to use the function as `total = updateTotal(total, cards)`.

In other words, we do not expect `updateTotal` to return a value. The less you have to remember - the better your code is.

Your goal with functions is to build stand-alone functions thtat you can peice together larger structures - like lego blocks. You don't want these functions to be mentally taxing to use. 

Some functions are convoluted since the logic is complex. It is a sign that you don't quite understand the problem well enough to break it down into well-compartmentalized pieces. That is okay at first. However, your understanding should grow as you dig deeper into the code. When it does, refactor your code to reflect that increased clarity.

### 9. Displaying Output

Some functions may only display information:

```javascript
function welcome() {
  console.log('welcome');
}
```

This is okay but you need to make sure that the naming is clearer. With `welcome` - you are not sure if it returns a string or outputs a string. Always prefix it with something like `print`, `say`, or `display`.

Remember that code not only must work correctly, but must also be easy to read, both by others as well as your future self.


### 10. Think about Invokation

Name your functions from the perspective of using them later. That is - think first about how you want to invoke them. 

`findAce(cards)` versus `findAceFromCards(cards)` - you can see cards are repeated - you want to avoid naming functions like `findAceFromCards(cards)` because you know how it will be called.

### 11. Know when to use regular while loop versus while (true) loop

This is one way to check validation:

```javascript
let answer = '';
while (answer.toLowerCase() !== 'n') {
  console.log('Continue? (y/n)');
  let answer = readline.question();
}
```

But this is better:

```javascript
while (true) {
  console.log('Continue? (y/n)');
  let answer = readline.question();
  if (answer.toLowerCase() === 'n') break;
}
```

### 13. Using new lines to organize code

Just as writes use paragraphs to organize related sentences, we also need to learn to organize chunks of code to make it easier to read.

Here is a example of bad use of lines:

```javascript
// bad

const readline = require('readline-sync');
let name = '';
console.log('Enter your name');
name = readline.question();
while (name.trim() === '') {
  name = readline.question();
  console.log("That's an invalid name. Try again:");
}
console.log(`Welcome ${name}!`);
console.log("What would you like to do?");
```

Good:

```javascript
// better

const readline = require('readline-sync');
let name = '';

console.log('Enter your name');
name = readline.question();

while (name.trim() === '') {
  name = readline.question();
  console.log("That's an invalid name. Try again:");
}

console.log(`Welcome ${name}!`);
console.log("What would you like to do?");
```

* You can see through newlines that this small code snippet has 4 parts:
  * constant and variable declaration and initialization
  * initial user input
  * input validation
  * using the variable

### 14. Should a function return or display?

Understand whether a function returns a values or has side effects, or both.

What is side effects? It means the function is either outputting something or mutating an object. 

Example:

```javascript
// side effect: logs output to the console
// returns: undefined

function total(num1, num2) {
  console.log(num1 + num2);
}

// side effect: mutates the passed-in array
// returns: updated array

function append(targetArr, valueToAppend) {
  targetArr.push(valueToAppend);
  return targetArr;
}
```

No side-effects example:

```javascript
// side effect: none
// returns: a new number

function total(num1, num2) {
  return num1 + num2;
}
```

In general, if a function or method has both side effects and a meaningful return value, it is a red flag. Try to avoid writing functions that do that - as it will be challenging to use them in the future.

### 15. Name functions appropriately

One way to help yourself remember what each function does is to choose good function names. If you have some functions that output values - then preface those functions with `display` or `print`.

For example, if you see a function named `printTotal` - you can be sure it will output a total and not return anything. 

If you find yourself looking at a function's implementation every time you use it - it's a sign that the function needs to be improved.

Two major bits of advice:

1. A function should do one thing. Don't write a function that does more than one of these things: mutate value, output something, return a meaningful value
2. It should be named appropriately.  

### 16. Don't mutate the caller during iteration

Take a look at this code:

```javascript
let words = ['scooby', 'do', 'on', 'channel', 'two'];

words.forEach(word => {
  console.log(word);
  words.shift();
});
```
The `shift` method removes the first element of an array. Since we are iterating through the array and calling `shift` in each iteration, we expect all elements to be removed by the end of the iteration. However, let's log the words array after the iteration to see whether that is indeed what happens:

```javascript
let words = ['scooby', 'do', 'on', 'channel', 'two'];

words.forEach(word => {
  console.log(word);
  words.shift();
});

console.log(words); // logs ['channel', 'two']
```

That is very strange -- shouldn't every element be deleted? We are expecting an empty array, but the final value is `['channel', 'two']` which may result in some confusion. The lesson here is: `Don't mutate a collection while iterating through it.`

You can mutate the individual elements within that collection, just not the collection itself. 

```javascript
let pairs = [[6, 'scooby'], [2, 'do'], [2, 'on'], [7, 'channel'], [3, 'two']];

pairs.forEach(pair => {
  pair.shift();
});

console.log(pairs); // logs [['scooby'], ['do'], ['on'], ['channel'], ['two']];
```

### 17. Variable shadowing

Variable shadowing occurs when you choose a local variable in an inner scope that shares. It is easy to make this mistake; it essentially prevents you from accessing the outer scope variable from an inner scope. 

Example of variable shadowing:

```javascript
let name = 'johnson';

['kim', 'joe', 'sam'].forEach(name => {
  // uh-oh, we cannot access the outer scoped "name"!
  console.log(`${name} ${name}`);
});

// kim kim
// joe joe
// sam sam
```

The problem is that we have shadowed the outer scoped `name` variable. Within the `forEach` callback function, the `name` variable represents the elements in the array - `"kim"`, `"joe"`, or `"sam"`.

Note that the following is not variable shadowing:

```javascript
let name = 'johnson';

['kim', 'joe', 'sam'].forEach(fname => {
  name = fname;
});
```

The above code is accessing the `name` variable from the outer scope and re-assigning it. After the `forEach` method runs, the name will be set to `'sam'` at the end.

Be careful about choosing appropriate variable names when working with callback functions. If you pick a name that is identical to an outer scope variable. 

ESLint will catch this error for you.

### 18. Don't use assignment in a conditional

The reason is that it's never super clear whether you meant to user `==`, `===`, or `=`. Because it could have been a simple typo.

You want your code to always avoid being implicit.

```javascript
// bad
let someVariable;

if (someVariable = getAValueFromSomewhere()) {
  console.log(someVariable);
}

// good

let someVariable = getAValueFromSomewhere();

if (someVariable) {
  console.log(someVariable);
}
```

The first `if` statement works but it is confusing and when you are reading this code - you are not 100% confident it's  a bug or intentional.


### 19. Use underscore for unused callback parameters

Suppose you have an array of names and you want to print out a string for every name in the array but you don't care about the actual values/names. In those situations, you can use an underscore to signify that we do not care about this particular callback parameters

```javascript
let names = ['kim', 'joe', 'sam'];
names.forEach(_ => {
  console.log('Got a name!')
});

// Got a name!
// Got a name!
// Got a name!
```

Another example is when you need the second parameter but you do not need the first one. 

```javascript
let names = ['kim', 'joe', 'sam'];
names.forEach((_, index) => {
  console.log(`${index + 1}: got a name!`);
});

// logs
// => 1: Got a name!
// => 2: Got a name!
// => 3: Got a name!
```

### 20. Gain experience through struggling

The final tip in this assignment is about dealing with struggling. There are two things that beginners feel at this stage:

* that they must know the "best" or "right" way to do something, so they feel they must learn "best practice."
* that they waste too much time debugging and not doing things correctly the first time

To the first point: it's less impactful to learn "best practices" without first learning why they are best practices. That leads to the second point, which is that you must learn to be ok with struggling through the "bad" or sub-optimal practices first. That's not wasting time, that's getting experience. Becoming a good developer means experiencing and solving a lot of weird issues.

We can't say this enough: spend time programming. Learn to debug problems, struggle with them, search for the right terms, play around with the code, and you'll be able to transform into a professional developer. That's what professional developers do every day.

