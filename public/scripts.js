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

async function playGame() {
    const game = gameSelection.value;
    const mode = Array.from(gameMode).find(mode => mode.checked)?.value;
    const playerMove = mode === "opponent" ? move.value : null;
    const url = `/app/${game}/play/${playerMove ? playerMove : ""}`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (mode === "random") {
        result.textContent = `You chose ${data.player}!`
    } else {
        result.textContent = `You ${data.result}!`
    }
}

playButton.addEventListener("click", () => {
    playGame();
  });

function resetGame() {
  result.textContent = "";
  const checkedGameMode = Array.from(gameMode).find(mode => mode.checked);
  if (checkedGameMode) {
    checkedGameMode.checked = false;
  }
  moveSelection.style.display = "none";
  gameSelection.value = "rps";
  document.getElementById("random").checked = true;
  enableMoves();
}

resetButton.addEventListener("click", () => {
  resetGame();
});