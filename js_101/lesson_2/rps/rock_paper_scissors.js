

const readline = require('readline-sync');
const VALID_CHOICES = ['r', 'p', 'ss', 'l', 'sp'];
const WIN_CONDITIONS = {
  scissors: ['paper', 'lizard'],
  rock: ['lizard', 'scissors'],
  paper: ['rock', 'spock'],
  spock: ['scissors', 'rock'],
  lizard: ['paper', 'spock']
};
const FULL_NAMES = {
  ss: 'scissors',
  r: 'rock',
  p: 'paper',
  l: 'lizard',
  sp: 'spock'
}

function prompt(message) {
    console.log(`=> ${message}`);
}

function displayGameWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (WIN_CONDITIONS[choice].includes(computerChoice)) {
    prompt(`You win this round!`);
  } else if (WIN_CONDITIONS[computerChoice].includes(choice)) {
    prompt(`Computer wins this round!`);
  } else {
    prompt(`It's a tie!`);
  }
}

function getUserChoice() {
  prompt('Choose one of the following choices:');
  VALID_CHOICES.forEach(validChoice => {
    console.log(`\t${validChoice} for ${FULL_NAMES[validChoice]}`);
  });

  let choice = readline.question(">").toLowerCase();;

  while (!VALID_CHOICES.includes(choice)) {
    prompt(`That's not a valid choice.`);
    choice = readline.question(">").toLowerCase();;
  }

  return choice;
}

function updateScore(score, choice, computerChoice) {
  if (WIN_CONDITIONS[choice].includes(computerChoice)) {
    score.playerScore += 1;
  } else if (WIN_CONDITIONS[computerChoice].includes(choice)) {
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

function resetGame(score) {
  score.playerScore = 0;
  score.computerScore = 0;
}

function displayStartGame() {
  prompt('Welcome to Rock Paper Scissors');
  prompt('You will be playing a best of five with a computer');
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
  displayGameWinner(userChoice, computerChoice);

  updateScore(score, userChoice, computerChoice);
  displayCurrentScore(score);

  let matchWinner = getMatchWinner(score);
  if (matchWinner === 'no winner') {
    continue;
  } else {
    prompt("You win the match!");
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
        resetGame(score);
        console.clear();
        displayStartGame();        
    }
  }
}
