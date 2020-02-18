

// Return a greeting that uses the person's full name, and mentions the person's title.
// Two Arguments: Array and obj
// Array argument: Contains person's name
// Obj: has two keys "title" and "occupation"

function greetings(name, job) {
  let arrJoined = name.join(" ");
  let jobJoined =  [];

  for (i in job) {
    jobJoined.push(job[i]);
  }

  jobJoined = jobJoined.join (" ");

  return `Hello, ${arrJoined}! Nice to have a ${jobJoined} around.`;
}


console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.


/*
Better solution:
function greetings(name, status) {
  return `Hello, ${name.join(" ")}! Nice to have a ${status["title"]} ${
    status["occupation"]
  } around.`;
}

*/
