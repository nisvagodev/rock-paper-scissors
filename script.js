function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, paper or scissors?");
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let humanChoiceLowercase = humanChoice.toLowerCase();
  if (humanChoiceLowercase === "rock" && computerChoice === "paper") {
    console.log(`You lose! Paper beats Rock`);
    computerScore += 1;
  } else if (
    humanChoiceLowercase === "paper" &&
    computerChoice === "scissors"
  ) {
    console.log(`You lose! Scissors beats Paper`);
    computerScore += 1;
  } else if (humanChoiceLowercase === "scissors" && computerChoice === "rock") {
    console.log(`You lose! Rock beats Scissors`);
    computerScore += 1;
  } else if (humanChoiceLowercase === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats scissors");
    humanScore += 1;
  } else if (humanChoiceLowercase === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats Rock");
    humanScore += 1;
  } else if (
    humanChoiceLowercase === "scissors" &&
    computerChoice === "paper"
  ) {
    console.log("You win! Scissors beats Paper");
    humanScore += 1;
  } else {
    console.log("It's a tie!");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
