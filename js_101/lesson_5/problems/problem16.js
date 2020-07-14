let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];




function returnObj(arr) {
    let obj = {}

    arr.forEach(subArr => {
        let key = subArr[0];
        let val = subArr[1];
    
        obj[key] = val;
    });

    return obj;

}

let obj = returnObj(arr);
console.log(obj);