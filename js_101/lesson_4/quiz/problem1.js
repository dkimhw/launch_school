let cat = 'Butterscotch';

console.log(cat[8]);
console.log(cat[-4]); // accessing negative index just returns undefined
console.log(cat[cat.indexOf('o')]);
console.log(cat.slice(-4, -3));
console.log(cat[cat.length - 4]);