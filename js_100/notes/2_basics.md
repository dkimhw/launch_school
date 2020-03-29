
## Data Types

A core job of programmers is dealing with data. Data types determine what you can and cannot do with a given piece of data

Javascript similar to Java have what is called primitive data types.

They are: String, Number, Undefined, Null, Boolean

### Strings

Strings are basically sequence of characters. It is one of the most common forms of data. Think of form inputs like Name, description, etc.

You write strings with single or double quotes:

```javascript
let name = 'David';
let name2 = "Patricia";

// If there are quotes in a string - use escape character:
let msg = 'Hello Patricia\'s Dog'; // Escape tells the computer that the single quote is part of the string

// Or double quotes
let msg = "Hello People's champion";

```

Backticks allow string interpolation and also avoids the single and double quote issues we saw in above example.

```javascript
let message = `5 plus 5 equals ${5 + 5}`;
```

You can also interpolate variables into strings:

```javascript
let name = 'David';
console.log(`Your name is ${name}!`);
```

### Numbers

Some programming languages like Python uses different data types for integer and float (there may be more types depending on the programming language).

Javascript uses only one type to represent all types of numbers. Using commas to represent numbers is not valid.

So, `123,456,789` is not a valid Number type. You must use: `123456789`.

### Booleans

Booleans allows you to control the flow of your program. There are only two valid values: `true` and `false`.

Allows programmers to use data to check whether expressions evaluate to true or false:

```javascript
if (5 === 5) {
  console.log('Print this!');
}
```

### Undefined

Oftentimes in programming, we need a way to express the absence of a value. In Javascript, this is done through `undefined`. `undefined` reprsents an absence of a value.

For example, `console.log` writes a value to the console but it does not have a concrete return value. Thus it returns `undefined`.

`undefined` also occurs when you initialize a variable without giving it an explicit value:

```javascript
let foo;
// undefined
```

### Null

`null` is similar to undefined. It represents the intentional absence of a value (empitness or nothing). Unlike `undefined`, you need to explicitly use `null`. `undefined` can arise implicitly. 

### typeof Operator

Every value in Javascript has a data type. To check what data type a value is:

```javascript
console.log(typeof 1);

// you can also do the same with variables
let name = 'Patricia';
console.log(typeof name);
```

Most values will return a familiar data type. There are two data types that are interesting to take more note of:

```javascript
console.log(typeof undefined); // returns 'undefined';
console.log(typeof null) // returns 'object';
```

We see that the value `undefined` has type `'undefined'`. The name of the type and the values are distinct.

`null`'s type is `'object'`. This goes back to when Javascript was first developed and was preserved through the years. Fixing this would break too many applications.

## Operations

### Basic Arithmetic Operations

* Addition:

```javascript
console.log(38 + 4); // 42
console.log('Hello' + ' World'); // Hello World
```

Addition works with strings as well (works like a concat).

* Subtraction

```javascript
console.log(44 - 2); // 42
```

* Multiplication

```javascript
console.log(7 * 6); // 42
```

```javascript
console.log( 7 * 'Hello' ); // Unlike python, this will not work
// Returns NaN - stands for Not a number
```

* Division

Works similiar to Java. Integer based division gets you integer so - 16/4 will get 4. Floating number division will return floating number.

```javascript
console.log(16/4); // 4
console.log(16.0/4); // 4 - in Java, it would have been 4.0 - that's because in Java there is two data types to represent integer and floats.

// However, if the division does not result in a whole number, Javascript will automatically return a float - this is different from Java
console.log(2/4) // 0.5 (in Java, this would have been 0)
```

* Remainder

Returns the remainer of a division operation.

```javascript
console.log(16 % 4); // 0
console.log(16 % 5); // 1
```

### Equality Comparison

If you want to check two values are equal - you can use the `===` operator

```javascript
console.log(42 === 42); // true
console.log(42 === 43); // false
console.log('foo' === 'foo') // true
console.log('FOO' === 'foo') // false
```

### String Concatenation

```javascript
console.log('foo' + 'bar'); //foobar
console.log('1' + '2'); // 12
```

