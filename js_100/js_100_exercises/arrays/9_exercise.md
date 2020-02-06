

### Question 9

Question:

The `destinations` array contains a list of travel destinations.

```javascript
let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];
```

Write a function that checks whether or not a particular destination is included within destinations, without using the built-in method `Array.prototype.includes()`.

For example: When checking whether 'Barcelona' is contained in destinations, the expected output is true, whereas the expected output for 'Nashville' is false.


Answer:

```javascript
let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(str, arr) {
    return (arr.filter(i => i === str).length > 0 ? true : false);
}

contains('Barcelona', destinations); // true
contains('Nashville', destinations); // false
```

Alternate Answer:

```javascript
function contains(element, list) {
  return list.indexOf(element) >= 0;
}
```

* Returns the index of an element in the array and returns -1 if the element is not in the array. 