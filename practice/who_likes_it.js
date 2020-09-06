

/*

PEDAC

Understand the problem (P)

1. explicit requirements
* Input: List of string ["Peter"]
* Output: String
  * display text based on the input
  * i.e. -> empty array = "no one likes this"
  * "Peter" -> "Peter likes this"
  * 2 -> "and" between the two names
  * >= 4 - use first two names and the remaining users as: "and ${remainingPeople} others"
    * likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"


Examples/ Test Cases (E):

console.log(likes(['Peter'])); // 'Peter likes this');
console.log(likes([])); //, 'no one likes this');
console.log(likes(['Jacob', 'Alex'])); //, 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark'])); //, 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); //, 'Alex, Jacob and 2 others like this');

Data Structures (D):

Array


Algorithms (A):

1. Create a variable called numOfLikes has the length of input array
2. if numOfLikes equals 0 then "no one likes this"
3. if numOfLikes equals 1 then first array element + " likes this"
4. if numOfLikes equals 2 then first array element + and + second element + " likes this"
4. if numOfLikes equals 3 then first array element + "," + second element + and + third element + " likes this"
5. >= 4 then first array element + "," + second element + num of remaining likes - count them + " likes this"

*/

function likes(names) {
  let numOfLikes = names.length;

  if (numOfLikes === 0) {
    return `no one likes this`;
  } else if (numOfLikes === 1) {
    return `${names[0]} likes this`;
  } else if (numOfLikes === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (numOfLikes === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    let remainingLikes = numOfLikes - 2;
    return `${names[0]}, ${names[1]} and ${remainingLikes} others like this`;
  }
}

console.log(likes(['Peter'])); // 'Peter likes this');
console.log(likes([])); //, 'no one likes this');
console.log(likes(['Jacob', 'Alex'])); //, 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark'])); //, 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); //, 'Alex, Jacob and 2 others like this');
