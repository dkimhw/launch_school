

const readline = require('readline-sync');
const VALID_CHOICES = ['r', 'p', 'ss', 'l', 'sp'];
const WIN_CONDITIONS = {
  scissors: {
    winsAgainst: ['paper', 'lizard'],
    verbs: ['cuts', 'decapitates']
  },
  rock: {
    winsAgainst: ['lizard', 'scissors'],
    verbs: ['crushes', 'crushes']
  },
  paper: {
    winsAgainst: ['rock', 'spock'],
    verbs: ['covers', 'disproves']
  },
  spock: {
    winsAgainst: ['scissors', 'rock'],
    verbs: ['smashes', 'vaporizes']
  },
  lizard: {
    winsAgainst: ['paper', 'spock'],
    verbs: ['eats', 'poisons']
  }
};
const FULL_NAMES = {
  ss: 'scissors',
  r: 'rock',
  p: 'paper',
  l: 'lizard',
  sp: 'spock'
};

function prompt(message) {
    console.log(`=> ${message}`);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getRPSVerb(winner, loser) {
  let indexOfVerb = WIN_CONDITIONS[winner].winsAgainst.indexOf(loser);
  return WIN_CONDITIONS[winner].verbs[indexOfVerb];
}

function displayRoundWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (WIN_CONDITIONS[choice].winsAgainst.includes(computerChoice)) {
    prompt(`You win this round! ${capitalize(choice)} ${getRPSVerb(choice, computerChoice)} ${computerChoice}.`);
  } else if (WIN_CONDITIONS[computerChoice].winsAgainst.includes(choice)) {
    prompt(`Computer wins this round! ${capitalize(computerChoice)} ${getRPSVerb(computerChoice, choice)} ${choice}.`);
  } else {
    prompt(`It's a tie!`);
  }
}

function getUserChoice() {
  prompt('Choose one of the following choices:');
  VALID_CHOICES.forEach(validChoice => {
    console.log(`\t${validChoice} for ${FULL_NAMES[validChoice]}`);
  });

  let choice = readline.question(">").toLowerCase();

  while (!VALID_CHOICES.includes(choice)) {
    prompt(`That's not a valid choice.`);
    choice = readline.question(">").toLowerCase();
  }

  return choice;
}

function updateScore(score, choice, computerChoice) {
  if (WIN_CONDITIONS[choice].winsAgainst.includes(computerChoice)) {
    score.playerScore += 1;
  } else if (WIN_CONDITIONS[computerChoice].winsAgainst.includes(choice)) {
    score.computerScore += 1;
  }
}

function displayCurrentScore(score) {
  prompt(`Your current score: ${score.playerScore}`);
  prompt(`Computer's current score: ${score.computerScore}`);
}

function getMatchWinner(score) {
  if (score.playerScore === 5 && score.computerScore < 5) {
    return 'user';
  } else if (score.playerScore < 5 && score.computerScore === 5) {
    return 'computer';
  } else {
    return 'no winner';
  }
}

function displayMatchWinner(score) {
  if (score.playerScore === 5 && score.computerScore < 5) {
    prompt('You win the match!');
  } else if (score.playerScore < 5 && score.computerScore === 5) {
    prompt('Computer wins the match!');
  }
}

function displayStartGame() {
  prompt('Welcome to Rock Paper Scissors');
  prompt('You will be playing a best of five with a computer');
}

function resetScore(score) {
  score.playerScore = 0;
  score.computerScore = 0;
}

function newGame() {
  console.clear();
  displayStartGame();
}


console.clear();
let score = { playerScore: 0, computerScore: 0 };
displayStartGame();

while (true) {
  let userChoice = getUserChoice();
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  userChoice = FULL_NAMES[userChoice];
  computerChoice = FULL_NAMES[computerChoice];
  displayRoundWinner(userChoice, computerChoice);

  updateScore(score, userChoice, computerChoice);
  displayCurrentScore(score);

  let matchWinner = getMatchWinner(score);
  if (matchWinner === 'no winner') {
    continue;
  } else {
    displayMatchWinner(score);
    prompt("Do you want to play again (y/n)?");
    let answer = readline.question().toLowerCase();
    while (answer[0] !== 'n' && answer[0] !== 'y') {
        prompt('Please enter "y" or "n"');
        answer = readline.question(">").toLowerCase();
    }

    if (answer[0] !== 'y') {
        console.clear();
        break;
    } else if (answer[0] === 'y') {
        resetScore(score);
        newGame();
    }
  }
}
