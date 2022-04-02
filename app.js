choices = ["rock","paper","scissors"]
let round
let endResult
let playerScore
let compScore

function game(){
    playerScore =0;
    compScore = 0;
    for (i = 1; i < 6; i++) {
        playRound(i)
        
    }
    declareWinner();           
}


function playRound(round) {
    round
    playerScore == 0;
    compScore == 0;
    playerSelection = playerChoice();
    computerSelection = computerChoice();
    winner = checkRoundWinner(playerSelection,computerSelection);
    logRound(playerSelection,computerSelection,winner,round,playerScore,compScore)
    

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

function checkRoundWinner(choicePlayer,choiceComputer) {
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
function logRound(playerSelection,computerSelection,winner,round,playerScore,compScore) {
    console.log("Round:",round)
    console.log("Player:",playerSelection);
    console.log("Computer:",computerSelection);
    console.log("Winner:",winner);
    console.log("Score:",playerScore,compScore);
    console.log("----------------------------")
}
function declareWinner() {
    endResult = showWinner(playerScore,compScore);
    console.log(endResult)
}