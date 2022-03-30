function computerPlay() {
    let choice = Math.random() * 3;
    if (choice <= 1) {
    return (choice = "rock");
    } else if (choice <= 2) {
    return (choice = "paper");
    } else {
    return (choice = "scissors");
    }
}
let computerSelection
computerSelection = computerPlay()
console.log(computerSelection)