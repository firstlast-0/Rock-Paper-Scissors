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

let plaScore = 0;
let comScore = 0;

function playRound(pS, cS) {
    let p1 = document.querySelector('#p1');
    let p2 = document.querySelector('#p2');
    let p3 = document.querySelector('#p3');

    if (pS === cS) {
        p1.textContent = "It's a tie";
    } else if (pS === 'Rock' && cS === 'Scissors' || pS === 'Paper' && cS === 'Rock' || pS === 'Scissors' && cS === 'Paper') {
        p1.textContent = `You win! ${pS} beats ${cS}`;
        plaScore++;
    } else {
        p1.textContent = `You lose! ${cS} beats ${pS}`;
        comScore++;
    }

    p2.textContent = `Player: ${plaScore} Computer: ${comScore}`;

    if (plaScore === 5) {
        p3.textContent = `You win the game!`;
    } else if (comScore === 5) {
        p3.textContent = `You lost the game!`;
    }
}

function game() {

    let buttons = document.querySelector('#buttons');
    buttons.addEventListener('click', function (e) {
        playRound(e.target.id, getComputerChoice())
    });
}

game();