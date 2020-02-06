


### Vocabulary

Question: 

We've been given an array of vocabulary words grouped into sub-arrays by meaning. This is a two-dimensional array or a nested array. Write some code that iterates through the sub-arrays and logs each vocabulary word to the console.


Answer:

```javascript
let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for (let i = 0; i < vocabulary.length; i += 1) {
    vocabulary[i].forEach((j) => {
        console.log(j);
    })
}
```