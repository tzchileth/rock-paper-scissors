
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