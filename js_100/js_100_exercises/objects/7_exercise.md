
### Car Keys

Write code that stores all of the `vehicle` property names in an array called `keys`.



Answer:

```javascript
let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};


let keys = [];
for (i in vehicle) {
    keys.push(i);
}
```