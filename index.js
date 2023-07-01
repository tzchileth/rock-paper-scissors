
/** This function randomly returns Rock, Paper or Scissors */

function getComputerChoice() {
    const values = ['Rock', 'Paper', 'Scissors'];

    // generate random number between 0 and 3
    const num = Math.floor(Math.random() * 3);

    return values[num];
}