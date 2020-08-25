'use strict';
const sizeBarRef = document.querySelector('#font-size-control');

const textRef = document.querySelector('#text');

sizeBarRef.addEventListener('input', () => {
  textRef.style.fontSize = `${sizeBarRef.value}px`;
});
