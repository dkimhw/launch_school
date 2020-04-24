

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// flintstones = flintstones.flat();

flintstones = flintstones.reduce((acc, current) => {
    return acc.concat(current);
}, []);

console.log(flintstones);

/*
Alternate:

let newFlintstones = [];
flintstones.forEach(element => {
  newFlintstones = newFlintstones.concat(element);
});

*/

