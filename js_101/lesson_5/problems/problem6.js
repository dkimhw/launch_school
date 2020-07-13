

let munsters = {
    herman: { age: 32, gender: 'male' },
    lily: { age: 30, gender: 'female' },
    grandpa: { age: 402, gender: 'male' },
    eddie: { age: 10, gender: 'male' },
    marilyn: { age: 23, gender: 'female'}
};

Object.keys(munsters).forEach(munster => {
    console.log(`${munster} is a ${munsters[munster].age}-year-old ${munsters[munster].gender}.`);
})

let e = Object.entries(munsters);

console.log(e);