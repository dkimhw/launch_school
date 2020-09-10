
/*

PEDAC

Understand the Problem (P):

1. Explicit Req:
* Input: string containing parantheses
* Output: boolean
  * Logic is we check the input and see if the input has correct # of parentheses
  * If the parantheses in the input string is valid, return true

2. Implicit Req:
* Is there input validation?
* So do we need to check that it has parantheses?
* Will we receive string that has letters and other characters as well?


Test Cases / Examples:

console.log(validParentheses( "()" )); // true
console.log(validParentheses( "())" )); // false
console.log(validParentheses(")(()))" )); // false

Data Structures (D):

Array


Algorithms (A):

Why is the stack the right solution? What is the stack? It's last in first out (so the latest value you added will be remove when you call pop or remove)

"((( )))"

{ '(': ')' }

stack = ['(', '(', '(']

in any case where you have ')' -> pop() stack.
* if (map[key] !== popped value) then return false  

.pop() -> removes the latest added value
.peek() --> arr[arr.length - 1]

*/


function validParentheses(parens) {
  let parensArr = parens.split('');
  let parensMapping = {'(': ')'};
  let stackParens = [];

  for (index = 0; index < parensArr.length; index++) {
    let chr = parensArr[index];
    if (Object.keys(parensMapping).includes(chr)) {
      stackParens.push(chr);
    } else {
      if (stackParens.length === 0) {
        return false;
      }

      let currChar = stackParens.pop();
      if (parensMapping[currChar] !== chr) {
        return false;
      }
    }
  }

  return stackParens.length === 0;
}


console.log(validParentheses( "()" )); // true
console.log(validParentheses( "())" )); // false
console.log(validParentheses(")(()))" )); // false
console.log(validParentheses("(()))(",)); // false
console.log(validParentheses("())())")); // false