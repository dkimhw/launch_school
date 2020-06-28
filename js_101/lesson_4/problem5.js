

[1, 2, 3].every(num => {
    return num = num * 2;
});

// true


/*

The expression `num = num * 2` is an assignment expression - and will evaluate as the expression on the right-hand side of the assignment and that is what gets returned in each iteration. Since all of those numbers are truthy values `every` returns `true`.

*/
