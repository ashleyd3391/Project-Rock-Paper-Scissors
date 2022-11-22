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
    .innerHTML = "Result:" + " " + playRound(playerSelection, computerSelection);
    gameOver();
})

paperBtn.addEventListener("click", () => {
    document.getElementById("playerText")
    .innerHTML = "Player:" + " " + paperBtn.textContent;
        computerSelection = getComputerChoice(),
        playerSelection = paperBtn.textContent,
        document.getElementById("computerText")
        .innerHTML = "Computer:" + " " + `${computerSelection}`,
    document.getElementById("resultText")
    .innerHTML = "Result:" + " " + playRound(playerSelection, computerSelection);
    gameOver();
})

scissorsBtn.addEventListener("click", () => {
    document.getElementById("playerText")
    .innerHTML = "Player:" + " " + scissorsBtn.textContent;
        computerSelection = getComputerChoice(),
        playerSelection = scissorsBtn.textContent,
        document.getElementById("computerText")
        .innerHTML = "Computer:" + " " + `${computerSelection}`,
    document.getElementById("resultText")
    .innerHTML = "Result:" + " " + playRound(playerSelection, computerSelection);
    gameOver();
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

function resetGame() {
  document.getElementById("playerScore")
  .innerHTML = "Player Score: 0"
  document.getElementById("computerScore")
  .innerHTML = "Computer Score: 0"
}

function gameOver(){
    if (playerScore === 6) {
        document.getElementById("resultText")
        .innerHTML = "Result:" + " " + "You won all 5 rounds! Great job! Refresh the page to play again!"
        rockBtn.setAttribute("disabled", true)
        paperBtn.setAttribute("disabled", true)
        scissorsBtn.setAttribute("disabled", true)
    }    
    else if (computerScore === 6) {
            document.getElementById("resultText")
            .innerHTML = "Result:" + " " + "Computer won all 5 rounds! Better luck next time! Refresh the page to play again!"
            rockBtn.setAttribute("disabled", true)
            paperBtn.setAttribute("disabled", true)
            scissorsBtn.setAttribute("disabled", true)
    }

    resetGame();

};

