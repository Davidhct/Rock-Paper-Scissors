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

const resetAnimation = () => {
  playerHand.style.animation = "";
  computerHand.style.animation = "";
};

const resetHands = () => {
  playerHand.src = "./css/images/rock.png";
  playerHand.classList.add("rock");
  computerHand.src = "./css/images/rock.png";
  computerHand.classList.remove("rock");
};

const resetGame = () => {
  pScore = 0;
  cScore = 0;
  playerScore.innerHTML = pScore;
  computerScore.innerHTML = cScore;
  resetHands();
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
      resetHands();
      console.log(playerHand);
      playerHand.style.animation = "shakePlayer 2s ease";
      computerHand.style.animation = "shakeComputer 2s ease";

      let time = setTimeout(() => {
        playerChoice = this.classList.value;
        if (playerChoice === "scissors") {
          playerHand.classList.remove("rock");
        }

        if (playerChoice === "paper" || playerChoice === "rock") {
          playerHand.classList.add("rock");
        }
        playerHand.src = `./css/images/${playerChoice}.png`;
        computerOptions();
        clearInterval(time);
      }, 2000);
    });
  });
}

function computerOptions() {
  const computerHands = ["rock", "paper", "scissors"];
  computerChoice = computerHands[Math.trunc(Math.random() * 3)];

  if (computerChoice === "scissors") {
    computerHand.classList.add("rock");
  } else {
    computerHand.classList.remove("rock");
  }

  computerHand.src = `./css/images/${computerChoice}.png`;

  checkHands();
  resetAnimation();
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
  if (pScore === 3 || cScore === 3) {
    sumScore();
  }
}
