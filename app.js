choices = ["rock","paper","scissors"]
let round
let roundResult
let playerScore = 0;
let compScore = 0;
let playerRoundWins = 0;
let compRoundWins = 0;
let fiveRoundResult

function game(){
    playerScore = 0;
    compScore = 0;
    for (i = 1; i < 6; i++) {
        playRound(i)
        
    }
    declareRoundWinner();
    countRoundWins();           
}


function playRound(round) {
    round
    playerScore == 0;
    compScore == 0;
    playerSelection = playerChoice();
    computerSelection = computerChoice();
    winner = checkRoundWinner(playerSelection,computerSelection);
    logRound(playerSelection,computerSelection,winner,round,playerScore,compScore);

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

function logRound(playerSelection,computerSelection,winner,round,playerScore,compScore) {
    console.log("Round:",round)
    console.log("Player:",playerSelection);
    console.log("Computer:",computerSelection);
    console.log("Winner:",winner);
    console.log("Score:",playerScore,compScore);
    console.log("----------------------------")
}
function declareRoundWinner() {
    roundResult = showWinner(playerScore,compScore);
    console.log(roundResult);
}
function showWinner (result1,result2) {
    result1;
    result2;
   
   if (result1> result2) {
       roundResult = "player";
       return`You win ${result1} to ${result2}.`;  
       
   }
   else if (result2 > result1) {
       roundResult = "computer";
       
       return `You lose ${result2} to ${result1} .`
       
   }
   else {
       return `It's a tie ${result1} to ${result2}.`
   }
}

function countRoundWins () {
    if (fiveRoundResult === "player")  {
        playerRoundWins++
        console.log("Player Wins:", playerRoundWins,"Computer wins:",compRoundWins)
        console.log("----------------------------")
    }
    else if( fiveRoundResult === "computer") {
        compRoundWins++
        console.log("Player Wins:", playerRoundWins,"Computer wins:",compRoundWins)
        console.log("----------------------------")
    }
    else {
        console.log("Player Wins:", playerRoundWins,"Computer wins:",compRoundWins)
        console.log("----------------------------")
    }

}