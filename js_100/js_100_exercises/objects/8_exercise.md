

### Convert an object to a nested array

Convert the `person` object into a nested array `nestedPerson`, containing the same key-value pairs.

Answer:

```javascript
let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
}

let nestedPerson = [];
for (i in person) {
    nestedPerson.push([i, person[i]]);
}

nestedPerson;
```