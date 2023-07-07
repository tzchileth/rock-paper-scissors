
/** This function plays 5 rounds of the game */
const NUMBER_OF_GAMES = 5;
const buttons = document.querySelectorAll('button');
const result = document.getElementById("result");

let gameMessage = '';
let userScore = 0;
let computerScore = 0;
let drawScore = 0;
let gameCount = 1;

result.style.display = "none";

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        let playerChoice = btn.textContent.toLowerCase();
        gameMessage = playRound(playerChoice, getComputerChoice());

        if (playerChoice === 'reset') {
            reset();
        } else if (gameCount <= NUMBER_OF_GAMES) {
            result.style.display = "block";

            if (gameMessage.includes("You lose")) {
                computerScore++;
                result.textContent = `User = ${userScore} Draws = ${drawScore} Computer = ${computerScore}\n`;
            } else if (gameMessage.includes("You Win!")) {
                userScore++;
                result.textContent = `User = ${userScore} Draws = ${drawScore} Computer = ${computerScore}\n`;
            } else if (gameMessage.includes("draw!")) {
                drawScore++;
                result.textContent = '\n' + `User = ${userScore} Draws = ${drawScore} Computer = ${computerScore}\n`;
            }
            gameCount++;
        } else {
            result.innerHTML = displayWinner(userScore, computerScore, drawScore);
        }
    });
});


/** This function randomly returns Rock, Paper or Scissors */
function getComputerChoice() {
    const values = ['Rock', 'Paper', 'Scissors'];

    // generate random number between 0 and 3
    const num = Math.floor(Math.random() * 3);

    return values[num].toLowerCase();
}

/** This function plays a single round of rock, paper, and scissors game */
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a draw! You chose ${playerSelection} and computer chose ${computerSelection}.`;
    }
    if (playerSelection === "rock" && computerSelection === "paper") {
        return `You lose! ${computerSelection.charAt(0).toUpperCase().concat(computerSelection.slice(1))} beats ${playerSelection.charAt(0).toUpperCase().concat(playerSelection.slice(1))}`;
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return `You Win! ${playerSelection.charAt(0).toUpperCase().concat(playerSelection.slice(1))} beats ${computerSelection.charAt(0).toUpperCase().concat(computerSelection.slice(1))}`;
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        return `You Win! ${playerSelection.charAt(0).toUpperCase().concat(playerSelection.slice(1))} beats ${computerSelection.charAt(0).toUpperCase().concat(computerSelection.slice(1))}`;
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        return `You lose! ${computerSelection.charAt(0).toUpperCase().concat(computerSelection.slice(1))} beats ${playerSelection.charAt(0).toUpperCase().concat(playerSelection.slice(1))}`;
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
        return `You lose! ${computerSelection.charAt(0).toUpperCase().concat(computerSelection.slice(1))} beats ${playerSelection.charAt(0).toUpperCase().concat(playerSelection.slice(1))}`;
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        return `You Win! ${playerSelection.charAt(0).toUpperCase().concat(playerSelection.slice(1))} beats ${computerSelection.charAt(0).toUpperCase().concat(computerSelection.slice(1))}`;
    }
}

/** Function to display game score and winner */
function displayWinner(userScore, computerScore, drawScore) {
    if (userScore > computerScore) {
        return `You Win!<br>
        User = ${userScore} Computer = ${computerScore} Draws = ${drawScore}.`;
    } else if (computerScore > userScore) {
        return `You Lose!<br>
        User = ${userScore} Computer = ${computerScore} Draws = ${drawScore}.`;
    } else {
        return `Game is a draw!<br>
        User = ${userScore} Computer = ${computerScore} Draws = ${drawScore}`;
    }
}

/** Function to reset game parameters */
function reset() {
    result.textContent = "";
    result.style.display = "none";

    userScore = 0;
    computerScore = 0;
    drawScore = 0;
    gameCount = 1;
}