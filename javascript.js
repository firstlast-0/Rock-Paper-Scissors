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

function playRound(p, cS) {
    let pS = p.toLowerCase().replace(p[0], p[0].toUpperCase());

    if (pS === cS) {
        return "It's a tie";
    } else if (pS === 'Rock' && cS === 'Scissors' || pS === 'Paper' && cS === 'Rock' || pS === 'Scissors' && cS === 'Paper') {
        return `You win! ${pS} beats ${cS}`;
    } else {
        return `You lose! ${cS} beats ${pS}`;
    }
}

let x = getComputerChoice();
console.log(x);
console.log(playRound('rock', x));
