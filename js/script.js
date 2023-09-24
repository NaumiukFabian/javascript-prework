// let roundNumber = Math.floor(Math.random() * 3 + 1);
// let playerMove = ``;
// let computerMove = checkMove(roundNumber);

// console.log('Wylosowana liczba przez komputer to ' + roundNumber);

// let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');



// printMessage('komputer wylosował: ' + computerMove);


// while(playerInput > 3 || playerInput == null || playerInput <= 0){
//     playerInput = prompt('Podana liczba jest błędna! Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
// }

// playerMove = checkMove(playerInput);
// console.log('Gracz wybrał ' + playerInput);

// printMessage('gracz wybrał: ' + playerMove);

// result(playerInput, roundNumber);

document.getElementById('rock-button').addEventListener('click', function(){
    playGame(1);
})

document.getElementById('paper-button').addEventListener('click', function(){
    playGame(2);
})

document.getElementById('sciossors-button').addEventListener('click', function(){
    playGame(3);
})







