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
                        return 'No one';
                }
                break;
        case 'paper':
                if (computerSelection.toLowerCase() === 'rock') {
                        return playerSelection;
                }
                else if (computerSelection.toLowerCase() === 'scissors') {
                        return computerSelection;
                }
                else {
                        return 'No one';
                }
                break;
        case 'scissors': {
                if (computerSelection.toLowerCase() === 'paper') {
                        return playerSelection;
                }
                else if (computerSelection.toLowerCase() === 'rock') {
                        return computerSelection;
                }
                else {
                        return 'no one';
                }
                break; 
        }
        }
}

const buttons = document.querySelectorAll('button');
const gameInfo = document.createElement('div');
gameInfo.classList.add('gameInfo');
const content = document.querySelector('.content');
const winner = document.createElement('p');
const score = document.createElement('div');
const pScore = document.createElement('p');
const cScore = document.createElement('p');


let playerScore = 0;
let computerScore = 0;

gameInfo.appendChild(winner);
gameInfo.appendChild(score);
score.appendChild(pScore);
score.appendChild(cScore);

buttons.forEach((button) => {
        button.addEventListener('click', function(e) {
                winner.textContent = playRound(button.textContent.toLowerCase(), getComputerChoice()) + ' wins this round.';
                content.appendChild(gameInfo);
                if(winner.textContent.includes(button.textContent.toLowerCase())) {
                        playerScore++;
                }
                else if(winner.textContent.includes('No one')) {
                        //no score gets updated
                }
                else {
                        computerScore++;
                }
                checkScore();
                pScore.textContent = 'Player Score: ' + playerScore;
                cScore.textContent = 'Computer Score: ' + computerScore;
        });
})

function checkScore() {
        if(playerScore === 5) {
                winner.textContent = 'Player won the game.';
                winner.style.fontSize = '40px';
                winner.style.color = 'black';
                playerScore = 0;
                computerScore = 0;
                document.getElementById('title').textContent = 'Please reload if you want to play again (CTRL+R).';
                document.getElementById('rock').disabled = true;
                document.getElementById('paper').disabled = true;
                document.getElementById('scissors').disabled = true;
        }
        else if (computerScore === 5) {
                winner.textContent = 'Computer won the game.';
                winner.style.fontSize = '40px';
                winner.style.color = 'black';
                playerScore = 0;
                computerScore = 0;
                document.getElementById('title').textContent = 'Please reload if you want to play again (CTRL+R).';
                document.getElementById('rock').disabled = true;
                document.getElementById('paper').disabled = true;
                document.getElementById('scissors').disabled = true;
        }
        return winner.textContent;
}