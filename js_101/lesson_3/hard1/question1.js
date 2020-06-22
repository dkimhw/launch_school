function first() {
    return {
        prop1: "hi there"
    };
}
  
function second() {
    return
    {
        prop1: "hi there"
    };
}

console.log(first()); // { prop1: 'hi there' }
console.log(second()); // undefined

/*

The reason for this behavior is that JS engine inserts semicolons where it thinks oyu need them.

It inserts a semicolon after the word `return` so the function returns `undefined`. No errors are thrown because rest of the code still works. 

*/