const input = document.querySelector('#input');
const decreaseBtn = document.querySelector('#decrease');
const increaseBtn = document.querySelector('#increase');
const clearBtn = document.querySelector('#clear');
const text = document.querySelector('#text');

input.addEventListener('input', event => {
  event.preventDefault;

  text.textContent = event.currentTarget.value;
});

decreaseBtn.addEventListener('click', () => {
  text.style.fontSize = `${parseInt(text.style.fontSize) - 1}px`;
});

increaseBtn.addEventListener('click', () => {
  text.style.fontSize = `${parseInt(text.style.fontSize) + 1}px`;
});

clearBtn.addEventListener('click', () => {
  input.value = '';
  text.textContent = '';
});
