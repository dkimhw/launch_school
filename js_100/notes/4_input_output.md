
## Input Output

Computers and software need to take in input sources from keyboards, mice, network, sensors and be able to write some output to different places like a computer screen.

A computer can obtain input from other computer's output. For example, when you log into a website with your credentials - this is exactly what is happening. 

In this chapter, we will discuss the most basic method that a program can use to interact with the outside world - reading keyboard input from the command line and displaying output.

### Command Line Output

```javascript
let name = 'Jane';
console.log(`Good morning, ${name}!`);
```

Sends messages to the console to be printed. 


### Command Line Input

Instead of hardcoding variables, you can create a program that will take in user input and save that input to be outputted into the console.

`Scanner` was used for this using Java but with JavaScript you must use Node.js API `readline`.

First install readline:

```
npm install readline-sync --save
```

This command above installs the package in the `node_modules` subdirectory. Any Node.js programs stored in the current directory can require the package with a simple call to `require`.

#### Example: Greet the User By Name

1. touch personalized_greeting.js
2. Add this content:

```javascript
// personalized_greeting.js
let rlSync = require('readline-sync');
let name = rlSync.question("What's your name?\n");

console.log(`Good Morning, ${name}!`);
```

If you run this program with `node`. It displays "What's your name? question then waits for your input. When you enter a name and hit return, the program displays a custom greeting message.

The `require` function imports `readline-sync` into your program. It returns the library as an object which we assing to the rlSync variable. Then we use `rlSync` to call the `question` method. This method displays its string argument, then waits for the user to respond. When the user types some text and presses REturn, it returns that text to the program. We then assign it to the variable `name` and use it to display a personalized greeting.

#### Example: Add Two Numbers Together

Write a program that asks for two numbers from user, adds them and displays the result.

```javascript
// sum_numbers.js
let rlSync = require('readline-sync');
let number1 = rlSync.question('Enter the first number\n');
let number2 = rlSync.question('Enter the second number\n');
// What you get is string so you need to convert it into Number.
let sum = Number(number1) + Number(number2);

console.log(`The numbers ${number1} and ${number2} add to ${sum});
```

### Input in Browser

Browsers allow users to click on buttons, enter text, select checkboxes and radio buttons. These actions provide input to the application and JavaScript outputs something based on those inputs like changing the page content or displaying some additional content. 

Working with a browser's input controls requires a working knowledge of the DOM. Most browsers implement the prompt function which asks for and obtains text-based input from the user.

1. Create html (`personalized_greeting_browser.html`): 

```html
<!DOCTYPE html>
<html>
<head>
  <title>Testing Prompt</title>
</head>
<body>
  <script src="personalized_greeting_browser.js"></script>
</body>
</html>
```

2. Create JS file:

```javascript
// personalized_greeting_browser.js
let name = prompt("What's your name?");
console.log(`Good Morning, ${name}`);
```

This code will take the data saved from the prompt to output a string to the browser JS console.