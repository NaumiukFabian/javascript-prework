function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}

function checkMove(idMove) {
    if (idMove == 1) {
        return 'kamień';
    }
    else if (idMove == 2) {
        return 'papier';
    }
    else {
        return 'nożyce';
    }
}

function result(playerMove, computerMove) {
    if (computerMove == 1 && playerMove == 1) {
        return printMessage("REMIS");
    }
    else if (computerMove == 1 && playerMove == 2) {
        return printMessage('Wygrywa Gracz');
    }
    else if (computerMove == 1 && playerMove == 3) {
        return printMessage('Wygrywa komputer');
    }
    else if (computerMove == 2 && playerMove == 1) {
        return printMessage('Wygrywa komputer');
    }
    else if (computerMove == 2 && playerMove == 2) {
        return printMessage('REMIS');
    }
    else if (computerMove == 2 && playerMove == 3) {
        return printMessage('Wygrywa Gracz');
    }
    else if (computerMove == 3 && playerMove == 1) {
        return printMessage('Wygrywa Gracz');
    }
    else if (computerMove == 3 && playerMove == 2) {
        return printMessage('Wygrywa komputer');
    }
    else if (computerMove == 3 && playerMove == 3) {
        return rintMessage('REMIS');
    }
}

function playGame(move) {

    clearMessages();

    let roundNumber = Math.floor(Math.random() * 3 + 1);
    let playerMove = ``;
    let computerMove = checkMove(roundNumber);

    console.log('Wylosowana liczba przez komputer to ' + roundNumber);

    // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    printMessage('komputer wylosował: ' + computerMove);

    playerMove = checkMove(move);
    console.log('Gracz wybrał ' + move);

    printMessage('gracz wybrał: ' + playerMove);

    result(move, roundNumber);
}

