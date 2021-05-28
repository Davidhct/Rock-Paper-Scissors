const options = document.querySelectorAll(".options button");
let playerHand = document.getElementById("player-hand");
let computerHand = document.getElementById("computer-hand");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
document.querySelector(".close-modal").addEventListener("click", closeModal);

let playerChoice;
let computerChoice;

let pScore = 0;
let cScore = 0;

playerOptions();

const resetGame = () => {
  pScore = 0;
  cScore = 0;
  playerScore.innerHTML = pScore;
  computerScore.innerHTML = cScore;
  playerHand.src = "./css/images/rock.png";
  computerHand.src = "./css/images/rock.png";
};

const displayModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");

  resetGame();
}

overlay.addEventListener("click", () => closeModal());

const sumScore = () => {
  const modalTitle = document.getElementById("title-win-lose");
  if (Number(playerScore.innerHTML) > Number(computerScore.innerHTML)) {
    modalTitle.innerHTML = "Player wins!! 😎🏆";
    displayModal();
  } else if (Number(computerScore.innerHTML) > Number(playerScore.innerHTML)) {
    modalTitle.innerHTML = "Computer wins!! 💻🏆";
    displayModal();
  } else {
    modalTitle.innerHTML = "It's a tie!!👔";
    displayModal();
  }
};

function playerOptions() {
  options.forEach((op) => {
    op.addEventListener("click", function () {
      playerHand.src = `./css/images/${this.classList.value}.png`;
      playerChoice = this.classList.value;
      computerOptions();
    });
  });
}

function computerOptions() {
  const computerHands = ["rock", "paper", "scissors"];
  computerChoice = computerHands[Math.floor(Math.random() * 3)];

  computerHand.src = `./css/images/${computerChoice}.png`;

  checkHands();
}

function checkHands() {
  if (playerChoice === computerChoice) {
    pScore;
    cScore;
  } else if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      pScore++;
    } else {
      cScore++;
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      pScore++;
    } else {
      cScore++;
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      pScore++;
    } else {
      cScore++;
    }
  }
  playerScore.innerHTML = pScore;
  computerScore.innerHTML = cScore;
  if (pScore === 5 || cScore === 5) {
    sumScore();
  }
}
