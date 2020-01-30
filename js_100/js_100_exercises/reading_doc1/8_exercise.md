
### Return Values

Question: 

Consider this the following code:

```javascript
let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(' ');
let isValid = tweet.length < 140;
```

What will the following statements return?


Answer:

```javascript
typeof tweet; // 'string'
typeof words; // 'object' - since there is no "array" type
typeof isValid; // 'boolean'
```

* If you need to specifically distinguish whether an object is an array - you can use the `Array.isArray()` method - which returns a Boolean.

```javascript
Array.isArray(words);
```