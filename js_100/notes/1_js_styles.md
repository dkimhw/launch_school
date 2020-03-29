
## JS Styles

### Basic Rules

1. Use camel case formatting for variables and function names (i.e. convertToCelcius)

2. Use uppercase names with underscores to represent const values

  ```javascript
    const INTEREST_RATE = 0.0525;
    const FOUR = 'four';
  ```

3. Some function names - constructor functions - can use PascalCase names:
  ```javascript
    function DomesticCat(name) {
      // do something
    }
  ```

4. Use spaces between operators and operands to make your code look less cluttered

5, Use semicolons to terminate each logical line of code unless the line ends with {, }, or :. 

6. Variable names cannot start with a digit (similiar to Java)


### Semicolons

JS actually doesn't require insertion of semicolons but it is recommended as shown below:

```javascript
let x = 3;
let y = 5;

if (x === y) {
  console.log("x is equal to y");
} else {
  console.log("x is not equal to y");
}
```

Javascript inserts semicolons automatically where it needs to. This can lead to bugs if the auto inserting inserts semicolons where you might not have intended. It is often better to explicitly add the semicolons.

### Running Javascript

Depending on where you run your code - you might see variations in output.

In general, REPL and JS Console in browsers will output simliarly - it will output variable value when assigning variables for example.

On multiline copy and paste, Node REPL will actually execute line by line while the JS console will not.

#### Node

You can run .js files from the command line with the following syntax:

```
node example.js
```

Will only output values in `console.log()` statements.

#### Browser

You must add a script tag to the HTML file that has the correct path to the .js file that you want to run:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <script src="example.js"></script>
  </body>
</html>
```

Open the HTML file in the browser. GO to developer tools and you can use the JS console to see any outputs to the console.

#### Browser JS Console

You can leverage browser's JS console to run JS code in the browser. It's very similiar to Node REPL.

### Documentation

Javascript like other programming languages comes packaged with a wide array of reusable methods, functions and objects. 

You don't need to fully understand how the methods and functions were implemented to actually use it. In this way, JS's abstraction makes it easy for programmers to reuse code.

Documentation for JS will be crucial as you look up reusable code.

The focus is on reusable components from the standard library (core JS).

### Constructors and Type Names

* Constructors
  * Constructors are like factories that create values of a particular type.
  * Uses PascalCase (camelCase that starts with an uppercase letter).
  * A value created has access to all the properties and methods of a class
    * i.e. object of String class has access to `length` property and `toUpperCase()` method.

* Method Name
  * Methods are functions that need a value that you can use to call the function.
  * Two types of methods:
    * Instance methods
      * In MDN, you will see them as `Constructor.prototype.methodName()` to refer to instance methods
      * Instance methods are functions available to objects of a class. `String.prototype.charAt()` is an example of instance method
      
      ```javascript
        'Hello, '.concat('Bob!');
      ```

    * Static methods
      * In MDN, you will see them as `Constructor.methodName()`
      * Available at the class level. You do not need an object to call these functions.
      * Static functions work similar to how you would call it in Java language
      * Starts with the class name, followed by dot, and then the method name
      * `String.fromCharCode()`.

      ```javascript
        String.fromCharCode(97);
      ```

* Property Name
  * A data type's property is a noun. A property says something about the value (object) and an operation does something with that value (method).
  * `length` is an example
  * You can access a property by appending a dot and the name of the property to that value:

    ```javascript
      "hello".length;
    ```

### Acceptable Names (Style)

* Javascript variables
  * index
  * lazyDog
  * operand2

* Functions
  * index
  * lazyDog
  * operand2
  * CatName - for constructors

* Constants
  * BIG_NUMBER