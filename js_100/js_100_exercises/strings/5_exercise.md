

### Case-insensitive Equality

Question:

Given strings like the following, how can you check whether they're equal irrespective of whether the characters they contain are upper or lower case?

```javascript
let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';
```


Answer:

```javascript
let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

string1.toLowerCase() === string2.toLowerCase();
```