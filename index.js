
/** This function randomly returns Rock, Paper or Scissors */

function getComputerChoice() {
    const values = ['Rock', 'Paper', 'Scissors'];

    // generate random number between 0 and 3
    const num = Math.floor(Math.random() * 3);

    return values[num].toLowerCase();
}

/** This function gets user selection of Rock, Paper, or Scissors */

function getPlayerChoice() {
    let playerChoice = prompt("Enter rock, paper, or scissors", "paper");

    while (playerChoice.toLowerCase() !== "rock" &&
        playerChoice.toLowerCase() !== "paper" &&
        playerChoice.toLowerCase() !== "scissors"
    ) {
        playerChoice = prompt("Enter rock, paper, or scissors", "paper");
    }
    return playerChoice.toLowerCase();
}

/** This function plays a single round of rock, paper, and scissors game */

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a draw! You chose ${playerSelection} and computer chose ${computerSelection}.`;
    }
    if (playerSelection === "rock" && computerSelection === "paper") {
        return `You lose! ${computerSelection.charAt(0).toUpperCase().concat(computerSelection.slice(1))} beats ${playerSelection.charAt(0).toUpperCase().concat(playerSelection.slice(1))}`
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return `You Win! ${playerSelection.charAt(0).toUpperCase().concat(playerSelection.slice(1))} beats ${computerSelection.charAt(0).toUpperCase().concat(computerSelection.slice(1))}`
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        return `You Win! ${playerSelection.charAt(0).toUpperCase().concat(playerSelection.slice(1))} beats ${computerSelection.charAt(0).toUpperCase().concat(computerSelection.slice(1))}`
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        return `You lose! ${computerSelection.charAt(0).toUpperCase().concat(computerSelection.slice(1))} beats ${playerSelection.charAt(0).toUpperCase().concat(playerSelection.slice(1))}`
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
        return `You lose! ${computerSelection.charAt(0).toUpperCase().concat(computerSelection.slice(1))} beats ${playerSelection.charAt(0).toUpperCase().concat(playerSelection.slice(1))}`
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        return `You Win! ${playerSelection.charAt(0).toUpperCase().concat(playerSelection.slice(1))} beats ${computerSelection.charAt(0).toUpperCase().concat(computerSelection.slice(1))}`
    }
}

/** This function plays 5 rounds of the game */

function game() {

    const NUMBER_OF_GAMES = 5;
    let userScore = 0;
    let computerScore = 0;
    let drawScore = 0;
    let gameCount = 1;

    while (gameCount <= NUMBER_OF_GAMES) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();

        // play game
        let gameMessage = playRound(playerSelection, computerSelection);

        if (gameMessage.includes("You lose")) {
            computerScore++;
        } else if (gameMessage.includes("You Win!")) {
            userScore++;
        } else if (gameMessage.includes("draw!")) {
            drawScore++;
        }
        gameCount++;
    }

    // display winner
    return displayWinner(userScore, computerScore, drawScore);
}

/** Function to display game score and winner */
function displayWinner(userScore, computerScore, drawScore) {
    if (userScore > computerScore) {
        return `You Win!\nUser = ${userScore}\nComputer = ${computerScore}\nDraws = ${drawScore}.`;
    } else if (computerScore > userScore) {
        return `You Lose!\nUser = ${userScore}\nComputer = ${computerScore}\nDraws = ${drawScore}.`;
    } else {
        return `Game is a draw!\nUser = ${userScore}\nComputer = ${computerScore}\nDraws = ${drawScore}`;
    }
}