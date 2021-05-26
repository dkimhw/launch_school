
/*

Problem:

* Input:
- String
* Ouput:
- Boolean
- true if parantheses in input are balanced
- false if not

By balanced - parantheses must occur in matching () pairs.


Example:

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);


Algorithm:

We can keep track of how many "(" and ")" appear. 
The main issue is that ")" "(" obviously is not valid despite having
1 - ")" and 1 - "("

)()(

So if countOf) > countOf( then false. I think that would cover these cases?


*/

let isBalanced = (str) => {
  let countOfRightParantheses = 0;
  let countOfLeftParantheses = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ')') {
      countOfRightParantheses++;
    } else if (str[i] === '(') {
      countOfLeftParantheses++;
    }

    if (countOfRightParantheses > countOfLeftParantheses) {
      return false;
    }
  }

  if (countOfLeftParantheses === countOfRightParantheses) {
    return true;
  } else {
    return false;
  }
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);


