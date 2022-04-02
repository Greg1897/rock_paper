choices = ["rock","paper","scissors"]
let endResult
let playerScore
let compScore
game()
function game(){
    playerScore =0;
    compScore = 0;
    for (i = 0; i < 5; i++) {
        playRound()
        
    }
    endResult = showWinner(playerScore,compScore);
    console.log("Game Result:",endResult); 
         
}


function playRound() {
    playerScore == 0;
    compScore == 0;
    playerSelection = playerChoice();
    console.log("Player: ",playerSelection);
    computerSelection = computerChoice();
    console.log("Computer:",computerSelection);
    winner = checkWinner(playerSelection,computerSelection);
    console.log("Winner:",winner)
    

}

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function playerChoice() {
    let input = prompt ("Type Rock, Paper or Scissors");
    while (input === null) {
        input = prompt ("Type Rock, Paper or Scissors");
        input  = input.toLowerCase();
    }
    input = input.toLowerCase();
    while ((input !== "rock") && (input !== "paper") && (input !== "scissors")) {
        input = prompt ("Type Rock, Paper or Scissors. Correct spelling is importand");
    }
    
    return input
}

function checkWinner(choicePlayer,choiceComputer) {
    if (choicePlayer === choiceComputer) {
        return "tie";
    }
    else if 
    ((choicePlayer === "rock") && (choiceComputer === "scissors") || 
    (choicePlayer === "paper") && (choiceComputer === "rock")|| 
    (choicePlayer === "scissors") && (choiceComputer === "paper")) {
        playerScore++;
        return "player";
    }
    else {
        compScore++;
        return "computer";
    }
}

function showWinner (result1,result2) {
     result1;
     result2;
    
    if (result1> result2) {
        return  `You win ${result1} to ${result2} !!!`;
        
    }
    else if (result2 > result1) {
        return `You lose ${result2} to ${result1} .`
        
    }

}
