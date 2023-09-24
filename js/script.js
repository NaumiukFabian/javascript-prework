let roundNumber = Math.floor(Math.random() * 3 + 1);
let playerMove = ``;
let computerMove = `nieznany ruch`;

if(roundNumber == 1){
    computerMove = 'kamień';
}
else if(roundNumber == 2){
    computerMove = 'papier';
}
else{
    computerMove = "nożyce";
}

console.log('Wylosowana liczba przez komputer to ' + roundNumber);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wybrał ' + playerInput);

if(playerInput == 1){
    playerMove = 'kamień';
}
else if(playerInput == 2){
    playerMove = 'papier';
}
else{
    playerMove = 'nożyce';
}

printMessage('komputer wylosował: ' + computerMove);
printMessage('gracz wybrał: ' + playerMove);

if(playerInput > 3 || playerInput == null){
    let playerInput = prompt('Podana liczba jest błędna! Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
}
else if(roundNumber == 1 && playerInput == 1){
    printMessage("REMIS");
}
else if(roundNumber == 1 && playerInput == 2){
    printMessage('Wygrywa Gracz');
}
else if(roundNumber == 1 && playerInput == 3){
    printMessage('Wygrywa komputer');
}
else if(roundNumber == 2 && playerInput == 1){
    printMessage('Wygrywa komputer');
}
else if(roundNumber == 2 && playerInput == 2){
    printMessage('REMIS');
}
else if(roundNumber == 2 && playerInput == 3){
    printMessage('Wygrywa Gracz');
}
else if(roundNumber == 3 && playerInput == 1){
    printMessage('Wygrywa Gracz');
}
else if(roundNumber == 3 && playerInput == 2){
    printMessage('Wygrywa komputer');
}
else if(roundNumber == 3 && playerInput == 3){
    printMessage('REMIS');
}








