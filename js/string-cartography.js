const formRef = document.querySelector('.form');

const inputRef = formRef.firstElementChild;

const cartographyRef = formRef.nextElementSibling;

console.log(inputRef);

inputRef.addEventListener('input', mapString);

export function mapString(e) {
  e.preventDefault();
  const word = e.target.value;

  const map = {};
  for (let i = 0; i < word.length; i += 1) {
    let letter = word[i];
    if (map[letter]) {
      map[letter].push(i);
    } else {
      map[letter] = [i];
    }
  }
  cartographyRef.textContent = JSON.stringify(map);
}
