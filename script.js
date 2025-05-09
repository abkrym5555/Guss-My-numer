'use strict';

function getRandom() {
  return Math.trunc(Math.random() * 20) + 1;
}
function showSecretnum() {
  document.querySelector('.number').textContent = secretNum;
}
function theNumIsCorrect() {
  displayMessage('Correct Number :) ');
  showSecretnum();
  document.body.style.cssText = ` background-color: #60b347;`;
  document.querySelector('.number').style.cssText = ` width: 30rem;`;
  if (score >= highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
}
function theNumIsNotCorrect(guess) {
  displayMessage(
    guess > secretNum ? 'The number is too high' : 'The number is too low'
  );
  score <= 0 ? (score = 0) : score--;
  document.querySelector('.score').textContent = score;
  if (!score) {
    displayMessage(`you lost the game :(`);
    showSecretnum();
    document.body.style.cssText = ` background-color:rgb(244, 43, 43);`;
  }
}
function displayMessage(masg) {
  document.querySelector('.message').textContent = masg;
}
let secretNum = getRandom();
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;
  if (!guess) {
    displayMessage('Enter a Number !!');
  } else if (guess === secretNum) {
    theNumIsCorrect();
  } else if (guess !== secretNum) {
    theNumIsNotCorrect(guess);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNum = getRandom();
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.body.style.cssText = ` background-color: #222;`;
  document.querySelector('.number').style.cssText = ` width: 15rem;`;
});
