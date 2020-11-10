

/*

Understand the problem:

* Input:
  * Two strings, str1, str2
  * Note that the inputs will only have lower case letters - no punctuations or digits
* Output:
  * Boolean
  * Returns true if part of str1 can be rearranged to match str2
* Edge cases:

'rkqodlw' can be rearranged to worldkq, world 
str1 has 'cedewaraaossoqqyt' - part of that string can be extracted to form 'codewars' so returns true

Test Cases:

console.log(scramble('javaass', 'jjss') === false); // true
console.log(scramble('rkqodlw', 'world') === true); // true
console.log(scramble('cedewaraaossoqqyt', 'codewars')); // true
console.log(scramble('katas', 'steak') === false); // true
console.log(scramble('scriptjava', 'javascript') === true); // true
console.log(scramble('scriptingjava', 'javascript') === true); // true

Algorithms:

One way I am thinking that we can approach this is:
  * Start with the str2 (world) - str2 = 'rkqodlw'
  * For each character:
    * check if that character exists in str2
    * if it does continue looping
    * if it does not break and return false

What are some issues with this approach?
  * One thing that comes to mind immediately is that this solution does not account for:
    * multiple letters
    * javascript
    * what if str1 = javscript - the code I write would need to account that there is only one `a` and return false

'javaass' & 'jjss'
Do we need to create a solution that keeps track of the number digits? What would be the best way to implement this?
  * We could find the first instance of 'j', use splice to drop that index. 

*/

const scramble = (str1, str2) => {
  let str1Arr = str1.split('');

  for(let i = 0; i < str2.length; i += 1) {
    let chrIndex = str1Arr.findIndex(chr => chr === str2[i]);
    if (chrIndex == -1) {
      return false;
    } 
    str1Arr.splice(chrIndex, 1);
  }

  return true;
}

console.log(scramble('javaass', 'jjss') === false); // true
console.log(scramble('rkqodlw', 'world') === true); // true
console.log(scramble('cedewaraaossoqqyt', 'codewars') === true); // true
console.log(scramble('katas', 'steak') === false); // true
console.log(scramble('scriptjava', 'javascript') === true); // true
console.log(scramble('scriptingjava', 'javascript') === true); // true
