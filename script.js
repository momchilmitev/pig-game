'use strict';

// Selecting DOM elements
const $score0 = document.getElementById('score--0');
const $score1 = document.getElementById('score--1');
const $dice = document.getElementsByClassName('dice')[0];

// Inititalizing values
$score0.textContent = 0;
$score1.textContent = 0;
$dice.classList.add('hidden');
