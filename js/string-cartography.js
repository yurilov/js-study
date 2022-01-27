const word = input('Please, enter the word!');
console.log(word);
function mapString(string) {
  let map = {};
  for (let i = 0; i < string.length; i += 1) {
    let letter = string[i];
    if (map[letter]) {
      map[letter].push(i);
    } else {
      map[letter] = [i];
    }
  }
  return map;
};
let stringMap = mapString(word);
for (let letter in stringMap) {
  console.log(letter + ': ' + stringMap[letter]);
}
