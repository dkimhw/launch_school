

## String Methods


### concat

You can use `+` or `concat` method to join two string together.

```javascript
'Hello '.concat('World!') // 'Hello World!'
```

Since JS strings are primitive values - any operation performed on them including the `concat` method results in a new string. 

```javascript
let str = 'Hello'
str.concat(' World!') //'Hello World!'
str // 'Hello'
```

You can have more than one argument:

```javascript
let str1 = 'Hello'
let str2 = 'World!'

str1.concat(' ', str2) // 'Hello World!
```

### includes

Checks whether the string in the argument exists in the string `includes` was called on:

```javascript
'Eeny, meeny, miny, moe'.includes('miny') // true
```

Optional second argument - specifies which index in the string to start looking:

```javascript
'abcdefg'.includes('b', 2) // false
```

### split

```javascript
'abcdef'.split() // ['abcdef']
'abcdef'.split('') // ['a', 'b', 'c', 'd', 'e', 'f']
```

### trim

Removes whitespace, \n, \t on both ends of the string

```javascript
'  abcdef   '.trim() // 'abcdef'
```

```javascript
'  abcdef  '.trimStart() // 'abcdef  '
'  abcdef  '.trimEnd() // '  abcdef'
```

### toUpperCase, toLowerCase

```javascript
'pete'.toUpperCase() // 'PETE'
'PETE'.toLowerCase() // 'pete'
```

Capitalize:

```javascript
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

capitalize('pete'); // => 'Pete'
```

### charAt (similar to [] notation)

One difference when accessing indexes the character doesn't exist for:

```javascript
'abc'[5] // undefined
'abc'.charAt(5) // ''
```

### charCodeAt

Returns the unicode character code of the character at that index:

```javascript
 'abcdef'.charCodeAt(1) // 98
```