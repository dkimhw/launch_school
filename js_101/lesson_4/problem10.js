let ages = {
    Herman: 32,
    Lily: 30,
    Grandpa: 5843,
    Eddie: 10,
    Marilyn: 22,
    Spot: 237
};

let minAge;

Object.values(ages).forEach(age => {
    if (isNaN(minAge)) {
        minAge = age;
    } else if (age < minAge) {
        minAge = age;
    }
});

console.log(minAge);

let agesArr = Object.values(ages);
console.log(Math.min(...agesArr)); // what is this three dots?

/*

`...` --> this is called a spread operator. It converts the array into a list of arguments

*/