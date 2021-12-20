let firstNumber = prompt("Enter first number");
firstNumber = Number(firstNumber);

let secondNumber = prompt("Enter second number");
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;
const def = firstNumber - secondNumber;
const multiply = firstNumber * secondNumber;
const divison = firstNumber / secondNumber;

console.log('sum = ', sum);
console.log('def = ', def);
console.log('multiply = ', multiply);
console.log('divison = ', Number(divison.toFixed(2)));