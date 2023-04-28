const gameData = [
[0, 0, 0],
[0, 0, 0],
[0, 0, 0],
]

let editedPlayer = 0;
let activePlayer = 0;

const players = [
  {
    name: "",
    symbol: "X"
  },
  {
    name: "",
    symbol: "O"
  },
];

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");
const gameAreaElement = document.getElementById("active-game");
const activePlayerNameElement = document.getElementById("active-player-name");

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn"); // gets hold of the buttons
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");
const startNewGameBtnElement = document.getElementById("start-game-btn");
const gameFieldElements = document.querySelectorAll("#game-board li"); //selects all list items in the game-board ID

editPlayer1BtnElement.addEventListener("click", openPlayerConfig); //listens for click on mouse, then executes a function in config.js but config must be loaded before this file
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);
cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig); //can run function on click of background

formElement.addEventListener("submit", savePlayerConfig);

startNewGameBtnElement.addEventListener("click", startNewGame);

for (const gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener("click", selectGameField);
}