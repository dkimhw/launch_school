

let square = (num) => {
  let multiplyInputs = num * num;
  
  if (!isNaN(multiplyInputs)) {
    return multiplyInputs;
  } else {
    return null;
  }
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
console.log(square('hello') === null); //logs true