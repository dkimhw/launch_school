
/*

Problem:
Input:
-String
-Format: ${First Name} ${Last Name}
Output:
-String
-Swap the first and last name

*/


let swapName = (name) => {
  let splitName = name.split(' ');
  return `${splitName[1]}, ${splitName[0]}`;
};

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
