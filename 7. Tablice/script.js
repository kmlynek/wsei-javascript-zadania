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

