let playerScore = 0;
let computerScore = 0;

const roundResultUi = document.querySelector("#round-result");
const runningScoreUi = document.querySelector("#running-score");
const finalScoreUi = document.querySelector("#final-score");

function computerRound(computerChoice) {
  let computerChoiceText;
  if (computerChoice === 0) {
    computerChoiceText = "Rock";
  } else if (computerChoice === 1) {
    computerChoiceText = "Paper";
  } else {
    computerChoiceText = "Scissors";
  }
  return computerChoiceText.toLowerCase();
}

//function to compare choices for each round---
function compare(computerText, playerChoice) {
  if (computerText === playerChoice) {
    return "TIE!";
  }
  if (
    (playerChoice === "rock" && computerText === "scissors") ||
    (playerChoice === "paper" && computerText === "rock") ||
    (playerChoice === "scissors" && computerText === "paper")
  ) {
    return "WIN!";
  } else {
    return "LOOSE!";
  }
}

function playRound(playerChoice) {
  if(playerScore === 5 || computerScore ===5) return;

  const computerChoice = Math.floor(Math.random() * 3);
  const computerText = computerRound(computerChoice);
  const result = compare(computerText, playerChoice);
  console.log(result);

  //If user wins playerscore+1, if computer wins computerscore+1, no points if tie.
  if (result === "WIN!") {
    playerScore++;
    roundResultUi.textContent = `you won the round you choose ${playerChoice} y la computadora eligió ${computerText}.`;
  } else if (result === "LOOSE!") {
    computerScore++;
    roundResultUi.textContent = `you lost the round you choose ${playerChoice} y la computadora eligió ${computerText}.`;
  } else {
    roundResultUi.textContent = `¡Empate! Ambos eligieron ${playerChoice}.`;
  }
  runningScoreUi.textContent = `Your Score: ${playerScore} ______ Computer Score: ${computerScore}`;

  if(playerScore ===5){
    finalScoreUi.textContent= "You won the game!"
  }
  else if (computerScore=== 5){
    finalScoreUi.textContent= "Sorry The computer won the game :("
  }
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
  playRound("rock");
});

paperBtn.addEventListener("click", () => {
  playRound("paper");
});

scissorsBtn.addEventListener("click", () => {
  playRound("scissors");
});
