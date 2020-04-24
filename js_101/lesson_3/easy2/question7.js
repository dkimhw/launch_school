


let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
/*
let barney = [];
for (let [key, values] of Object.entries(flintstones)) {
    if (key === 'Barney') {
        barney.push(key, values);
    }
}

console.log(barney);
*/

let barney2 = Object.entries(flintstones).filter(pair => pair[0] === 'Barney').flat();
console.log(barney2);