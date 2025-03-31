
//tells the computer all possible choices
const choices = ['rock', 'paper', 'scissors', 'coffeemaker','inspiringcatposter'];
//names all the id's for mycode
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const resetButton = document.getElementById("Reset");
//starts the score at 0
let playerScore = 0;
let computerScore = 0;
//all elemnts of the game are wrapped in here
function playGame(playerChoice) {
//tells the computer how many choices there are and lets the result be show in text
  const computerChoice = choices[Math.floor(Math.random() * 5)];
  let result = "";
//compares the computer choice to the player choice and decides who wins/loses also if it ends in a tie
  if(playerChoice === computerChoice) {
    result = "IT'S A TIE";
  }
  else{
    switch(playerChoice){
      case "rock":
        result = (computerChoice === "scissors" || computerChoice === "inspiringcatposter") ? "You Win" : "You Lose";
        break;
      case "paper":
        result = (computerChoice === "rock" || computerChoice === "inspiringcatposter") ? "You Win" : "You Lose";
        break;
      case "scissors":
        result = (computerChoice === "paper" || computerChoice === "coffeemaker") ? "You Win" : "You Lose";
        break;
        case "coffeemaker":
        result = (computerChoice === "paper" || computerChoice === "scissors") ? "You Win" : "You Lose";
        break;
      case "inspiringcatposter":
        result = (computerChoice === "rock" || computerChoice === "coffeemaker") ? "You Win" : "You Lose";
        break;
    }
  }
//displays the you win/lose text depending on the outcomes
  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");
//improves the score of both the computer and the player by 1 if they win, also adds color to the scores and you win/lose text
  switch(result){
    case "You Win":
        resultDisplay.classList.add("greenText");
        playerScore++
        playerScoreDisplay.textContent = playerScore;
        break;
    case "You Lose":
        resultDisplay.classList.add("redText");
        computerScore++
        computerScoreDisplay.textContent = computerScore;  
        break;
  }
  //my reset function to restart the game at 0 
  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
  }
  resetButton.addEventListener("click", resetGame)
}