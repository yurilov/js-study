import { mapString } from 'string-cartography';
import { dictionaryWord, stringSequence } from 'subsequence.words';

function compareLetters(word, object, ___) {
  for (var letter of word) {
    if (object[letter]) {
      ___;
    } else {
      return false;
    }
  }
  return true;
}
console.log(dictionaryWord);
let stringSequenceObject = mapString(stringSequence, ___);
console.log(compareLetters(dictionaryWord, stringSequenceObject));
