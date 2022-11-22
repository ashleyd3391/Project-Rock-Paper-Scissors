const options = ["rock", "paper", "scissors"];
const rockBtn = document.querySelector("#rockButton");
const paperBtn = document.querySelector("#paperButton");
const scissorsBtn = document.querySelector("#scissorsButton");
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
let playerScore = 1;
let computerScore = 1;
 
    
rockBtn.addEventListener("click", () => {
    document.getElementById("playerText")
    .innerHTML = "Player:" + " " + rockBtn.textContent;
        computerSelection = getComputerChoice(),
        playerSelection = rockBtn.textContent,
        document.getElementById("computerText")
        .innerHTML = "Computer:" + " " + `${computerSelection}`,
    document.getElementById("resultText")
    .innerHTML = "Result:" + " " + playRound(playerSelection, computerSelection)
    
    }

)

paperBtn.addEventListener("click", () => {
    document.getElementById("playerText")
    .innerHTML = "Player:" + " " + paperBtn.textContent;
        computerSelection = getComputerChoice(),
        playerSelection = paperBtn.textContent,
        document.getElementById("computerText")
        .innerHTML = "Computer:" + " " + `${computerSelection}`,
    document.getElementById("resultText")
    .innerHTML = "Result:" + " " + playRound(playerSelection, computerSelection)
        
})

scissorsBtn.addEventListener("click", () => {
    document.getElementById("playerText")
    .innerHTML = "Player:" + " " + scissorsBtn.textContent;
        computerSelection = getComputerChoice(),
        playerSelection = scissorsBtn.textContent,
        document.getElementById("computerText")
        .innerHTML = "Computer:" + " " + `${computerSelection}`,
    document.getElementById("resultText")
    .innerHTML = "Result:" + " " + playRound(playerSelection, computerSelection)
        
})

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

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i = 5; i++) {
        if(playerScore > computerScore){
        console.log("Player was the winner!")
    }
 
    else if(playerScore < computerScore){
        console.log("Computer was the winner")
    }
    else{
        console.log("We have a tie!")
    }
}}