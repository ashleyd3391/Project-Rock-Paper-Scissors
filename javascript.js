const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * 3)]
    console.log(choice)
}

//Math.random can return random number between 0 and 1//
//Math.floor is used to round up to nearest integer, since we have 3 options it is needed//

function checkWinner(playerSelection, computerSelection){
    if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else{
        return "Computer"
    }
 }

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "It's a tie";
    }
    if(result == "Player"){
        return "You win!"
    }
    if(result == "Computer"){
        return "You lose!"
    }
}

function getPlayerChoice(){
        const choice = prompt("Rock, paper, or scissors?");
        
        }

function game(){
    console.log("Welcome!")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game()