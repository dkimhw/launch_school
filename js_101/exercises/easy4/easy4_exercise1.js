
// Input: none
// Output: String - in the string it has a randomly generated age between 20 and 120 inclusive


function teddyAge() {
  let ageOfTeddy  = randomIntRange(120, 20);
  console.log(`Teddy is ${ageOfTeddy} years old!`);
}

function randomIntRange(min, max) {
  if (min > max) {
    let maxTmp = max;
    max = min;
    min = maxTmp;
  }

  return Math.floor(Math.random() * (max - min) + min); // + min here becomes the minimum value we can get
}

teddyAge();
