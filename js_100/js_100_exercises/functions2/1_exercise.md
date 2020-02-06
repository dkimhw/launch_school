
### Greet 1

Question:

How can we alter the function definition of greet so that the parameter greeting is assigned a default value of 'Hello' when no argument is passed to the function invocation?


Answer:

```javascript
function greet(greeting = 'Hello') {
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet(); // should log: Hello, world!
```