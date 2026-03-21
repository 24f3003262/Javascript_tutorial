// ROCK PAPER SCISSORS

const choices = ['rock', 'paper', 'scissors'];
const playerDisplay=document.getElementById('playerDisplay');
const computerDisplay=document.getElementById('computerDisplay');
const resultDisplay=document.getElementById('resultDisplay');
const playerScore=document.getElementById('playerScore');
const computerScore=document.getElementById('computerScore');

let scorePlayer=0;
let scoreComputer=0;


function playGame(playerChoice){
    const computerChoice=choices[Math.floor(Math.random()*3)];
    let result = "";
    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice==="scissors") ? "YOU WIN!" : "YOU LOSE!";
                break
            case "paper":
                result = (computerChoice==="rock") ? "YOU WIN!" : "YOU LOSE!";
                break
            case "scissors":
                result = (computerChoice==="paper") ? "YOU WIN!" : "YOU LOSE!";
            
        }
    }
    playerDisplay.textContent = `PLAYER : ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER : ${computerChoice}`;
    resultDisplay.textContent = `RESULT : ${result}`;

    resultDisplay.classList.remove('greenText', 'redText', 'yellowText');
    
    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add('greenText');
            scorePlayer++;
            playerScore.textContent = `${scorePlayer}`;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add('redText');
            scoreComputer++;
            computerScore.textContent = `${scoreComputer}`;
            break;
        case "IT'S A TIE!":
            resultDisplay.classList.add('yellowText');
            break;
        default:
            resultDisplay.style.color = "black";
            break;
    }
}
