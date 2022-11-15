//Button code below//
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection)
})

paperButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'paper'
    playRound(playerSelection, computerSelection)
})

scissorsButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'scissors'
    playRound(playerSelection, computerSelection)
})

//Game functions below//
const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * 3)];
    return choice;
}

//Math.random can return random number between 0 and 1//
//Math.floor is used to round up to nearest integer, since we have 3 options it is needed//

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        const p = document.createElement('p')
        p.innerText = "You tied! You both picked ${playerSelection}"
        outcome.Div.appendChild(p)
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors")(
            p.innerText = "You won! Rock beats scissors",
            outcome.Div.appendChild(p))
            
    
    || (playerSelection == "scissors" && computerSelection == "paper")(
        p.innerText = "You won! Scissors beats paper",
        outcome.Div.appendChild(p))

    || (playerSelection == "paper" && computerSelection == "rock")(
        p.innerText = "You won! Paper beats rock",
        outcome.Div.appendChild(p))
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
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
   else{
    return `You lose! ${playerSelection} beats ${computerSelection}`
   }
}


// validated input and array sused to ensure user is entering correct terms (rock, paper, or scissors) and will accept those terms even if capitalized. //
//function getPlayerChoice(){
       // let validatedInput = false;
      //  while(validatedInput == false){
      //      const choice = prompt("Rock, paper, or scissors?");
     //       if(choice == null){
      //          continue;
        //    }
       //     const choiceInLower = choice.toLowerCase();
       //     if(options.includes(choiceInLower)){
       ////         validatedInput = true;
      //          return choiceInLower;
     //       }
      //  }
  //  }

function game(){
    let playerScore = 0;
    let computerScore = 0;
    console.log("Welcome!")
    for (let i = 0; i < 5; i++) {//
      const playerSelection = getPlayerChoice();
     const computerSelection = getComputerChoice();
       console.log(playRound(playerSelection, computerSelection));
        if(checkWinner(playerSelection,computerSelection) == "Player"){
           playerScore++;
       }
        else if(checkWinner(playerSelection,computerSelection) == "Computer"){
           computerScore++;
       }
    }
}
 //   console.log("Game over!")
 //   if(playerScore > computerScore){
 //       console.log("Player was the winner")
 //   }
  //  else if(playerScore < computerScore){
  //      console.log("Computer was the winner")
  //  }
   // else{
  //      console.log("We have a tie!")
// game function will ask player for choice, return the computer choice, then determine who wins. It will loop for 5 rounds. //
game();