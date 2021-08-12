
const cell = document.querySelectorAll('.cell');
const turn = document.getElementById('turn');

const first3CellValue = [];
const second3CellValue = [];
const third3CellValue = [];

let player = 1;

function whoseTurn() {
    if (player == 0) {
        turn.innerHTML = 'O turn';
    }
    else if (player == 1) {
        turn.innerHTML = 'X turn';
    }
}
whoseTurn();



cell.forEach(element => {
    element.addEventListener('click', ticTacToe);
})

function ticTacToe(event) {
    console.log(event);
    if (player == 0) {
        event.target.innerHTML = 'O';
        player = 1;
    }
    else if (player == 1) {
        event.target.innerHTML = 'X';
        player = 0;
    }
    changeCellValueArray();
}

function changeCellValueArray() {
    for (let i = 0; i < 3; i++) {
        if (cell[i].innerHTML != '') {
            first3CellValue[i] = cell[i].innerText;
        }
    }
    for (let i = 3; i < 6; i++) {
        if (cell[i].innerHTML != '') {
            second3CellValue[i - 3] = cell[i].innerText;
        }
    }
    for (let i = 6; i < 9; i++) {
        if (cell[i].innerHTML != '') {
            third3CellValue[i - 6] = cell[i].innerText;
        }
    }
    findWinner();
}
function findWinner() {
    for (let i = 0; i < 3; i++) {
        if (first3CellValue[i] != undefined) {
            if ((i == 0 || i == 2) && first3CellValue[i] == second3CellValue[1] &&
                second3CellValue[1] == third3CellValue[Math.abs(i - 2)]) {
                window.confirm('Player ' + first3CellValue[i] + ' is the winner');
                location.reload();
            }
            else if (first3CellValue[i] == second3CellValue[i] &&
                second3CellValue[i] == third3CellValue[i]) {
                window.confirm('Player ' + first3CellValue[i] + ' is the winner');
                location.reload();
            }
            else if (first3CellValue[0] == first3CellValue[1] &&
                first3CellValue[1] == first3CellValue[2]) {
                window.confirm('Player ' + first3CellValue[i] + ' is the winner');
                location.reload();
            }
        }
        else if (second3CellValue[i] != undefined) {
            if (second3CellValue[0] == second3CellValue[1] &&
                second3CellValue[1] == second3CellValue[2]) {
                window.confirm('Player ' + second3CellValue[i] + ' is the winner');
                location.reload();
            }
        }
        else if (third3CellValue[i] != undefined) {
            if (third3CellValue[0] == third3CellValue[1] &&
                third3CellValue[1] == third3CellValue[2]) {
                window.confirm('Player ' + third3CellValue[i] + ' is the winner');
                location.reload();
            }
        }
    }
    let allCells = [first3CellValue, second3CellValue, third3CellValue];
    let emptyCells = 0;
    for (threeCells of allCells) {
        for (let i = 0; i < 3; i++) {
            if (typeof threeCells[i] != 'undefined') { emptyCells++ }
        }
    }
    if (emptyCells == 9) { window.confirm('Match Drawn'); location.reload() }
    whoseTurn();
}
