
// Will not produce the results I need
function lessThan1(upperLimit) {
    let numbers = [];
    let canditate = 1;

    while (true) {
        numbers.push(canditate); // this code will add 1 no matter what
        ++canditate;
        if (canditate > upperLimit) break;
    }

    return numbers
}

console.log(lessThan1(1)); // Does not account for 1
console.log(lessThan1(5)); // includes 5 because it has to be >

// Will have the same issues as above
function lessThan2(upperLimit) {
    let numbers = [];
    let canditate = 0;

    do {
        canditate++;
        numbers.push(canditate);
    } while (canditate < upperLimit);

    return numbers;
}

console.log(lessThan2(1)); // Does not account for 1
console.log(lessThan2(5)); // goes up to 5 


function lessThan3(upperLimit) {
    let lengths = [];
  
    for (let candidate = 1; candidate < upperLimit; candidate += 1) {
      lengths.push(candidate);
    }
  
    return lengths;
}

console.log(lessThan3(1)); 
console.log(lessThan3(5));
