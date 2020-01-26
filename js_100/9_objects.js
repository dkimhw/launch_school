
/*
Question 1
*/
console.log("Question 1:\n");

let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};

console.log(person.name + "\n");

/*
Question 2
*/
console.log("Question 2:\n");

console.log("All valid\n");


/*
Question 3
*/
console.log("Question 3:\n");

let myArray = {
  0: 'David ',
  1: 'is ',
  2: 'my ',
  3: 'name!',
  length: 4
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

/*
Question 4
*/
console.log("Question 4:\n");

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let arrKeys = Object.keys(obj);

arrKeys = arrKeys.map(i => i.toUpperCase());

console.log(arrKeys);
console.log(obj + "\n");

/*
Question 5
*/
console.log("Question 5:\n");

let myProtoObj = {
  foo: 1,
  bar: 2,
};

console.log(myProtoObj);

let myObj = Object.create(myProtoObj);
myObj['hello'] = 'world';

console.log(myObj); // only prints world because it only prints its own properties not the ones inherited

// This solves for that
for (let i in myObj) {
  console.log(myObj[i]);
}

console.log("\n");


/*
Question 6
*/
console.log("Question 6:\n");

myObj['qux'] = 3;

console.log("This prints only the properties of the obj");
Object.keys(myObj).forEach(function(key) {
  console.log(key);
});

console.log("\nThis prints all of the properties");
for (key in myObj) {
  console.log(key);
}

/*
Question 7
*/
console.log("Question 7:\n");

let objToCopy = {
  foo: 1,
  bar: 2,
};

function copyObj(obj, arr) {
  let newObj = {};

  if (arr) {
    arr.forEach(function(i) {
      newObj[i] = obj[i];
    })

    return newObj;
  }
  else {
    return Object.assign(newObj, obj);
  }
}

let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined

console.log("\n");

/*
Question 8 - I don't fully understand this
*/
console.log("Question 8:\n");

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi'; // does not mutate the original object - is it because of scope
}

bar(foo, qux);

console.log(foo.a); // 'hi' - mutates the value of foo by assigning the a property to a new value
console.log(qux); // 'hello'

/*
This is because argument2 (qux) is reassigned but does not mutate the string represented by qux. Variable assignment like this does not mutate the original object

It probably becuase argument2 is scoped to function scope?
*/