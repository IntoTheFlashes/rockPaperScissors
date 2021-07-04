// Define global variables
let computerChoice = "ERROR";
let playerChoice = "ERROR";
let winState = 0;
let winStatePlayerWin = "You win this round.";
let winStateComputerWin = "The computer wins this round.";
let winStateDraw = "It's a draw.";

let round = 0;
let score = 0;


// Player chooses rock, paper, or scissors. 
// Triggers the computer to choose,
// which triggers the checkWin function
// to see who wins the round.

// Player can choose rock
document.getElementById("rock").addEventListener("click", rockFunction);

function rockFunction() {
    playerChoice = "rock";
    computerPlay();
    checkWin(playerChoice, computerChoice)
} 

// Player can choose paper
document.getElementById("paper").addEventListener("click", paperFunction);

function paperFunction() {
    playerChoice = "paper";
    computerPlay();
    checkWin(playerChoice, computerChoice);
} 

// Player can choose scissors
document.getElementById("scissors").addEventListener("click", scissorsFunction);

function scissorsFunction() {
    playerChoice = "scissors";
    computerPlay();
    checkWin(playerChoice, computerChoice);
} 

// Computer randomly chooses rock, paper, or scissors
function computerPlay () {
let randNumber = Math.ceil(Math.random()*3);
    if (randNumber == 1) {
        return computerChoice = "rock";
    }
    else if (randNumber == 2) {
        return computerChoice =  "paper";
    }
    else if (randNumber == 3) {
        return computerChoice =  "scissors";
    }
    else {
        return
    }
}


// Determines whether player or computer wins
function checkWin(playerChoice, computerChoice) {
    if (playerChoice == "rock") {
        switch (computerChoice) {
            case "rock":
                winState = 0;
                printPlaythrough("rock", "rock", winStateDraw);
                break;
            
            case "paper":
                winState = -1;
                printPlaythrough("rock", "paper", winStateComputerWin);
                break;

            case "scissors":
                winState = 1;
                printPlaythrough("rock", "scissors", winStatePlayerWin);
                break;
        }
    }
    else if (playerChoice == "paper") {
        switch (computerChoice) {
            case "rock":
                winState = 1;
                printPlaythrough("paper", "rock", winStatePlayerWin);
                break;
            
            case "paper":
                winState = 0;
                printPlaythrough("paper", "paper", winStateDraw);
                break;

            case "scissors":
                winState = -1;
                printPlaythrough("paper", "scissors", winStateComputerWin);
                break;
        }
    }
    else if (playerChoice == "scissors") {
        switch (computerChoice) {
            case "rock":
                winState = -1;
                printPlaythrough("scissors", "rock", winStateComputerWin);
                break;
            
            case "paper":
                winState = 1;
                printPlaythrough("scissors", "paper", winStatePlayerWin);
                break;

            case "scissors":
                winState = 0;
                printPlaythrough("scissors", "scissors", winStateDraw);
                break;
        }
    }
}


// Print the actions to console
function printPlaythrough(playerChoice, computerChoice, winState) {
    console.log("Player chose " + playerChoice);
    console.log("The computer played " + computerChoice);
    console.log(winState);
    round += 1;

    document.getElementById('playthroughText').innerHTML = 
    `You chose ${playerChoice}. ${("<br>")}
    The computer played ${computerChoice}. ${("<br>")}
    ${winState}`
    
    return
}