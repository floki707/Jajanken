// first function converts computerChoice variable into computerText---
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

function game() {
  let playerScore = 0;
  let computerScore = 0;

  // A loop to run exactly 5 rounds
  for (let round = 1; round <= 5; round++) {
    // Safely handle the prompt inside the loop
    const initialPlayerChoice = prompt("Rock, Paper, Scissors GO!");

    // If user clicks cancel or inputs nothing, skip this round safely
    if (!initialPlayerChoice) {
      console.log("no input SKIPED ROUND.");
      continue;
    }

    let playerChoice = initialPlayerChoice.toLowerCase();
    const computerChoice = Math.floor(Math.random() * 3);
    const computerText = computerRound(computerChoice);
    console.log("Your Choice: " + playerChoice);
    console.log("The computer's choice: " + computerText);
    console.log(compare(computerText, playerChoice));
    console.log("End of Round: " + round);
    const result = compare(computerText, playerChoice);

//If user wins playerscore+1, if computer wins computerscore+1, no points if tie.
    if(result === "WIN!"){
      playerScore++;
      console.log("great You WON the round");}

      else if(result === "LOOSE!"){
        computerScore++;
        console.log("Sorry you LOST!");}
        else{
          console.log("Tie No points!")
        }
        console.log(`Your Score:  ${playerScore} --- Computer Score:  ${computerScore}`);
        console.log("===================================");   
  }
  console.log("============GAME-OVER==============");
  console.log("FINAL SCORE:");
  console.log(`Your Score: ${playerScore} ----- Computer Score: ${computerScore}`);

  if(playerScore > computerScore){
    console.log("YOU WON THE GAME");
  }
  else if(playerScore < computerScore){
    console.log("COMPUTER WON THE GAME");
  }
  else{
    console.log("ITS A TIE");
  }
}
game();