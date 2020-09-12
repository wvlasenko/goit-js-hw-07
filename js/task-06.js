
const inputRef = document.querySelector('input#validation-input');

inputRef.addEventListener('blur', validation);

function validation() {
  
  if (inputRef.value.length === +inputRef.dataset.length) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
}
