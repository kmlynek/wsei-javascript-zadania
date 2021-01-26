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
