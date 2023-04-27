"use strict";

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displaySecretNumber = function (number) {
  document.querySelector(".number").textContent = number;
};

const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const generateRandomNumber = function () {
  // Generates random number between 1 and 20 (both inclusive)
  return Math.trunc(Math.random() * 20) + 1;
};

const changeBodyBackgroundColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

const changeSecretBoxWidth = function (width) {
  document.querySelector(".number").style.width = width;
};

let secretNumber = generateRandomNumber();

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (guess < 1 || guess > 20) {
    displayMessage("🚫 Enter a number between 1 and 20");
  } else if (guess === secretNumber) {
    displaySecretNumber(secretNumber);
    displayMessage("🎉 Correct number");
    changeBodyBackgroundColor("#60b347");
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high" : "📉 Too low");
      score--;
      displayScore(score);
    } else {
      displayScore(0);
      displayMessage("😭 You lost the game!");
      document.querySelector(".check").style.cursor = "not-allowed";
      changeBodyBackgroundColor("#ff0000");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = generateRandomNumber();
  displayScore(score);
  displayMessage("Start guessing...");
  displaySecretNumber("?");
  changeBodyBackgroundColor("#222");
  changeSecretBoxWidth("15rem");
  document.querySelector(".guess").value = "";
});
