let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

function countLowerCase(str) {
  let count = 0;
  str.split('').forEach(el => {
    if (/[a-z]/i.test(el)) {
      if (el === el.toLowerCase()) count++;
    }
  });
  
  return count;
}

// Test case
console.log(countLowerCase(statement1));
console.log(countLowerCase(statement2));