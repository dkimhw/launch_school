

function madlibs() {
  let readlineSync = require('readline-sync');

  let noun = readlineSync.question('Enter a noun: ');
  let verb = readlineSync.question('Enter a verb: ');
  let adj = readlineSync.question('Enter an adjective: ');
  let adverb = readlineSync.question('Enter an adverb: ');

  let story = `Do you ${verb} your ${adj} ${noun} ${adverb}? That's hilarious!
The ${adj} ${noun} ${verb}s ${adverb} over the lazy ${noun}.
The ${noun} ${adverb} ${verb}s up ${adj} Joe's turtle.`

  console.log(story);
}

madlibs();
