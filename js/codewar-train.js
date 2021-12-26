/** Every Friday and Saturday night, farmer counts amount of sheep returned back to his farm
 * (sheep returned on Friday stay and don't leave for a weekend).
 * Sheep return in groups each of the days -> you will be given two arrays with these numbers
 * (one for Friday and one for Saturday night). Entries are always positive ints, higher than zero.
 * armer knows the total amount of sheep, this is a third parameter.
 * You need to return the amount of sheep lost (not returned to the farm) after final sheep counting on Saturday.
 * Example 1: Input: {1, 2}, {3, 4}, 15 --> Output: 5
 * Example 2: Input: {3, 1, 2}, {4, 5}, 21 --> Output: 6
 */

function lostSheep(friday, saturday, total) {
  //your code here
  return total - [...friday, ...saturday].reduce((tot, n) => tot + n, 0);
}

console.log(lostSheep([(3, 6, 9, 12)], [3, 2, 1, 2, 3, 1], 44));

/**Your non-profit company has assigned you the task of calculating some simple statistics on donations.
 * You have an array of integers, representing various amounts of donations your company has been given.
 * In particular, you're interested in the median value for donations.
 * The median is the middle number of a sorted list of numbers.
 * If the list is of even length, the 2 middle values are averaged.
 * Write a function that takes an array of integers as an argument and returns the median of those integers.
 * Notes:
 * The sorting step is vital.
 * Input arrays are non-empty.
 *
 * Examples
 *
 * Median of [33,99,100,30,29,50] is 41.5.
 * Median of [3,2,1] is 2.
 *
 *
 */

function median(array) {
  //code here
  const sortedArray = [...array].sort((a, b) => a - b);
  if (array.length % 2 !== 0) {
    return sortedArray[Math.round(array.length / 2 - 1)];
  }
  return (
    (sortedArray[array.length / 2 - 1] + sortedArray[array.length / 2]) / 2
  );
}

console.log('median - median', median([33, 99, 100, 30, 29, 50]));

/**Create a function finalGrade, which calculates the final grade of a student depending on two parameters:
 * a grade for the exam and a number of completed projects.
 * This function should take two arguments: exam - grade for exam (from 0 to 100);
 * projects - number of completed projects (from 0 and above);
 *
 * This function should return a number (final grade). There are four types of final grades:
 * 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
 * 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
 * 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
 * 0, in other cases
 */

function finalGrade(exam, projects) {
  let grade = 0;
  switch (true) {
    case exam > 90 || projects > 10:
      grade = 100;
      break;

    case exam > 75 && projects >= 5:
      grade = 90;
      break;

    case exam > 50 && projects >= 2:
      grade = 75;
      break;

    default:
      grade = 0;
  }

  return grade;
}

console.log('finalGrade(exam, projects)', finalGrade(100, 12));

/** An isogram is a word that has no repeating letters, consecutive or non-consecutive.
 * Implement a function that determines whether a string that contains only letters is an isogram.
 * Assume the empty string is an isogram. Ignore letter case.
 */

function isIsogram(str) {
  const uniqueLtrs = str
    .toLowerCase()
    .split('')
    .filter((letter, index, array) => array.indexOf(letter) === index)
    .join('');
  return str.toLowerCase() === uniqueLtrs;
}

console.log(isIsogram('Dermatoglyphics'));

/*Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
Write a function which takes a list of strings and returns each line prepended by the correct number.
The numbering starts at 1. The format is n: string. Notice the colon and space in between.

number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
*/

const number = array => array.map((el, index, array) => `${index + 1}: ${el}`);

console.log(number(['a', 'b', 'c']));
