function messWithVars(one, two, three) {
    one = ["two"];
    two = ["three"];
    three = ["one"];
  }
  
  let one = ["one"];
  let two = ["two"];
  let three = ["three"];
  
  messWithVars(one, two, three);
  
  console.log(`one is: ${one}`);
  console.log(`two is: ${two}`);
  console.log(`three is: ${three}`);

  /*
    Same here - still doesn't change anything since the variables are in function scope and immediately discarded once the function ends

  */