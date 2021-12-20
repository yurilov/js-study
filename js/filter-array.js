function filterArray(numbers, value) {
   // Change code below this line
  let numbersFiltered = [];
	for (let i = 0; i < numbers.length; i += 1) {
      let number = numbers[i];
      if (number > value) {
        numbersFiltered.push(number);
      }
	
    }
    return numbersFiltered;
  // Change code above this line
}

console.log(filterArray([1, 2, 3, 4, 5], 3));