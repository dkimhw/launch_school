
function messWithVars(one, two, three) {
    one = two;
    two = three;
    three = one;
  }
  
  let one = ["one"];
  let two = ["two"];
  let three = ["three"];
  
  messWithVars(one, two, three);
  
  console.log(`one is: ${one}`);
  console.log(`two is: ${two}`);
  console.log(`three is: ${three}`);


  /*   
    Prints one, two, three. Doesn't change because `one`, `two`, `three` are in the function scope - so does not actually impact the global variables (one, two, three)

  */