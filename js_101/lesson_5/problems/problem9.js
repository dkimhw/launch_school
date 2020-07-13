

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];



console.log(arr);


let newArr = arr.map(arr => {
    if (typeof arr[0] === 'string') {
        return arr.slice().sort();
    } else {
        return arr.slice().sort((a, b) => a - b);
    }
});

console.log(newArr);