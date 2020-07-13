

let obj = {
    first: ['the', 'quick'],
    second: ['brown', 'fox'],
    third: ['jumped'],
    fourth: ['over', 'the', 'lazy', 'dog'],
};


Object.values(obj).forEach(e => {
    e.forEach(a => {
        a.split('').forEach(c => {
            if (/[aeiou]/.test(c)) {
                console.log(c);
            }
        })
    })
})