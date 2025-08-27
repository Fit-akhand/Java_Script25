let rendomNumber = parseInt(Math.random() * 100) + 1;

console.log(rendomNumber);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const gussSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuss = [];
let numGues = 1;
let playgame = true;

if (playgame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess)
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid number");
  } else if (guess < 1) {
    alert("please enter a number greater then 0");
  } else if (guess > 100) {
    alert("please enter a number less then 100");
  } else {
    prevGuss.push(guess);
    if (numGues === 11) {
      displayguess(guess);
      displayMessage(`gameover. random number was ${rendomNumber}`);
      endGame();
    } else {
      displayguess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === rendomNumber) {
    displayMessage(`you guess it right`);
    endGame();
  } else if (guess < rendomNumber) {
    displayMessage(`number is too low`);
  } else {
    displayMessage(`number is too heigh`);
  }
}
function displayguess(guess) {
  userInput.value = "";
  gussSlot.innerHTML += `${guess},`;
  numGues++;
  remaining.innerHTML = `${10 - numGues}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="new game">Start New Game</h2>`;
  startOver.appendChild(p);
  playgame = false;
  newGame();
}

function endGame() {
  const newGameButton = document.querySelector("newGame");
  newGameButton.addEventListener("click", function (e) {
    rendomNumber = parseInt(Math.random() * 100) + 1;
    prevGuss = [];
    numGues = 1;
    gussSlot.innerHTML = "";
    remaining.innerHTML = `${10 - numGues}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p);
    playgame = true;
  });
}
