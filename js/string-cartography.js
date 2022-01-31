const formRef = document.querySelector('.form');

const inputRef = formRef.firstElementChild;

const cartographyRef = document.querySelector('.cartography');

console.log(inputRef);

inputRef.addEventListener('input', inputHandler);

function mapString(word) {
  const map = {};
  for (let i = 0; i < word.length; i += 1) {
    let letter = word[i];
    if (map[letter]) {
      map[letter].push(i);
    } else {
      map[letter] = [i];
    }
  }

  return map;
}

function inputHandler(e) {
  e.preventDefault();

  const word = e.target.value;

  const map = mapString(word);

  cartographyRef.textContent = JSON.stringify(map);
}

const stringToCompareRef = document.querySelectorAll('.js-input')[1];

const resultOutputRef = document.querySelector('.result');

function compareLetters(word, object) {
  for (let letter of word) {
    if (object[letter]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

stringToCompareRef.addEventListener('input', stringInputHandler);

function stringInputHandler(e) {
  e.preventDefault();

  const word = e.target.value;

  const map = JSON.parse(cartographyRef.textContent);

  resultOutputRef.textContent = isSubsequence(word, map);
}

function findNextIndex(array, minIndex) {
  for (let index of array) {
    if (index >= minIndex) {
      return index + 1;
    }
  }
  return false;
}

function isSubsequence(word, map) {
  let minIndex = 0;
  for (let letter of word) {
    if (map[letter]) {
      minIndex = findNextIndex(map[letter], minIndex);
      if (minIndex === false) {
        return false;
      }
      map;
    } else {
      return false;
    }
  }
  return true;
}

function longestMatch(string, dictionary) {
  let map = mapString(string);
  let match = [];
  for (var word of dictionary) {
    if (isSubsequence(word, map)) {
      match.push(word);
    }
  }

  return findLongestWord(match);
}

function findLongestWord(array) {
  let longestWord = '';
  for (let word of array) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
