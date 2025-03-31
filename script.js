
//tells the computer all possible choices
const choices = ['rock', 'paper', 'scissors', 'coffeemaker','inspiringcatposter'];
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const resetButton = document.getElementById("Reset");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {

  const computerChoice = choices[Math.floor(Math.random() * 5)];
  let result = "";

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

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");

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
  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
  }
  resetButton.addEventListener("click", resetGame)
}