

## Explicit Type Coercion

Type coercion is the conversion of one type of value into another. 

Two types of type coercion in JS:

1. Explicit type coercion
2. Implicit type coercion


### Explicit Type Coercion

When you intentionally use one of the many built-in functions to to coerce one type of value to another

#### Coercing values to numbers

`Number` function takes a string, converts it to a number if it can then returns that number. If it can't convert the string to a number, it returns the value `NaN`.

```javascript
    let one = Number('1')
    one

    typeof one
```

`Number()` converts empty strings and strings with only whitespace to `0`.

Not convertible to a number:

```javascript
    Number("cat")
```

Talked about converting strings to numbers. What about other types?

```javascript
Number({}) // NaN
Number([]) // NaN
Number([4]) // 4
Number([undefined]) // 0
Number([1, 2, 3]) // NaN
Number(undefined) // NaN
Number(null) // 0
```

You can see how weird these return values are. There is really no rhyme or reason to it. The important thing is that you need to know that these inconsistencies exist and to ensure that you account for them. Don't memorize these coercions but instead to check against it when necessary.

#### `parseInt` and `parseFloat`

Both `parseInt` and `parseFloat` also coerce strings to numbers: parseInt converts strings to integers, while parseFloat coerces strings to floating point numbers. Both functions operate on strings; they don't work with other types.

`parseInt` examples:

```javascript
parseInt('12') // 12
parseInt('12.52') // 12
```

An unusual feature of `parseInt` is that it converts strings to numbers even when the string contains non-numeric characters. As long as the string begins with a digit (optionally preceded by a + or - sign ):

```javascript
parseInt('12oz') // 12
parseInt('+12oz') //12
```

`parseInt` also differs from Number in that it accepts a second argument called the radix. It specifies the base of the number contained in the string. For example, 10101 in the binary numbering system (base-2) represents the number 21 in decimal (base-10). Thus:

```javascript
parseInt('10101', 2)
```

#### Coercing to Numbers using the + operator

The unary `+` operator attempts to coerce a value to a number. It works like the `Number` function, but is more succinct:

```javascript

+"" // 0
+'2.3' // 2.3
```

The unary `+` operator is concise and easy to use, but at first, it may lack clarity. Feel free to use it if you want, but if you find the notation confusing, use the Number function instead. `Number` makes your intent clear and leaves no room for the ambiguity that can sometimes arise with unary operators.


### Coercing values to strings

#### toString method

You can use the `toString` method on all JavaScript data types except `null` and `undefined` (illegal to call methods on these types). It returns a string representation of the value. Let's see an example:

```javascript
let number 42 // note that javascript does not let you call a method directly on a number literal - it think it's a part of floating number
number.toString(); // 42.toString(); - not allowed
```

`Array.prototype.toString` converts every element of an array to a string, then concatenates them all with a , between each string:

```javascript
[1, 2, 3].toString()
// '1,2,3'
```

Note that `Array.prototype.toString` treats null and undefined elements as empty values:

```javascript
[1, null, 2, undefined, 3].toString() // '1,,2,,3'
```

#### The String function

Another way to coerce values to strings is by using the `String` function. It works in much the same way as `toString`.

```javascript
> String(42) // '42'
> String([1, 2, 3]) // '1,2,3'
> String({ a: 'foo', b: 'bar' }) // '[object Object]'
```

One advantage that `String` has over `toString` is that it works with null and undefined.

```javascript
String(null) // 'null'
String(undefined) // 'undefined'
```

This behavior is useful since using toString can lead to a program-halting error if the value turns out to be undefined or null.

### Template Literals

Inside template literals, JavaScript implicitly coerces interpolation expressions like ${something} to string values. Don't write ${something.toString()} or ${String(something)}.


## Implicit Type Coercion

Implicit type coercion happens when you perform an operation involving values of two different types and JavaScript coerces one of them to match the other. How different values get coerced depends on the operation. It is considered poor practice to rely on implicit coercion - you should explicitly coerceing if you need coercion. You want to be explicit and clear

### Implicit Coercion with the `==` Operator

Behavior is very different when the values you are comparing have different types. The most common case occurs when comparing a string with a number:

```javascript
'1' === 1 // false
'1' == 1 // true
```

The strict equality operator compares the two values directly - the non-strict equality operator though, coerces the string '1' into a number and then compares it with the '1' on the right-hand side. Such behavior should be unexpected since a string and a number should never be equal to each other. That's why you should use `===` exclusively. 

#### With booleans, behavior is even more bizzare:

```javascript

1 === true // false
3 === true // false
0 === false // false

// However:
1 == true // true
3 == true // false
0 == false // true
```

#### With undefined:

```javascript
undefined == null // true
```

#### How does `==` behave with objects?

* It considers two objects equal only when they are the same object

```javascript
let arr = []
arr == [] // false
arr == arr // true
```

* When comparing objects and primitive, `==` coerces the object to a primitve before making the comparison
* `{}` gets coerced into: '[object Object]'

```javascript
'' == {} // false
'[object Object]' == {} // true
[] == '' // true
[] == 0 // true - '' == 0 is true
```

#### Key Things to Remember

1. When a number is compared with a string using `==`, the string is coerced into a number.
2. When a boolean is compared with any other value, it is coerced into a number and compared again using the `==` operator
3. When an object is compared with a primitive value, the object is coerced into a primitive value and comapred again using the `==` operator
4. A `==` comaprison of `undefined` with `null` evaluates to `true` 

### Implicit Coercion with the Binary Operator

Examples of string coercion with `+`:

```javascript
'number ' + 1 // 'number 1'
'' + [1, 2, 3] // '1,2,3'
'' + true // 'true'
'' + undefined // 'undefined'
'' + {} // '[object Object]'
```

Examples of coercion with numbers and booleans:

```javascript
1 + true;       // 2
1 + false;      // 1
true + false;   // 1
null + false;   // 0
null + null;    // 0
1 + undefined;  // NaN
```

### Relational Operators

No strict versions for these operators. When both operands are strings, JavaScript compares them lexicographically. Otherwise, JavaScript converts both operands to numbers before comparing them.

```javascript
11 > '9';       // true -- '9' is coerced to 9
'11' > 9;       // true -- '11' is coerced to 11
123 > 'a';      // false -- 'a' is coerced to NaN; any comparison with NaN is false
123 <= 'a';     // also false
true > null;    // true -- becomes 1 > 0
true > false;   // true -- also becomes 1 > 0
null <= false;  // true -- becomes 0 <= 0
undefined >= 1; // false -- becomes NaN >= 1
```

### Best Practices

1. Always use explicit type coercions
2. Always use strict equality operators

There are two exceptions to the advice to always use explicit coercion:

* Don't use String() or toString() inside ${...} expressions in template literals.
* Feel free to use the unary + operator to convert strings to numbers.