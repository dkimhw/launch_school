

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];


let newArr = arr.map(o => {
    let newObj = {}
    Object.entries(o).forEach(e => {
        newObj[e[0]] = e[1] + 1;
    });

    return newObj;
});

console.log(arr);
console.log(newArr);