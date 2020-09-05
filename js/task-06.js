
const inputRef = document.querySelector('input#validation-input');

inputRef.addEventListener('blur', validation);
// console.log(inputRef.getAttribute("data-length"))

function validation() {
  
  if (inputRef.value.length === +inputRef.getAttribute("data-length")) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
}
