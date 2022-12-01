const options = ["charm", "cordial", "curse"];
const rockBtn = document.querySelector("#rockButton");
const paperBtn = document.querySelector("#paperButton");
const scissorsBtn = document.querySelector("#scissorsButton");
const buttons = document.querySelectorAll("#button");
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
let playerScore = 1;
let computerScore = 1;

window.addEventListener("click", () => {
    document.getElementById("music").play();
});

rockBtn.addEventListener("click", rockEvent);
paperBtn.addEventListener("click", paperEvent);
scissorsBtn.addEventListener("click", scissorsEvent);



function rockEvent(){
    document.getElementById("playerText")
    .innerHTML = "Player:" + " " + "charm";
        computerSelection = getComputerChoice(),
        playerSelection = "charm"
        document.getElementById("computerText")
        .innerHTML = "Witch:" + " " + `${computerSelection}`,
    document.getElementById("resultText")
    .innerHTML = "Result:" + " " + playRound(playerSelection, computerSelection);
    restartGame();


}

function paperEvent(){
    document.getElementById("playerText")
    .innerHTML = "Player:" + " " + "cordial";
        computerSelection = getComputerChoice(),
        playerSelection = "cordial"
        document.getElementById("computerText")
        .innerHTML = "Witch:" + " " + `${computerSelection}`,
    document.getElementById("resultText")
    .innerHTML = "Result:" + " " + playRound(playerSelection, computerSelection);
    restartGame();
}

    
function scissorsEvent(){
    document.getElementById("playerText")
    .innerHTML = "Player:" + " " + "curse";
        computerSelection = getComputerChoice(),
        playerSelection = "curse"
        document.getElementById("computerText")
        .innerHTML = "Witch:" + " " + `${computerSelection}`,
    document.getElementById("resultText")
    .innerHTML = "Result:" + " " + playRound(playerSelection, computerSelection);
    restartGame();
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
        (playerSelection == "charm" && computerSelection == "curse") ||
        (playerSelection == "curse" && computerSelection == "cordial") ||
        (playerSelection == "cordial" && computerSelection == "charm")
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
    .innerHTML = "Witch Score:" + " " + `${computerScore}`
    computerScore++
    return `You lose! ${computerSelection} beats ${playerSelection}`
   }
}



function newGame(){

            
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
            document.querySelector(".playAgainBtn").style.display = "none";
            let playerScore = 1;
            let computerScore = 1;
            location.reload();
        
        }

function restartGame(){
    if (playerScore === 6) {
        disableButtons();
        winner();
        const playAgainBtn = document.createElement("button");
        playAgainBtn.innerText = "Click here to play again!";
        playAgainBtn.className = "playAgainBtn";
        "New Button"
        document.body.appendChild(playAgainBtn);
        playAgainBtn.addEventListener("click", newGame);
    
        
    }    
    else if (computerScore === 6) {
        disableButtons();
        loser();
        const playAgainBtn = document.createElement("button");
        playAgainBtn.innerText = "Click here to play again!";
        playAgainBtn.className = "playAgainBtn";
        "New Button"
        document.body.appendChild(playAgainBtn);
        playAgainBtn.addEventListener("click", newGame);
      
    }
}


function disableButtons(){
        document.getElementById("rockButton").removeEventListener("click", rockEvent);
        document.getElementById("paperButton").removeEventListener("click", paperEvent);
        document.getElementById("scissorsButton").removeEventListener("click", scissorsEvent);
}

function winner(){
    document.getElementById("resultText")
    .innerHTML = "Result:" + " " + "You saved the kingdom! You're their hero and they spoil you with riches. Great job!"
}

function loser(){
    document.getElementById("resultText")
    .innerHTML = "Result:" + " " + "Oh no! The kingdom was destroyed and everyone hates you. Bummer."
}