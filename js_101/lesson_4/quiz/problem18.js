
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

const map2 = array1.map(x => true);

console.log(map1);
console.log(map2);

const map3 = array1.map(x=> {true});
console.log(map3);

const map4 = array1.map(x=> undefined);
console.log(map4);
