
/*

Easy 2:

Welcome Stranger

Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. The object will contain two keys, "title" and "occupation", and the appropriate values. Your function should return a greeting that uses the person's full name, and mentions the person's title.


Understand the Problem:

Input:
  - array - contains 2 or more elements (when combined with spaces - produces person's name)
  - object - contains two keys - "title" and "occupation"
  - assume that you will get this data structure - no need for data validation
Output: 
  - return a string that ues the person's full name and title
  - title is a combination of title + occupation with space between the two.


Test case:
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

Quick Algorithm:

- Take the array combine the string elements using space between each element of the array

["John", "Q", "Doe"] -> John Q Doe

- Take the object and access the value at key "title".

- Combine these dsiparate parts into one large string that can be returned - string interpolation 


*/

let greetings = (name, dataOfPerson) => {
  let fullName = name.join(' ');
  let title = dataOfPerson['title'] + ' ' + dataOfPerson['occupation'];

  return `Hello, ${fullName}! Nice to have a ${title} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.