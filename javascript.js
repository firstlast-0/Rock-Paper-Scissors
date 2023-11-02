function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice() {
    let x = getRandomInt(3);

    if (x === 0) {
        return 'Rock';
    } else if (x === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

console.log(getComputerChoice());