
console.log(
['ant', 'bear'].map(elem => {
    if (elem.length > 3) {
      return elem;
    }
})
);

// Returns [undefined, 'bear']

/*

JS always must return something. So in this case since we didn't explicitly refurn something - it implicitly returns `undefined`. 

That's why we see `undefined` as the first element of the returned array.

*/