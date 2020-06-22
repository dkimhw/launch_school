

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1)

/*

Strings are primitives (immutable and unchangeable) so I would expect

str1 to still print "hello there"

Strings are passed by value not by reference

*/