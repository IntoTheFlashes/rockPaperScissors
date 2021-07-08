// Define global variables
let computerChoice = "computerChoice ERROR";
let winStateNumber = 0;
let winStatePlayerWin = "you win this round";
let winStateComputerWin = "the computer wins this round";
let winStateDraw = "it's a draw";
let toBePrinted = "";
let round = 0;
let score = 0;


// Main code starts

function playerFunction(playerChoice) {
    document.getElementById('playthroughText').innerHTML = "";
    computerPlay();
    checkWin(playerChoice, computerChoice)
} 

let rockSelect = function() {
    playerFunction("rock");
}

let paperSelect = function() {
    playerFunction("paper");
}

let scissorsSelect = function() {
    playerFunction("scissors");
}

// Player clicks button, selecting rock, paper, or scissors
// which causes the playerFunction to activate.
document.getElementById("rock").addEventListener("click", rockSelect);
document.getElementById("paper").addEventListener("click", paperSelect);
document.getElementById("scissors").addEventListener("click", scissorsSelect);

// Computer randomly chooses rock, paper, or scissors
function computerPlay () {
    let rpsArray = ["rock", "paper", "scissors"]
    let randNumber = Math.floor(Math.random()*3);
    return computerChoice = rpsArray[randNumber];
}


// Determines whether player or computer wins
function checkWin(playerChoice, computerChoice) {
    if (playerChoice == "rock") {
        switch (computerChoice) {
            case "rock":
                winStateNumber = 0;
                printPlaythrough(playerChoice, computerChoice, winStateDraw);
                break;
            
            case "paper":
                winStateNumber = -1;
                printPlaythrough(playerChoice, computerChoice, winStateComputerWin);
                break;

            case "scissors":
                winStateNumber = 1;
                printPlaythrough(playerChoice, computerChoice, winStatePlayerWin);
                break;
        }
    }
    else if (playerChoice == "paper") {
        switch (computerChoice) {
            case "rock":
                winStateNumber = 1;
                printPlaythrough(playerChoice, computerChoice, winStatePlayerWin);
                break;
            
            case "paper":
                winStateNumber = 0;
                printPlaythrough(playerChoice, computerChoice, winStateDraw);
                break;

            case "scissors":
                winStateNumber = -1;
                printPlaythrough(playerChoice, computerChoice, winStateComputerWin);
                break;
        }
    }
    else if (playerChoice == "scissors") {
        switch (computerChoice) {
            case "rock":
                winStateNumber = -1;
                printPlaythrough(playerChoice, computerChoice, winStateComputerWin);
                break;
            
            case "paper":
                winStateNumber = 1;
                printPlaythrough(playerChoice, computerChoice, winStatePlayerWin);
                break;

            case "scissors":
                winStateNumber = 0;
                printPlaythrough(playerChoice, computerChoice, winStateDraw);
                break;
        }
    }
    else {
        winStateNumber = "winState ERROR";
    }
}


// Form the phrase to be printed 
function printPlaythrough(playerChoice, computerChoice, winStateText) {
    toBePrinted = `you chose ${playerChoice}
    the computer played ${computerChoice}
    ${winStateText}`
    printSlow();
    endRound();
    
    return
}

// edit the compound score, increment the round number
function endRound() {
    score = score + winStateNumber;
    let winningPlayer = "";
    if (score > 0){
            winningPlayer = "you are winning"};
    if (score < 0){
            winningPlayer = "the computer is winning"};
    if (score === 0){
            winningPlayer = "it's too close to call"};
    round ++;
    document.getElementById('scoreText').innerHTML = 
                `score: ${score} ${"<br>"} round:  ${round} ${"<br>"} ${winningPlayer}`;
    return;
}


let speed = 50;
let charactersPrinted = 0;
function printSlow() {
    if (charactersPrinted < toBePrinted.length) {
        document.getElementById('playthroughText').innerHTML += 
                toBePrinted.charAt(charactersPrinted);
        charactersPrinted++;
        setTimeout(printSlow, speed);
    }
    else {
        charactersPrinted = 0;
        return;
    }
} 