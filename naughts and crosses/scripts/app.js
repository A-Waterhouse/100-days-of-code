const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn"); // gets hold of the buttons
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig); //listens for click on mouse, then executes a function in config.js but config must be loaded before this file
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);
cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);//can run function on click of background

