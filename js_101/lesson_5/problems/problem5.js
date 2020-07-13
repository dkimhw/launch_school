

let munsters = {
    Herman: { age: 32, gender: 'male' },
    Lily: { age: 30, gender: 'female' },
    Grandpa: { age: 402, gender: 'male' },
    Eddie: { age: 10, gender: 'male' },
    Marilyn: { age: 23, gender: 'female'}
};

let munstersKeys = Object.keys(munsters);
let maleMunsters = munstersKeys.filter(i => munsters[i]['gender'] === 'male');
let totalMaleAge = maleMunsters.reduce( (sum, munster) => sum += parseInt(munsters[munster]['age']), 0);

console.log(totalMaleAge);

let memberDetails = Object.values(munsters);

console.log(memberDetails);

//This is definitely better
/*

let memberDetails = Object.values(munsters);
let totalMaleAge = 0;

memberDetails.forEach(member => {
  if (member.gender === 'male') {
    totalMaleAge += member.age;
  }
});

*/

// Or this

/*

let totalMaleAge = 0;

for (let member in munsters) {
  if (munsters[member]['gender'] === 'male') {
    totalMaleAge += munsters[member].age;
  }
}

console.log(totalMaleAge); // => 444

*/