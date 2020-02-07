

### Is it True?

Question: We are experimenting with some code to get more comfortable working with objects. Run the snippet below and explain why `"It's true!"` is never output.


Answer:

```javascript
let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
}

for (prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

// This is why
for (prop in obj) {
  console.log(typeof prop);
}

// prop is returned as a string so string === true - boolean will never evalute to true

```
