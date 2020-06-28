
## PEDAC

PEDAC is an approach to solving programming problems. Its primary goal is to help you identify and avoid pitfalls you may encounter when you don't code with intent. 

P - Understand the problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code

The number one impulse is when given a programming problem - it's to start coding but that's the wrong approach and can often lead to the wrong answers and makes you look unorganized. PEDAC process saves time and lets you solve complex problems efficiently.

### P - Understand the Problem

1. Read the problem description
2. Check the test cases - if any
3. If any part of the problem is unclear, ask the interviewer or problem requester to clarify the matter


**Example problem:**

Given a string, write a function changeMe which returns the same string but with all the words in it that are palindromes uppercased.

Test cases:
changeMe("We will meet at noon") == "We will meet at NOON"
changeMe("No palindromes here") = "No palindromes here"
changeMe("") == ""
changeMe("I LOVE my mom and dad equally") == "I LOVE my MOM and DAD equally"

After reading the problem - we may need clarification:

1. **What is a palindrome?** -> you might ask the interviewer to tell you what a palindrome is and the interviewer would tell you that it is a word that reads the same forwards and backwards

2. **Should the words in the string remain the same if they already use uppercase?** ->  Here, you can check the test cases. In the fourth test case, the word `LOVE` already uses uppercase, and it remains uppercase in the solution. 

3. **How should I deal with empty strings or null inputs?** -> The test cases frequently answer this question. In this case, test case number 3 provides the answer.

4. **Can I assume that all inputs are strings?** -> Test cases don't show any non-string inputs, so you should ask whether the inputs can contain non-string values, and what you should do with them. In this problem, we will not worry about non-string values.

5. **Should I consider letter case when deciding whether a word is palindrome?** -> Again, test cases don't show any appropriate examples. The interviewer might tell you that palindrome words should be case sensitive: `mom` is a palindrome, `Mom` is not.

6. **Do I need to return the same object or an entirely new one?** -> This question isn't relevant to our problem since JS strings are immnutable and any operation on them will result in a new string.
    * In general, though, this question is one of the most important and most overlooked that you can ask.
    * Typically, while solving problems, students make certain assumptions. One assumption they might make is to return the same object - they often start solving the problem without checking whether that assumption is correct.

7. **Always verify your assumptions by looking at the test cases or by asking the interviewer** -> Students make assumptions about the problem or expected output that may not be what the interviewer has in mind. That can lead to a waste of time pursuing an incorrect or incomplete solution. 

Then create requirements both explicit and implicit given the problem:

```
// input: string
// output: string (not the same object)
    // Edge case, error validation: return undefined if user passes anything other than string
// rules:
//      Explicit requirements:
//        - every palindrome in the string must be converted to
//          uppercase. (Reminder: a palindrome is a word that reads
//          the same forwards and backward).
//        - Palindromes are case sensitive ("Dad" is not a palindrome, but
//          "dad" is.)
```


### Data Structure / Algorithm

Data structure influences your algorithm. Deciding what data structure to use is generally easy - use cases for arrays and objects are generally easy to identify. 

Designing the right algorithm is far more challenging. The biggest problem that students have is not creating sufficient details.

**Example:**

```
// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// palindromeSubstrings("supercalifragilisticexpialidocious") == ["ili"]
// palindromeSubstrings("abcddcbA") == ["bcddcb", "cddc", "dd"]
// palindromeSubstrings("palindrome") == []
// palindromeSubstrings("") == []
```

1. First - understand the problem:

```
// Some questions you might have?
// 1. What is a substring?
// 2. What is a palindrome?
// 3. Will inputs always be strings?
// 4. What does it mean to treat palindrome words case-sensitively?

// input: string
// output: an array of substrings
// rules:
//      Explicit requirements:
//        - return only substrings which are palindromes.
//        - palindrome words should be case sensitive, meaning "abBA"
//          is not a palindrome.
```

2. Write detailed algorithm

Bad:

```
// Algorithm:
//  - declare a result variable and initialize it to an empty array
//  - create an array named substrArray that contains all of the
//    substrings of the input string that are at least 2 characters long.
//  - loop through the words in the substrArray array.
//  - if the word is a palindrome, append it to the result
//    array
//  - return the result array
```

Why?
* Because it's not complete. We are not fully clear where the hardest part of this problem is.
* Determining whether a word is a palindrome is not that difficult for most people. However, finding ALL the substrings for a given string can be challenging. 
* We need to expand the `substrings` function so that we have an approach to finding all the substrings.

To find the right algorithm:
* You can simplify this complicated problem by taking a small concrete example and using it to determine how you will approach the problem. 
* For example, we can take a short word like `halo` and write all its substrings that are 2 characters in length or longer: `['ha', 'hal', 'halo', 'al', 'alo', 'lo']`.
* Beginning with the first letter of the string, `'h'`, we first find all the substrings that begin with that letter: `['ha', 'hal', 'halo']`. We are doing a loop here. We first return the substring that begins with the first letter and ends with the second letter - then a substring that ends with the third, etc.
* It goes the same when we start with `a`.

One way to solve it:
* Loop within a loop. The first loop tracks the index of the first letter of each substring. Inner loop then tracks the index of the last letter of each string

