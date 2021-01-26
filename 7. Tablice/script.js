//1

const exArray = ["a", "b", "c"];
exArray.forEach(item => {
  console.log(item);
  })

//2

var array = ["One", 2,3,4,5,"Six"];

// 2.1
console.log(exampleArray[0]);
console.log(exampleArray[1]);

// 2.2

console.log(exampleArray[exampleArray.length - 1]);

// 2.3

exampleArray.forEach(item => {
  console.log(item);
})

// 2.4

const newArray =  exampleArray.filter((x,i) => {
   return i % 2;
  })
console.log(newArray);

// 2.5

const newArray =  exampleArray.filter( x => typeof x === "string");
console.log(newArray);

// 2.6

const newArray =  exampleArray.filter( x => typeof x === "number");
console.log(newArray);

//3

let exampleArray = [3,5,7,53,378,832];

//3.1
let counter = 0;
exampleArray.forEach((elem, i )=>{
    counter += elem;
})
console.log(counter);

//3.2
let counter1 = 0;
exampleArray.forEach((elem, i )=>{
        counter1 -= elem;
})
console.log(counter1);

//3.3
exampleArray.forEach((elem, i )=>{
        counter += elem;
})
console.log(counter / exampleArray.length);

//3.4
exampleArray.forEach((elem, i) =>{
    if (elem % 2 == 0) console.log(elem);
})

//3.5
exampleArray.forEach((elem, i) =>{
    if (elem % 2 != 0) console.log(elem);
})

//3.6
var max = 0;
for (let i = 0; i < exampleArray.length; i++){
    if (max <= exampleArray[i]){
        max = exampleArray[i];
    }
}
console.log('max: ', max);

//3.7
var min = exampleArray[0];
for (let i = 0; i < exampleArray.length; i++){
    if (exampleArray[i] < min){
        min = exampleArray[i];
    }
}
console.log('min: ', min)

//3.8
console.log(exampleArray.reverse());

//4

let numbersArray = [2,5,7,9];

function sumOfArrayNumbers (array){
  let sum = array.reduce( (x,i) => x+i );
  console.log(sum);
}
sumOfArrayNumbers(numbersArray);

//5

let numbersArray = [1,2,3,4,5,6,7,8,9];

function multiplyArrayByAverage (array){
    let sum = array.reduce((x,i) => x+i);
    let average = sum/array.length;
  
    array.forEach(item => {
        console.log(item * average);
    })
  
}
multiplyArrayByAverage(numbersArray);

//6

let numbersArray = [1,2,3,4,5,6,7,8,9];
function averageOfEvenNumbers(array) {
  let evenNumbers = array.filter(item => item % 2 === 0);
  let sumEvenNumbers = evenNumbers.reduce((i, x) => i + x);
  let average = sumEvenNumbers/evenNumbers.length;
  
  return average
}

let average = averageOfEvenNumbers(numbersArray);
console.log(average);

//7

let numbersArray = [3,6,1,2,7,4,16];

function sortArray(array) {
 return array.sort( (x, y) => x - y);

}

console.log(sumOfArraysIndex(exampleArrayA, exampleArrayB));

//8-deleted

//9

function getArrayWithOppositeSigns(numbers) {
    const result = [];
    for(let number of numbers) {
        result.push(-number);
    }
    return result;
}

console.log(getArrayWithOppositeSigns([1,-2,3]));

//10

let numbersArray = [3,-2,9,1,-6,4,12];

function reverseNumber(array){
  let newArray = array.map(item => -item);
  return newArray;

}

reverseNumber(numbersArray);
