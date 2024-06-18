let choice = ["Rock", "Paper", "Scissors"];

function getComputerChoice(choice) {
  let randomIndex = Math.floor(Math.random() * choice.length);
  return choice[randomIndex];
}

console.log(getComputerChoice(choice));