```
// - create an empty array called `result` that will contain all
//   the required substrings
// - declare a variable startSubstrIndex and assign 0 to it.
// - declare a variable endSubstrIndex and assign value of
//   startSubstrIndex + 2 to it.
// - Enter loop which will break when startSubstrIndex is equal
//     to str.length - 1
//   - Within that loop enter another loop that will break if
//     endSubstrIndex is equal to str.length
//     - append to the result array part of the string from
//       startSubstrIndex to endSubstrIndex
//     - increment `endSubstrIndex` by 1.
//   - end the inner loop
//   - increment `startSubstrIndex` by 1.
//   - reassign `endSubstrIndex` to `startSubstrIndex += 1`
// - end outer loop
// - return `result` array
```

```javascript
function substrings(str) {
  let result = [];
  let startSubstrIndex = 0;
  let endSubstrIndex = startSubstrIndex + 2;

  while (startSubstrIndex < str.length - 1) {
    while (endSubstrIndex <= str.length) {
      result.push(str.slice(startSubstrIndex, endSubstrIndex));
      endSubstrIndex += 1;
    }

    startSubstrIndex += 1;
    endSubstrIndex = startSubstrIndex + 2;
  }

  return result;
}
```

The full PEDAC:

```
// input: a string
// output: an array of substrings
// rules: palindrome words should be case sensitive, meaning "abBA"
//        is not a palindrome

// Algorithm:
//  substrings method
//  =================
//  - create an empty array called `result` which will contain all
//    the required substrings
//  - declare a variable startSubstrIndex and assign 0 to it.
//  - declare a variable endSubstrIndex and assign value of
//    startSubstrIndex + 2 to it.
//  - Enter loop which will break when startSubstrIndex is equal
//      to str.size - 1
//    - Within that loop enter another loop which will break if
//      endSubstrIndex is equal to str.size
//      - append to the result array part of the string from
//        startSubstrIndex to endSubstrIndex
//      - increment `endSubstrIndex` by 1.
//    - end the inner loop
//    - increment `startSubstrIndex` by 1.
//    - reassign `endSubstrIndex` to `startSubstrIndex += 2`
//  - end outer loop
//  - return `result` array

//  is_palindrome? method
//  =====================
//  - Inside the `isPalindrome` method, check whether the string
//    value is equal to its reversed value. You can use the
//    Array.prototype.reverse method along with `split` and `join`.

//  palindrome_substrings method
//  ============================
//  - declare a result variable and initialize it to an empty array
//  - create an array named substrArray that contains all of the
//    substrings of the input string that are at least 2 characters long.
//  - loop through the words in the substrArray array.
//    - if the word is a palindrome, append it to the result
//      array
//  - return the result array
```

```javascript
function substrings(str) {
  let result = [];
  let startSubstrIndex = 0;
  let endSubstrIndex = startSubstrIndex + 2;

  while (startSubstrIndex < str.length - 1) {
    while (endSubstrIndex <= str.length) {
      result.push(str.slice(startSubstrIndex, endSubstrIndex));
      endSubstrIndex += 1;
    }

    startSubstrIndex += 1;
    endSubstrIndex = startSubstrIndex + 2;
  }

  return result;
}

function isPalidrome(str) {
  return str === str.split('').reverse().join('');
}

function palindromeSubstrings(str) {
  let result = [];
  let substringsArr = substrings(str);

  substringsArr.forEach(substring => {
    if (isPalidrome(substring)) {
      result.push(substring);
    }
  });

  return result;
}

console.log(
  palindromeSubstrings("supercalifragilisticexpialidocious"));   // ["ili"]
console.log(palindromeSubstrings("abcddcbA"));                   // ["bcddcb", "cddc", "dd"]
console.log(palindromeSubstrings("palindrome"));                 // []
console.log(palindromeSubstrings("")); 
```

**Important Note:**
* Note that you do not need to write all your pseudocode before you start coding.
* You might write a high-level version of the `palindromeSubstrings` pseudocode that omits the details of substrings and `isPalindrome`, write the corresponding code, and then return to the two lower-level methods when ready.
* You need to be able to write a plain English solution to the problem or you will not be able to code it either. You do not need any "fancy" methods to solve these problems.


### Testing Frequently

* Testing is not properly part of the PEDAC approach but it is very important. You need to test your code early and often while writing it. 
* For examples, let's take a look at the `substrings` method. When we are writing the very early part of the logic. At this point we may want to check that what we currently have is correct:

```javascript
function substrings(str) {
  let result = [];
  let startSubstrIndex = 0;
  let endSubstrIndex = startSubstrIndex + 2;
  console.log(endSubstrIndex); // => 2
}

substrings("abc");
```

* Next - add a bit more and test again:

```javascript
function substrings(str) {
  let result = [];
  let startSubstrIndex = 0;
  let endSubstrIndex = startSubstrIndex + 2;
  while (startSubstrIndex < str.length - 1) {
    startSubstrIndex += 1;
  }

  console.log(startSubstrIndex); // => 2
  console.log(endSubstrIndex); // => 2
}

substrings("abc");
```