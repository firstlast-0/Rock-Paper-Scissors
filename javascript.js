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
        console.log("It's a tie");
        return 'T';
    } else if (pS === 'Rock' && cS === 'Scissors' || pS === 'Paper' && cS === 'Rock' || pS === 'Scissors' && cS === 'Paper') {
        console.log(`You win! ${pS} beats ${cS}`);
        return 'W';
    } else {
        console.log(`You lose! ${cS} beats ${pS}`);
        return 'L';
    }
}

function game() {
    let plaScore = 0;
    let comScore = 0;

    for (let x = 0; x < 5; x++) {
        let y = playRound(prompt('Player: '), getComputerChoice());

        if (y === 'W') {
            plaScore++;
        } else if (y === 'L') {
            comScore++;
        }
    }

    let text2 = `Player: ${plaScore} Computer: ${comScore}`;

    if (plaScore > comScore) {
        console.log(`You win the game! ` + text2);
    } else if (comScore > plaScore) {
        console.log(`You lost the game! ` + text2);
    } else {
        console.log(`It's a tie! ` + text2);
    }
}

game();