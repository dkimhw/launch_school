
/*
PEDAC Process

1. Understand the problem (inputs, outputs)

Inputs:

Positive integer n (do we need to do any validations for non-positive inputs?)
Positive integer p (do we need to do any validations for non-positive inputs?)


Output:

We want to find a positive integer k -> this k is the sum of n taken to the the successive power of p and this number should equl to n * k. 

2. Examples and Test Cases

So let's say I have:

digPow(n, p)
console.log( digPow(89, 1) ) // returns 1 since 8^1 + 9^2 = 89 = 89 * 1
console.log( digPower(92, 1) ) // return -1 since there is no k such as 9¹ + 2² equals 92 * k
console.log( digPow(46288, 3) ) // return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Think about additional edge cases:
* Is there a case where you might have multiple k's - in those cases how do you want me to handle that. 
  * in those cases, return the lowest possible k


3. Data Structures

Array of numbers to loop over each digit to take the power of sucessive p and sum them all together.

4. Algorithms

digitPow(n, p)

a. Create an array of number from the given `n` (we may have to turn it into string and convert back to number)
b. Use for loop to loop over each element, and calculate the n^p (remember that p must increase in value by one as you loop over each element).
c. Once we have the `sum`:
  * Let's say `n = 89`, then `sum` = 89
  * Then we take `sum` % n === 0 then we want to return `sum` / `n`
  * else: we want to return -1

5. Implementation


*/

function digitPow(n, p) {
  digitArr = n.toString().split('').map(el => parseInt(el));

  let sum = 0;
  for (let index = 0; index < digitArr.length; index++) {
    let newPowerToPValue = Math.pow(digitArr[index], p);
    sum += newPowerToPValue;

    p++;
  }

  console.log(sum2);

  if (sum % n === 0) {
    return sum / n;
  } else {
    return -1;
  }
}

console.log(digitPow(89, 1)); // 1
console.log(digitPow(92, 1)); // -1
console.log(digitPow(695, 2)); // 2
console.log(digitPow(46288, 3)); // return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51