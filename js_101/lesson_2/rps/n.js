const MESSAGES = require('./rock_paper_scissors.json');
const readline = require('readline-sync');
const VALID_CHOICES = ['r', 'p', 'sc', 'l', 'sp'];
const WINNING_COMBOS = {
  r: ['rock', 'lizard', 'scissors'],
  p: ['paper', 'rock', 'spock'],
  sc: ['scissors', 'paper', 'lizard'],
  l: ['lizard', 'paper', 'spock'],
  sp: ['spock', 'rock', 'scissors']
};

function prompt(message) {
  console.log(`>>> ${message}`);
}

function displayScore(human, computer) {
  prompt(`${MESSAGES["score"]}\n    You:      ${human}\n    Computer: ${computer}`);
}

function getUserChoice() {
  prompt(`${MESSAGES["user choice"]}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt(MESSAGES["invalid user choice"]);
    choice = readline.question();
  }
  return choice;
}

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
  return computerChoice;
}

function getWinner(choice, computerChoice) {
  if (choice === computerChoice) {
    return "tie";
  } else if (WINNING_COMBOS[choice].includes(WINNING_COMBOS[computerChoice][0])) {
    return "user";
  } else {
    return "computer";
  }
}

function displayGameResults(winner, choice, computerChoice) {
  prompt(`You chose ${WINNING_COMBOS[choice][0]}, computer chose ${WINNING_COMBOS[computerChoice][0]}`);

  switch (winner) {
    case 'tie':
      prompt(MESSAGES['tie']);
      break;
    case 'user':
      prompt(MESSAGES['win']);
      break;
    case 'computer':
      prompt(MESSAGES['lose']);
  }
}

function playOneRound() {
  let choice = getUserChoice();
  let computerChoice = getComputerChoice();
  let winner = getWinner(choice, computerChoice);
  console.clear();
  displayGameResults(winner, choice, computerChoice);
  return winner;
}

function playOneRoundGame() {
  while (true) {

    playOneRound();
    prompt(MESSAGES["play again?"]);
    let answer = readline.question().toLowerCase();

    console.clear();

    if (answer !== 'y') {
      prompt(MESSAGES['goodbye']);
      break;
    }
  }
}

function displayBestOfFiveWinner(humanScore, computerScore) {
  if (humanScore > computerScore) {
    prompt(MESSAGES["best of five win"]);
  } else {
    prompt(MESSAGES["best of five loss"]);
  }
}

function playBestOfFiveGame() {
  let humanScore = 0;
  let computerScore = 0;

  while (humanScore < 5 && computerScore < 5) {
    let winner = playOneRound();
    if (winner === "user") {
      humanScore += 1;
      displayScore(humanScore, computerScore);
    } else if (winner === "computer") {
      computerScore += 1;
      displayScore(humanScore, computerScore);
    } else {
      displayScore(humanScore, computerScore);
    }
  }
  displayBestOfFiveWinner(humanScore, computerScore);
}

function willPlayOneRound() {
  return Number(gameChoice) === 1;
}

console.clear();

prompt(MESSAGES["welcome"]);

prompt(MESSAGES["game type"]);
let gameChoice = readline.question();

while (![1, 2].includes(Number(gameChoice))) {
  prompt(MESSAGES["invalid game choice"]);
  gameChoice = readline.question();
}

console.clear();

willPlayOneRound() ? playOneRoundGame() : playBestOfFiveGame();