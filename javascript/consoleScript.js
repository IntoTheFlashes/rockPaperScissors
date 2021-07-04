// Console version (for the sake of fulfilling Odin's spec)

// Declare global variables
let computerChoice = "computerChoice ERROR";
let playerChoice = "playerChoice ERROR";
let winState = 0;
let winStatePlayerWin = "You win this round.";
let winStateComputerWin = "The computer wins this round.";
let winStateDraw = "It's a draw.";


// Player chooses rock, paper, or scissors. 
// Triggers the game function,
// triggers the computer to choose,
// triggers the checkWin function
// to see who wins the round.
function game() {
    // set default score
    let score = 0;
    for (let round = 0; round < 5; round++) {
        // ask for player to give rock, paper, or scissors for this round
        playerChoice = prompt("Please enter rock, paper, or scissors.").toLowerCase();
        if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors"){
            score = 10;
            break;
        }

        else {
            // ask for computer's choice this round
            computerPlay(); 
            // check who won this round
            checkWin(playerChoice, computerChoice);
            // alter the score based on who won
            score = score + winState;
        }
    }
    if (score == 10) {
        console.log("Invalid value entered. Cancelling match.")
    }

    else if (score < 1) {
        console.log("Oof. You lost the match to a machine.")
    }
    else if (score > 1) {
        console.log("You win the match~")
    }
    else if (score == 0) {
        console.log("It's a draw overall. \n You're equally as skilled as a computer picking randomly.")
    }
}

// Computer randomly chooses rock, paper, or scissors
function computerPlay () {
    // select value from 1 to 3
    let randNumber = Math.ceil(Math.random()*3);
    // each value has a corresponding string of rock, paper, or scissors
    // this determines what the computer plays this round
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
    else {
        winState = "winState ERROR";
    }
}

    
// Print the actions to console
function printPlaythrough(playerChoice, computerChoice, roundWinState) {
    console.log("Player chose " + playerChoice);
    console.log("The computer played " + computerChoice);
    console.log(roundWinState);
    return
}