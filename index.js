console.log("Hello World!");

let playBtn = document.getElementById("play-btn");
let cells = [];
let players = [];
let player1;
let player2;
let winner;

// Add click event on play button
playBtn.addEventListener("click", startGame);

// Start game
function startGame() {
    createBoard();
    createPlayers();

    player1 = players[0];
    player2 = players[1];

    alert("GAME START!");
}

// Change player turns
function takeTurn(player1, player2) {
    console.log(player1, player2);
}

// Check for winner
function checkWinner() {
    let horizontal1 =
        cells[0].textContent == cells[1].textContent &&
        cells[1].textContent == cells[2].textContent;

    let horizontal2 =
        cells[3].textContent == cells[4].textContent &&
        cells[4].textContent == cells[5].textContent;

    let horizontal3 =
        cells[6].textContent == cells[7].textContent &&
        cells[7].textContent == cells[8].textContent;

    let vertical1 =
        cells[0].textContent == cells[3].textContent &&
        cells[3].textContent == cells[6].textContent;

    let vertical2 =
        cells[1].textContent == cells[4].textContent &&
        cells[4].textContent == cells[7].textContent;

    let vertical3 =
        cells[2].textContent == cells[5].textContent &&
        cells[5].textContent == cells[8].textContent;

    console.log(horizontal1, horizontal2, horizontal3, vertical1, vertical2, vertical3);
}

// Create player
function createPlayers() {
    let playerInputs = document.querySelectorAll(".player-input");

    for (let i = 0; i < playerInputs.length; i++) {
        const name = playerInputs[i].value;
        let marker = players.length < 1 ? "X" : "O";

        let newPlayer = {
            name,
            marker,
        };

        players.push(newPlayer);
    }
}

function createBoard() {
    let board = document.getElementById("board");

    // Iterate to 9 to create a 3x3 board
    for (let i = 1; i <= 9; i++) {
        let cell = document.createElement("div");
        cells.push(cell);
        cell.setAttribute("id", `cell-${i}`);
        cell.classList.add("cell");

        board.append(cell);
    }

    if (cells.length > 1) {
        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener("click", appendMarker);
        }
    }
}

function appendMarker() {
    let cell = document.getElementById(this.id);
    cell.textContent = "X";
    checkWinner();
    // let playerMarker = playerTurn.marker

    // cell.textContent = playerMarker;
}
