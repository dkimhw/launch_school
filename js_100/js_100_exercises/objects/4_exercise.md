

### Greeting From Jane

Add a property to the below object, jane, so that the code on line 13 logs 'Hej, Bobby!' to the console.



Answer:

```javascript
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  // add code here
  greet: function(person) {
      console.log(`Hey, ${person}!`);
  },
};


jane.greet('Bobby'); // Hey, Bobby!

```