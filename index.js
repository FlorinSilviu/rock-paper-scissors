function getComputerChoice() {
    let compChoice = Math.floor(Math.random()*3) + 1;
    switch (compChoice) {
        case 1: compChoice = 'Rock';
                break;
        case 2: compChoice = 'Paper';
                break;
        case 3: compChoice = 'Scissors';
                break;
    }
    return compChoice;
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection) {
        case 'rock': 
                if (computerSelection.toLowerCase() === 'paper') {
                        return computerSelection;
                }
                else if (computerSelection.toLowerCase() === 'scissors') {
                        return playerSelection;
                }
                else {
                        return playerSelection;
                }
                break;
        case 'paper':
                if (computerSelection.toLowerCase() === 'paper') {
                        return playerSelection;
                }
                else if (computerSelection.toLowerCase() === 'scissors') {
                        return computerSelection;
                }
                else {
                        return playerSelection;
                }
                break;
        case 'scissors': {
                if (computerSelection.toLowerCase() === 'paper') {
                        return playerSelection;
                }
                else if (computerSelection.toLowerCase() === 'scissors') {
                        return playerSelection;
                }
                else {
                        return computerSelection;
                }
                break; 
        }
        }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();


