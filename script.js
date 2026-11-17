// Primero tengo que hacer un numero random, del cual este mismo se va a utilizar para
// escoger piedra papel o tijeras con un condicional
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

// Luego tengo que hacer una función que reciba la decisión del jugador humano y la retorne
function getHumanChoice() {
  let humanChoice = prompt("Rock, paper or scissors?");
  if (humanChoice === "rock") {
    return "rock";
  } else if (humanChoice === "paper") {
    return "paper";
  } else if (humanChoice === "scissors") {
    return "scissors";
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  console.log(humanChoice);
  console.log(computerChoice);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
