computerSelection = computerPlay();
playerSelection = prompt("Rock,Paper,Scissors").toLowerCase();
cScore = 0;
pScore = 0;
choices = ["rock","paper","scissors"]
game ()
function game () {
    for (i = 0; i<5; i++) {
        playRound(i) 
        console.log(playRound())   
    }
    checkScore()
}

function computerPlay() {
    return choices[Math.floor(Math.random()*choices.length)]
}


function playRound(computerSelection, playerSelection) {
    computerSelection = computerPlay();
    playerSelection = prompt("Rock,Paper,Scissors").toLowerCase();
    cScore = 0;
    pScore = 0;
    

    if (computerSelection === playerSelection) {
        
        console.log("tie");
    }
    else if ((computerSelection === "rock") && (playerSelection === "paper")) {
            
        console.log("You win Paper beats Rock");
        console.log(pScore);
    }
    else if ((computerSelection === "paper") && (playerSelection === "rock")) {
        cScore++;
        console.log("You lose Paper beats Rock");
        console.log(cScore);
    }
    else if ((computerSelection === "rock") && (playerSelection === "scissors")) {
        cScore++;
        console.log("You lose Rock beats Paper");
        console.log(cScore);
    }
    else if ((computerSelection === "scissors") && (playerSelection === "rock")) {
        pScore++;
        console.log("You win Rock beats Scissors");
        console.log(pScore);
    }
    else if  ((computerSelection === "scissors") && (playerSelection === "paper")) {
        cScore++;
        console.log("You lose Rock beats Scissors");
        console.log(cScore);
    }
    else if ((computerSelection === "paper") && (playerSelection === "scissors")) {
        pScore++;
        console.log("You win scissors beat paper");
        console.log(pScore);
    }
    else {
        
        console.log(" You need to make a choice");
    }

    
      
}

function checkScore(pScore,cScore) {
    if (pScore > cScore) {
        alert ("Gongratulations, You win!!")
    }
    else if (cScore > pScore) {
        alert ("You lose")
    }
    else if (pScore === cScore) {
        alert ("Its a tie")
    }

    
}



    





