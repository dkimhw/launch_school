
### Type Error

Question: You will get an error running this code. Why?

```javascript
let tweet = 'Woohoo! :-)';

if (tweet.length() > 140) {
  console.log('Tweet is too long!');
}
```

Answer:

This is because length is a property of string types not a method. It raises TypeError because JavaScript expects a number but instead gets a function.