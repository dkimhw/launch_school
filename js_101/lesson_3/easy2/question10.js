

let title = "Flintstone Family Members";
let title_len = title.length;
let max = 40 - title_len;
let space = Math.floor(max / 2);

console.log(" ".repeat(space) + title);

// Another way
let padding = Math.floor((40 - title.length) / 2);

console.log(title.padStart(padding + title.length));
