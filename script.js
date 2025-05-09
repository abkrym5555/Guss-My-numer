'use strict';
let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

console.log(secretNum);
document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'Enter a Number !!';
  } else if (guess === secretNum) {
    document.querySelector('.message').textContent = 'Correct Number :) ';
    document.querySelector('.number').textContent = secretNum;
    document.body.style.cssText = ` background-color: #60b347;`;
    document.querySelector('.number').style.cssText = ` width: 30rem;`;
    if (score >= highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNum) {
    document.querySelector('.message').textContent = 'The number is too high';
    score <= 0 ? (score = 0) : score--;
    document.querySelector('.score').textContent = score;
    if (!score) {
      document.querySelector('.message').textContent = 'you lost the game :(';
      document.body.style.cssText = ` background-color:rgb(244, 43, 43);`;
    }
  } else {
    document.querySelector('.message').textContent = 'The number is too low';
    score <= 0 ? (score = 0) : score--;
    document.querySelector('.score').textContent = score;
    if (!score) {
      document.querySelector('.message').textContent = 'you lost the game :(';
      document.body.style.cssText = ` background-color: rgb(244, 43, 43);`;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.body.style.cssText = ` background-color: #222;`;
  document.querySelector('.number').style.cssText = ` width: 15rem;`;
});
