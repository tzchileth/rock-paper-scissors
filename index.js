
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
    return playerChoice;
}
