const choices = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(choices) {
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  let choice = window.prompt("Rock, Paper, or Scissors?:");

  while (!choices.includes(choice)) {
    choice = window.prompt(
      "Invalid input. Please enter Rock, Paper, or Scissors:"
    );
  }

  return choice;
}

console.log(getComputerChoice(choices));
console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
  const humanSelection = humanChoice.toLowerCase();
  const computerSelection = computerChoice.toLowerCase();

  if (humanSelection === computerSelection) {
    console.log("It's a tie!");
    return;
  } else if (
    (humanSelection === "rock" && computerSelection === "scissors") ||
    (humanSelection === "paper" && computerSelection === "rock") ||
    (humanSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(`You win! ${humanSelection} beats ${computerSelection}`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
    computerScore++;
  }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice(choices);

playRound(humanChoice, computerChoice);
console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
