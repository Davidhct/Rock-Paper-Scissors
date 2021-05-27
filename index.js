let isRotate = false;

let option = document.querySelectorAll(".option");
let playerHand = document.getElementById("player-hand");
let computerHand = document.getElementById("computer-hand");
const computerHands = [
  {
    id: "1",
    name: "comp-rock",
    src: "./css/images/rock.png",
  },
  {
    id: "2",
    name: "comp-paper",
    src: "./css/images/paper.png",
  },
  {
    id: "3",
    name: "comp-scissors",
    src: "./css/images/scissors.png",
  },
];

playerOptions();

function playerOptions() {
  option.forEach((op) => {
    op.addEventListener("click", () => {
      playerHand = document.getElementById("player-hand");
      playerHand.classList.remove("rock");

      if (op.classList.contains("scissors")) {
        playerHand.classList.remove("rock");
        playerHand.classList.remove("paper");
        playerHand.classList.add("scissors");

        console.log(playerHand);
      } else if (op.classList.contains("rock")) {
        if (!playerHand.classList.contains("rock")) {
          playerHand.classList.add("rock");
          playerHand.classList.remove("paper");
          playerHand.classList.remove("scissors");
        }
      } else if (op.classList.contains("paper")) {
        playerHand.classList.add("paper");
        playerHand.classList.remove("rock");
        playerHand.classList.remove("scissors");
      }
      playerHand.src = op.childNodes[1].src;
      computerOptions();
    });
  });
}

function computerOptions() {
  computerHand = document.getElementById("computer-hand");

  if (computerHand.classList.contains("computer-hand")) {
    computerHand.classList.remove("computer-hand");
  }

  let randOp = computerHands[Math.trunc(Math.random() * 3)];

  if (randOp.name === "comp-scissors") {
    computerHand.classList.add("computer-hand");
  }
  computerHand.src = randOp.src;
  computerHand.classList.add(randOp.name);
  checkWin();
}

function checkWin() {
  console.log(playerHand, computerHand);
}
