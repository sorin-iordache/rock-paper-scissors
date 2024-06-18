const choices = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(choices) {
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  while (true) {
    let playerChoice = prompt(
      "Please enter rock, paper, or scissors"
    ).toLowerCase();

    if (
      choices.includes(
        playerChoice.charAt(0).toUpperCase() +
          playerChoice.slice(1).toLowerCase()
      )
    ) {
      return (
        playerChoice.charAt(0).toUpperCase() +
        playerChoice.slice(1).toLowerCase()
      );
    } else {
      alert("Invalid choice. Please enter rock, paper, or scissors.");
    }
  }
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice.toLowerCase()) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice(choices);
playRound(humanChoice, computerChoice);

console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
