const choices = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(choices) {
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

console.log(getComputerChoice(choices));

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

console.log(getHumanChoice());
