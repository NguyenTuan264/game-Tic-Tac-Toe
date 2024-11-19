let firstPlayer = "X"; // Người chơi 1
let scorePlayerX = 0; // Điểm của Player X
let scorePlayerO = 0; // Điểm của Player O

// Thời điểm kết thúc game
let gameEnded = false;

// Hiển thị điểm số
function updateScores() {
  document.getElementById("scoreX").textContent = `Player X: ${scorePlayerX}`;
  document.getElementById("scoreO").textContent = `Player O: ${scorePlayerO}`;
}

for (let i = 1; i <= 25; i++) {
  document.getElementById(i.toString()).addEventListener("click", function () {
    // Ô còn trống và game chưa kết thúc
    if (this.innerHTML === "" && !gameEnded) {
      this.innerHTML = firstPlayer;
      this.classList.add(firstPlayer.toLowerCase());
    }

    if (firstPlayer === "X") {
      scorePlayerX += 5;
    } else {
      scorePlayerO += 5;
    }

    checkWin();

    if (checkDraw()) {
      gameEnded = true;
      alert("Hai người chơi hòa nhau");
      return;
    }

    // Chuyển đổi người chơi
    firstPlayer = firstPlayer === "X" ? "O" : "X";

    updateScores();
  });
}

// Điều kiện thắng
let winPos = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],
  [5, 10, 15, 20, 25],
  [1, 7, 13, 19, 25],
  [5, 9, 13, 17, 21],
];

function checkWin() {
  for (let i = 0; i < winPos.length; i++) {
    if (
      document.getElementById(winPos[i][0]).innerHTML === firstPlayer &&
      document.getElementById(winPos[i][1]).innerHTML === firstPlayer &&
      document.getElementById(winPos[i][2]).innerHTML === firstPlayer &&
      document.getElementById(winPos[i][3]).innerHTML === firstPlayer &&
      document.getElementById(winPos[i][4]).innerHTML === firstPlayer
    ) {
      const winner = firstPlayer;

      document.getElementById(winPos[i][0]).classList.add("win");
      document.getElementById(winPos[i][1]).classList.add("win");
      document.getElementById(winPos[i][2]).classList.add("win");
      document.getElementById(winPos[i][3]).classList.add("win");
      document.getElementById(winPos[i][4]).classList.add("win");

      gameEnded = true;

      setTimeout(function () {
        alert(winner + " wins!");
      }, 500);
    }
  }
}

function checkDraw() {
  for (let i = 1; i <= 25; i++) {
    if (document.getElementById(i.toString()).innerHTML === "") {
      return false; // Còn ô trống, chưa hòa
    }
  }
  return true; // Không còn ô trống, có thể hòa
}

// Reset game
const resetButton = document.getElementById("reset");
if (resetButton) {
  resetButton.addEventListener("click", function () {
    for (let i = 1; i <= 25; i++) {
      const cell = document.getElementById(i.toString());
      if (cell) {
        cell.innerHTML = "";
        cell.classList.remove("x", "o", "win");
      }
    }
    gameEnded = false;
    firstPlayer = "X"; // Đặt lại người chơi nếu cần
    scorePlayerX = 0;
    scorePlayerO = 0;
    updateScores();
  });
}
