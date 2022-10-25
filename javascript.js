const options = ["rock", "paper" , "scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)]
    console.log(choice);
}

//Math.random can return random number between 0 and 1//
//Math.floor is used to round up to nearest integer, since we have 3 options it is needed//

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "It's a tie";
    }

    else if(
        (result == "")
    )
}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }

    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
 
 }

getComputerChoice();

