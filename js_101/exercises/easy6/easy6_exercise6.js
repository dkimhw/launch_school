

function sequence(int) {
    let seq = [];
    for (let i = 1; i <= int; i += 1) {
        seq.push(i);
    }

    return seq;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]