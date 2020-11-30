'use strict';

// Selecting DOM elements
const $player0 = document.querySelector('.player--0');
const $player1 = document.querySelector('.player--1');
const $score0 = document.querySelector('#score--0');
const $score1 = document.querySelector('#score--1');
const $currentScore0 = document.querySelector('#current--0');
const $currentScore1 = document.querySelector('#current--1');
const $dice = document.querySelector('.dice');
const $btnNew = document.querySelector('.btn--new');
const $btnRoll = document.querySelector('.btn--roll');
const $btnHold = document.querySelector('.btn--hold');

// Inititalizing values
$score0.textContent = 0;
$score1.textContent = 0;
$dice.classList.add('hidden');
let totalScores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// The logic for rolling the dice
$btnRoll.addEventListener('click', (e) => {
  const randomNumber = Math.trunc(Math.random() * 6) + 1;
  $dice.src = `dice-${randomNumber}.png`;
  $dice.classList.remove('hidden');

  if (randomNumber !== 1) {
    currentScore += randomNumber;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    $player0.classList.toggle('player--active');
    $player1.classList.toggle('player--active');
  }
});
