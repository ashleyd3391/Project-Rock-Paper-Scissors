const options = ["rock", "paper", "scissors"];
const rockBtn = document.querySelector("#rockButton");
const paperBtn = document.querySelector("#paperButton");
const scissorsBtn = document.querySelector("#scissorsButton");
const buttons = document.querySelectorAll("#button");
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
let playerScore = 1;
let computerScore = 1;



rockBtn.addEventListener("click", rockEvent);

function playAgainEvent(){
    resetScore();
    rockBtn.addEventListener("click", rockEvent)
    document.getElementById("playerScore")
    .innerHTML = "Player Score: 0"
    document.getElementById("computerScore")
    .innerHTML = "Computer Score: 0"
    document.getElementById("playerText")
    .innerHTML = "Player: "
    document.getElementById("computerText")
    .innerHTML = "Computer: "
    document.getElementById("resultText")
    .innerHTML = "Result: "
    playAgainBtn.remove("button");
}

function rockEvent(){
    document.getElementById("playerText")
    .innerHTML = "Player:" + " " + "rock";
        computerSelection = getComputerChoice(),
        playerSelection = "rock"
        document.getElementById("computerText")
        .innerHTML = "Computer:" + " " + `${computerSelection}`,
    document.getElementById("resultText")
    .innerHTML = "Result:" + " " + playRound(playerSelection, computerSelection);

    if (playerScore === 6) {
        document.getElementById("rockButton").removeEventListener("click", rockEvent);
        const playAgainBtn = document.createElement("button");
        playAgainBtn.innerText = "Click here to play again!";
        playAgainBtn.className = "playAgainBtn";
        "New Button"
        document.body.appendChild(playAgainBtn);
        playAgainBtn.addEventListener("click", playAgainEvent);
        document.getElementById("resultText")
        .innerHTML = "Result:" + " " + "You won all 5 rounds! Great job!"
        
    }    
    else if (computerScore === 6) {
        document.getElementById("rockButton").removeEventListener("click", rockEvent);
        const playAgainBtn = document.createElement("button");
        playAgainBtn.innerText = "Click here to play again!";
        playAgainBtn.className = "playAgainBtn";
        "New Button"
        document.body.appendChild(playAgainBtn);
        playAgainBtn.addEventListener("click", playAgainEvent);
        document.getElementById("resultText")
        .innerHTML = "Result:" + " " + "You won all 5 rounds! Great job!"
    }
   
}

function paperEvent(){
    document.getElementById("playerText")
    .innerHTML = "Player:" + " " + "rock";
        computerSelection = getComputerChoice(),
        playerSelection = "paper"
        document.getElementById("computerText")
        .innerHTML = "Computer:" + " " + `${computerSelection}`,
    document.getElementById("resultText")
    .innerHTML = "Result:" + " " + playRound(playerSelection, computerSelection);
    gameOver();
}
    
function scissorsEvent(){
    document.getElementById("playerText")
    .innerHTML = "Player:" + " " + "rock";
        computerSelection = getComputerChoice(),
        playerSelection = "scissors"
        document.getElementById("computerText")
        .innerHTML = "Computer:" + " " + `${computerSelection}`,
    document.getElementById("resultText")
    .innerHTML = "Result:" + " " + playRound(playerSelection, computerSelection);
    gameOver();
}




function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * 3)];
    return choice;
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

 checkWinner();

 function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);

    if(result == "Tie"){
        return "It's a tie!"
    }
    else if(result == "Player"){
        document.getElementById("playerScore")
        .innerHTML = "Player Score:" + " " +  `${playerScore}`
        playerScore++
        return `You win! ${playerSelection} beats ${computerSelection}`
        
    }
   else{
    document.getElementById("computerScore")
    .innerHTML = "Computer Score:" + " " + `${computerScore}`
    computerScore++
    return `You lose! ${computerSelection} beats ${playerSelection}`
   }
}


function restartGame(){

        const playAgainBtn = document.createElement("button");
        playAgainBtn.innerText = "Click here to play again!";
        playAgainBtn.className = "playAgainBtn";
        "New Button"
        document.body.appendChild(playAgainBtn);

}
