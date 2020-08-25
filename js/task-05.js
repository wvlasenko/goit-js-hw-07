'use strict';
const inputRef = document.querySelector('input#name-input');
const outputRef = document.querySelector('span#name-output');

inputRef.addEventListener('input', getInputValue);

function getInputValue() {
  outputRef.textContent = inputRef.value === '' ? 'незнакомец' : inputRef.value;
}
