/**
 *
 * Every Friday and Saturday night, farmer counts amount of sheep returned back to his farm
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
