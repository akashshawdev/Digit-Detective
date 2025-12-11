'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

let highScore = 0;

const showMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    showMessage('⛔No number!');
  } else if (guess === secretNumber) {
    showMessage('🎉You are right');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is too high!
  } else if (guess !== secretNumber) {
    if (score > 1) {
      showMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      showMessage('😭You Lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // else if (guess > secretNumber) {
  // if (score > 1) {
  //   document.querySelector('.message').textContent = '📈Too high!';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  // } else {
  //   document.querySelector('.message').textContent = '😭You Lost!';
  //   document.querySelector('.score').textContent = 0;
  // }

  //   // When guess is too low!
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😭You Lost!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// Try again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  showMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
