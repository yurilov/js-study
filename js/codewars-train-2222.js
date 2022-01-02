/**Return the number (count) of vowels in the given string.
 * We will consider a, e, i, o, u as vowels for this Kata (but not y).
 * The input string will only consist of lower case letters and/or spaces.
 */

function getCount(str) {
  let vowelsCount = 0;
  const strArray = str.split('');
  strArray.forEach(value => {
    if (
      value === 'a' ||
      value === 'e' ||
      value === 'i' ||
      value === 'o' ||
      value === 'u'
    ) {
      vowelsCount += 1;
    }
  });
  // enter your majic here

  return vowelsCount;
}

console.log(getCount('abracadabra'));
