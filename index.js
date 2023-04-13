function getComputerChoice() {
    let compChoice = Math.floor(Math.random()*3) + 1;
    switch (compChoice) {
        case 1: compChoice = 'rock';
                break;
        case 2: compChoice = 'paper';
                break;
        case 3: compChoice = 'scissors';
                break;
    }
    return compChoice;
}

let playerSelection;
let computerSelection;

function playRound() {
    playerSelection = prompt('Please enter your choice.');
    computerSelection = getComputerChoice();
    console.log("You chose " + playerSelection + ". The computer chose " + computerSelection + ".");
    switch(playerSelection) {
        case 'rock': 
                if (computerSelection.toLowerCase() === 'paper') {
                        return computerSelection;
                }
                else if (computerSelection.toLowerCase() === 'scissors') {
                        return playerSelection;
                }
                break;
        case 'paper':
                if (computerSelection.toLowerCase() === 'rock') {
                        return playerSelection;
                }
                else if (computerSelection.toLowerCase() === 'scissors') {
                        return computerSelection;
                }
                break;
        case 'scissors': {
                if (computerSelection.toLowerCase() === 'paper') {
                        return playerSelection;
                }
                else if (computerSelection.toLowerCase() === 'rock') {
                        return computerSelection;
                }
                break; 
        }
        }
}


function game() {
        let playerScore = 0;
        let computerScore = 0;
        let winner;
        while(playerScore < 5 && computerScore < 5) {
                winner = playRound();
                if(winner === playerSelection) {
                        playerScore++;
                        console.log("You win this round.");
                }
                else if(winner === computerSelection) {
                        computerScore++;
                        console.log("The computer wins this round.");
                }
                console.log("Your score: " + playerScore + "\nComputer score: " + computerScore);
        }
        if(playerScore === 5) {
                console.log("You win.");
        }
        else {
                console.log("The computer wins");
        }
}