'use strict';

let counterValue = 0;

const incrementButton = document.querySelector(
  `button[data-action = "increment"]`,
);
const decrementButton = document.querySelector(
  `button[data-action = "decrement"]`,
);

const clickAcc = document.querySelector('div#counter span#value');

const increment = () => {
  counterValue += 1;
  clickAcc.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  clickAcc.textContent = counterValue;
};

incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);
