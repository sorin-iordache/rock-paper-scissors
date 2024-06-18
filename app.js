function playGame() {
  const choices = ["rock", "paper", "scissors"];
  let totalRounds = 5;
  let humanScore = 0;
  let computerScore = 0;

  function getComputerChoice(choices) {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function getHumanChoice() {
    let choice = window.prompt("Rock, Paper, or Scissors?");

    choice = choice.toLowerCase();

    while (!choices.includes(choice)) {
      choice = window
        .prompt("Invalid input. Please enter Rock, Paper, or Scissors:")
        .toLowerCase();
    }

    return choice;
  }

  function playRound(humanChoice, computerChoice) {
    const humanSelection = humanChoice.toLowerCase();
    const computerSelection = computerChoice.toLowerCase();

    if (humanSelection === computerSelection) {
      console.log("It's a tie!");
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

  for (let i = 1; i <= totalRounds; i++) {
    console.log(`Round ${i}:`);

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice(choices);

    console.log(`The Computer chose ${computerChoice}`);
    console.log(`The Human chose ${humanChoice}`);

    playRound(humanChoice, computerChoice);

    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    console.log();
  }

  let winner;
  if (humanScore > computerScore) {
    winner = "Human";
  } else if (humanScore < computerScore) {
    winner = "Computer";
  } else {
    winner = "The game ends in a tie!";
  }

  console.log(`Castigatorul este: ${winner}`);
}
playGame();
