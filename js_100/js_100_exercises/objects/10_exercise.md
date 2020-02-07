
### Cloning

Write a function `clone` that takes an object as argument and returns a shallow copy of that argument. Shallow copy means that it returns a new object that has the same property/value pairs, but that you don't need to worry about cloning the values as well. The code below demonstrates the expected behaviour.

Answer:

```javascript
function clone(obj) {
  let cloneObj = {}
  
  for (i in obj) {
      cloneObj[i] = obj[i];
  }

  return cloneObj;
}

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
}

clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33
```


Better Solution:

```javascript
function clone(obj) {
    return Object.assign({}, obj);
}
```