Works like Java. The operations for numbers are valid until it meets a string. After it meets a string, everything becomes a string concatenation. Check out the following examples:

```javascript
console.log(1 + 3 + '4' + '10' + 4 + 3); // Javascript ignores the 4 + 3 operator at the end
console.log('1' + 2); // 12
```

But unlike Java. Arithmetic operations can work on a string number and a Number:

```javascript
console.log('5' - 3); // prints 2
console.log('10' / 2); // prints 5
console.log('10' / 9); // prints 1
```

### NaN

Some arithmetic operations (`0 / 0 `) return a value of `NaN` - stands for Not a Number. It's a special value is JavaScript that signals an illegal operation.

```javascript
console.log(3 + undefined); // NaN
```

NaN is interesting a number data type:

```javascript
console.log(typeof NaN); // number
```

NaN is a "numeric" result that indicates and error occurred. It occurs due to:

1. Undefined mathematical operations. The "undefined" here is a mathematical term and not Javascript's `undefined` value.
2. Trying to conver a non-number value such as 'hello' to a number can also return `NaN`.


## Explicity Coercion

There may be cases where you want to explicitly convert a data type versus letting the Javascript language decide (implict).

### Strings to Numbers

`Number` function coerces a string to a number:

```javascript
console.log(Number('1')); // 1
```

What happens if you use this on a String?

```javascript
console.log(Number('foo')); // NaN
```

Doesn't cause a fatal crash or error in your code. Javascript simply tells the user that this is not a number. This happens often in Javascript. The above code would raise an exception in Java but here Javascript simply fails silently and lets the programmer determine whether an error is actually a problem.

You can also use `parseInt`:

```javascript
console.log(parseInt('12')); // 12
```

One interesting feature of `parseInt` is that it always returns a number when the first character oft he string value is a digit or the first two characters are a sign (+ or -) and a digit

```javascript
console.log(parseInt('12xyz')); // 12
console.log(parseInt('3.14')); // 3
console.log(parseInt('hello3.14')); // NaN
```

`parseFloat` works similarly to `parseInt`:

```javascript
console.log(parseFloat('12.5foo')); // 12.5
```

### Numbers to Strings

```javascript
console.log(String(20)); // '20'
```

## Data Structures

### Arrays

Arrays are **ordered** lists. May contain strings, numbers, booleans, or even objects you create.

One notable difference is that in Java `ArrayList<String>` had to contain one data type. However, in Java you are not restricted:

```javascript
let x = ['Hello', true, 10];
console.log(x);
```

To access specific elements in array:

```javascript
let x = ['Hello', true, 10];
console.log(x[1]);
```

Javascript is zero indexed.

### Objects (i.e. Dictionary, HashMap)

Objects are basically dictionaries or hashmaps where the data is stored in a collection of key-value pairs.

Incredibly useful becuase you can access large volumes of data if you know the specific key. If you had a dictionary for example of people's names and values were their personal information - you just need to know the person's name to access the values not where they are specifically saved.

```javascript
let dict = { dog: 'barks', cat: 'meows' }
console.log(dict['dog']); // returns 'barks'
```

## Expressions and Return Values

Expression is anything that JavaScript can evaluate to a value even if that value is `undefined` or `null`. 

Some examples:

```javascript
7 + (5 + 2);
console.log(5 + 2);
```

In the first example (`7 + (5 + 2)`) is an expression.

When you run `console.log()` you will notice that it returns `undefined` - this is the evaluated value of your expression so it returns `undefined` while the first example returns `14`.

Expressions don't have to involve operators - any value is an expression that evaluates to itself:

```javascript
"hi"
```

JavaScript also has statements:

```javascript
let foo;
```

Statements always evaluate as `undefined` - they are not expressions and differe in that you cannot use a statement as part of another expression.

```javascript
console.log(5 * let foo); // This is invalid
```

### Printing versus Returning Values

Printing something in JavaScript means printing something onto a console whether that is on Node REPL or browser console.

Expressions however do something but they also return a value. Some functions perform an action but will not return anything `console.log` for example. Other functions will not print anything but perform some operation and return a value.