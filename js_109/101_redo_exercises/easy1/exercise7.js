/*

https://launchschool.com/exercises/c55f9982

Write a function that takes two strings as arguments, determines the longer of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

Understand the problem:

* Input:
  Two arguments - both strings
    * Any validation required?
* Output:
  Returns a new string (short string + longer string + shorter string)
  Must determine which string is shorter
* Edge case: assume that the strings will be of different sizes


Test Cases:

console.log(shortLongShort('abc', 'defgh') === "abcdefghabc"); 
console.log(shortLongShort('abcde', 'fgh') === "fghabcdefgh");
console.log(shortLongShort('', 'xyz') === "xyz");


Walking through test case:

'abc' and 'defgh'. 'abc' is shorter. 

So we get 'abc' concat 'defgh' concat 'abc'


Quick Algorithm:

Identify the shorter of the two string
return concat short + long + short (no spaces)

*/

let shortLongShort = (str1, str2) => {
  let shorterString;
  let longerString;

  if (str1.length < str2.length) {
    shorterString = str1;
    longerString = str2;
    // return str1 + str2 + str1;
  } else {
    shorterString = str2;
    longerString = str1;
  }

  return shorterString + longerString + shorterString;

}

console.log(shortLongShort('abc', 'defgh') === "abcdefghabc"); 
console.log(shortLongShort('abcde', 'fgh') === "fghabcdefgh");
console.log(shortLongShort('', 'xyz') === "xyz");