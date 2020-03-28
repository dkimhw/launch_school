

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