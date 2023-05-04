const gameSelection = document.getElementById("gameSelection");
const gameMode = document.getElementsByName("gameMode");
const moveSelection = document.getElementById("moveSelection");
const move = document.getElementById("move");
const playButton = document.getElementById("playButton");
const resetButton = document.getElementById("resetButton");
const result = document.getElementById("result");

const moves = {
  rps: ["rock", "paper", "scissors"],
  rpsls: ["rock", "paper", "scissors", "lizard", "spock"]
};

function enableMoves() {
  move.innerHTML = "";
  moves[gameSelection.value].forEach(moveOption => {
    const option = document.createElement("option");
    option.value = moveOption;
    option.textContent = moveOption;
    move.appendChild(option);
  });
}

gameSelection.addEventListener("change", () => {
  enableMoves();
});

Array.from(gameMode).forEach(mode => {
    mode.addEventListener("change", () => {
      moveSelection.style.display = mode.value === "opponent" ? "block" : "none";
      enableMoves();
    });
  });

playButton.addEventListener