import { mapString } from 'string-cartography';
// import { dictionaryWord, stringSequence } from 'subsequence.words';
const stringInputRef = document.querySelectorAll('.form')[1];

function compareLetters(word, object) {
  for (var letter of word) {
    if (object[letter]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
// console.log(dictionaryWord);

// console.log(compareLetters(dictionaryWord, stringSequenceObject));
stringInputRef.addEventListener('input', inputHandler);

function inputHandler(e) {
  e.preventDefault();

  let stringSequenceObject = mapString(e.target.value);
}
