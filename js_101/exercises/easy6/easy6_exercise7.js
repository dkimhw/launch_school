

function swapName(name) {
    return name.split(' ').reverse().join(', ')
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"


function swapName2(name) {
    let nameArr = name.split(' ');
    let firstName = nameArr[0] + ' ';
    let lastName = nameArr[nameArr.length - 1] + ', ';
    let middleName = nameArr.slice(1, nameArr.length - 1).join(' ');
    let newName = [];
    newName.push(lastName, firstName, middleName);
    

    return newName.join('');
}


console.log(swapName2('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"


