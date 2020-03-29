
## Control Flow

### Conditionals

Conditionals help control the flow of your program. Depending on how the condition is evaluated, different code can run in your program. The simplest control flow is a `if` statement with comparision and logical operators.

```javascript
if (a === '3') {
  console.log("a is 3");
} else if (a === '4') {
  console.log("a is 4");
} else {
  console.log("a is neither 3, nor 4");
}
```

JavaScript allows you to omit code blocks (curly braces) when the if or else clause contains a single statement or expression. Always use curly braces however as it makes your code more readable and reliable.

```javascript
if (x === 3)
  console.log('x is 3');
  console.log('x is an odd number'); // this is not part of the if statement
```

### Comparisons

JavaScript comparisons are very similar to other programming languages like Java:

* `>` - greater than
* `>=` - greater than or equal to
* `<` - less than
* `<=` - less than or equal to
* `===` - strict equality operator
* `!==` - strict inequality operator
* `==` - loose equality operator. Similar to `===` but when the operands have different types `==` coerces one of the operands to the other operand's type before it compares them. The coercion bheavior can lead to unexpected results.

  ```javascript
  console.log(5 == 5); // this is the same result as ===
  console.log(5 == 4); // this is the same result as ===
  console.log(5 == '5'); // this is true but in strict operator it would be false
  ```

* `!=` - loose inequality operator. Same concept as `==`

  ```javascript
  console.log(5 != 5); // same result as !==
  console.log(5 != '5'); // this results in false. With `===` it would be true. 
  ```

Avoid the loose operators whenever you can.

### Logical Operators

You can use logical operators to combine multiple conditionals to creat more complex logic to your program.

* `&&`

  ```javascript
  if((4 === 4) && (5 === 5)) {
    console.log(true);
  }
  ```

* `||`

  ```javascript
  if((4 === 5) || (5 === 5)) {
    console.log(true);
  }
  ```

* `!` (Negates its operand)

  ```javascript
  console.log(!true);
  console.log(!false);
  ```

* `!!` - not an operator but coerces a value into boolean values.

  ```javascript
  !!3 // true
  !!'' // false
  ```

### Short Circuits

JavaScript employs short circuit evaluation meaning that as JavaScript evaluates an expression it will take into consideration the overall return result.

When evaluating `&&` operator, if any one of the condition returns `false`, the entire expressions must be false as well. JavaScript terminates as soon as it finds that one of the expression is false.

```javascript
// In this expression, JavaScript does not need to evaluate the last two boolean values.
console.log(true && true && false && true && false);
```

Same exact logic applies to `||`:

```javascript
// Soon as the second expression returns true - the entire expression "false || true || false" must return true
console.log(false || true || false);
```

### Truthiness

In JavaScript, any value can be coerced into a boolean value which is why you don't always need an expression that evaluates to true or false. For example, `if` statement doesn't need something like `5 === 5`. Thus, you can use **any** expression in a conditional statement. Expression evaluates to true or false.

It can take a value and coerce it into a boolean value as shown below:

```javascript
a = 5;

if (a) {
  console.log("this is true!");
} else {
  console.log("this will not run!");
}
```

However, zero is false in JavaScript when it coerces it to a boolean value:

```javascript
a = 0;

if (a) {
  console.log("0 is false when coerced to boolean");
} else {
  console.log("0 is false");
}
```

JavaScript treats the following values as false:

* `false`
* `0`
* '' (empty string)
* `undefined`
* `null`
* `NaN`

Everything else evaluates to true.

**falsy**: refers to values that evalutes as false.
**truthy**: refers to values that evalutes as true.

Operators work with truthy and falsy values too (short-circuit evaluation):

```javascript
console.log(0 && 'foo'); // last evaluated operand is 0
console.log('foo' && 3); // last evaluated operand is 3
```

### Operator Precedence

JavaScript has a set of precedence rules it uses to evaluate expressions that use multiple operators and subexpressions.

List of comparison operations from the highest precedence (top) to lowest (bottom):

* `<=`, `<`, `>`, `>=`
* `==`, `!=` 
* `&&`
* `||`

```javascript
let x = false;
let y = false;
let z = true;

if (x || y && z) {
  console.log('This will not print');
  // Note that JavaScript evaluates y && z first
} else {
  console.log('This will print!');
}
```

You can use parantheses to change how JavaScript processes the expressions:

```javascript
let x = true;
let y = false;
let z = true;

if ((x || y) && z) {
  // Because of the parenthesis x || y is evaluated
  console.log('This will print');
}

```

JavaScript evaluates parentheses in the usual algebraic order.
  * Innermost to outermost parentheses
  * If parentheses are on the same level, processes from left to right

### Ternary Operator

```javascript
1 === 1 ? console.log("This is true!") : console.log("This is not true!");
```

One advantage of ternary operator is that entire structure is an expression. `if` statement doesn't have a return value. We can treat ternary operator like a value (think functions).

```javascript
let x = true;
let message = x ? 'this is true' : 'this is not true';
```

### Switch Statement

Similar to `if` statement but it compares a single value for strict equality.

Example:

```javascript
let a = 5;

switch (a) {
case 5:
  console.log('a is 5');
  break;
case 6:
  console.log('a is 6');
  break;
default:
  console.log('a is neither 5, nor 6');
  break;
}
// logs "a is 5" to the console
```

The `default` clause runs when none of the `case` statements match - acts like an `else` in an `if` statement.

`if/else` statement equivalent:

```javascript
let a = 5;

if (a === 5) {
  console.log('a is 5');
} else if (a === 6) {
  console.log('a is 6');
} else {
  console.log('a is neither 5, nor 6');
}
// logs "a is 5" to the console
```

**`break`** statement in each `case` is crucial. Without that syntax, execution "falls through" to the next `case` clause. This behavior is very undesirable in most situations (introduces unpredictability and unreadability and potential bugs to a code base).

```javascript
let a = 5;

switch (a) {
case 5:
  console.log('a is 5');
case 6:
  console.log('a is 6');
  break;
default:
  console.log('a is neither 5 nor 6');
}
// It logs:
// a is 5
// a is 6
```

One situation where it is okay - when you want multiple cases to do the same thing:

```javascript
let a = 5;

switch (a) {
  case 5:
  case 6:
  case 7:
    // executed if a is 5, 6, or 7
    console.log("a is either 5, 6, or 7");
    break;
  case 8:
  case 9:
    console.log('a is 8 or 9');
    break;
  default:
    console.log('a is not 5, 6, 7, 8, or 9');
    break;
}
```

Safe because each set of cases only execute once.