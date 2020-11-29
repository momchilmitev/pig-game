'use strict';

// Selecting DOM elements
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
let currentScore = 0;

// The logic for rolling the dice
$btnRoll.addEventListener('click', (e) => {
  const randomNumber = Math.trunc(Math.random() * 6) + 1;
  $dice.src = `dice-${randomNumber}.png`;
  $dice.classList.remove('hidden');

  if (randomNumber !== 1) {
    currentScore += randomNumber;
    $currentScore0.textContent = currentScore;
  } else {
  }
});
