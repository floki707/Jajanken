// first function converts computerChoice variable into computerText---
function computerRound(computerChoice){
    let computerChoiceText;
    if(computerChoice === 0) {
     computerChoiceText = "Rock";
    }
    else if(computerChoice === 1){
     computerChoiceText = "Paper";
    }
    else {
     computerChoiceText = "Scissors";
    }
    return computerChoiceText.toLowerCase();
}

//function to compare choices for each round---
function compare(computerText, playerChoice){
    if(computerText === playerChoice){
        return "Es un empate!";
    }
    if(
        (playerChoice === "rock" && computerText === "scissors" ) || 
        (playerChoice === "paper" && computerText === "rock") ||
        (playerChoice === "scissors" && computerText === "paper")
    ){
    return "Genial Ganaste!";}
    else{
        return "Lo siento Perdiste!";
    }
}

function game() {
    // A loop to run exactly 5 rounds
   for (let round = 1; round <= 5; round++) {
        
        // 2. Safely handle the prompt inside the loop
        const rawPlayerChoice = prompt("Rock, Paper, Scissors GO!");
        
        // If user clicks cancel or inputs nothing, skip this round safely
        if (!rawPlayerChoice) {
            console.log("no input SKIPED ROUND.");
            continue; 
        }
        let playerChoice = rawPlayerChoice.toLowerCase();
       
const computerChoice = Math.floor(Math.random() * 3);
const computerText = computerRound(computerChoice);
console.log("Tu elegiste: " + playerChoice);
console.log("La computadora eligio: " + computerText);
console.log(compare(computerText, playerChoice));
}
}