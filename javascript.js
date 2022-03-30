
function computerPlay() {
    let choice = Math.random() * 3;
    
    if (choice <= 1) {
    return (choice = "rock");
    } 
    else if (choice <= 2) {
    return (choice = "paper");
    } 
    else  (choice <=3) ;{
    return (choice = "scissors");
    }
}


function playRound(computerSelection, playerSelection) {
    computerSelection = computerPlay();
    playerSelection = prompt("Rock,Paper,Scissors")
    
    let result

    if (computerSelection === playerSelection) {
        return result = "tie";
    }
    else if ((computerSelection === "rock") && (playerSelection === "paper")) {
        return result = "You win Paper beats Rock";
        console.log(result)
    }
    else if ((computerSelection === "paper") && (playerSelection === "rock")) {
        return result = "You lose Paper beats Rock";
        console.log(result)
    }
    else if ((computerSelection === "rock") && (playerSelection === "scissors")) {
        return result = "You lose Rock beats Paper";
        console.log(result)
    }
    else if ((computerSelection === "scissors") && (playerSelection === "rock")) {
        return result = "You win Rock beats Scissors";
        console.log(result);
    }
    else if  ((computerSelection === "scissors") && (playerSelection === "paper")) {
        return result = "You lose scissors beat paper";
        console.log(result);
    }
    else if ((computerSelection === "paper") && (playerSelection === "scissors")) {
        return result = "You win scissors beat paper";
        console.log(result);
    }
    else {
        return result = " You need to make a choice";
        console.log(result)
    }
    
    
     
}
console.log(playRound())