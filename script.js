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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
const humanSelectionTwo = getHumanChoice();
const computerSelectionTwo = getComputerChoice();
const humanSelectionThree = getHumanChoice();
const computerSelectionThree = getComputerChoice();
const humanSelectionFour = getHumanChoice();
const computerSelectionFour = getComputerChoice();
const humanSelectionFive = getHumanChoice();
const computerSelectionFive = getComputerChoice();

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    let humanChoiceLowercase = humanChoice.toLowerCase();
    if (humanChoiceLowercase === "rock" && computerChoice === "paper") {
      console.log(`You lose! Paper beats Rock`);
      return (computerScore += 1);
    } else if (
      humanChoiceLowercase === "paper" &&
      computerChoice === "scissors"
    ) {
      console.log(`You lose! Scissors beats Paper`);
      return (computerScore += 1);
    } else if (
      humanChoiceLowercase === "scissors" &&
      computerChoice === "rock"
    ) {
      console.log(`You lose! Rock beats Scissors`);
      return (computerScore += 1);
    } else if (
      humanChoiceLowercase === "rock" &&
      computerChoice === "scissors"
    ) {
      console.log("You win! Rock beats scissors");
      return (humanScore += 1);
    } else if (humanChoiceLowercase === "paper" && computerChoice === "rock") {
      console.log("You win! Paper beats Rock");
      return (humanScore += 1);
    } else if (
      humanChoiceLowercase === "scissors" &&
      computerChoice === "paper"
    ) {
      console.log("You win! Scissors beats Paper");
      return (humanScore += 1);
    } else {
      console.log("It's a tie!");
    }
  }

  playRound(humanSelection, computerSelection);
  playRound(humanSelectionTwo, computerSelectionTwo);
  playRound(humanSelectionThree, computerSelectionThree);
  playRound(humanSelectionFour, computerSelectionFour);
  playRound(humanSelectionFive, computerSelectionFive);

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (humanScore < computerScore) {
    console.log("Game over!");
  } else {
    console.log("It's a tie!");
  }
}

playGame();
