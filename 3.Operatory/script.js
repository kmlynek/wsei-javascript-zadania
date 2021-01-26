//1

const firstValue = true;
const secondValue = false;

console.log(firstValue === secondValue);

//2

let first = 6;
let second = 3;
let moduloResult = 0;

moduloResult = first % second;
console.log(moduloResult);

//3

let first = 'first';
let second = 'second';
let result = '';
result = first + second;
console.log(result);

//4

var someNumber = 425;
var someString = "425";
console.log(someNumber == someString);  // true - ma miejsce konwersja typów zmiennych
console.log(someNumber === someString); // false - inny typ zmiennych

//5

let counter = 30;
console.log(counter);
counter++;
console.log(counter);
counter--;
console.log(counter);
