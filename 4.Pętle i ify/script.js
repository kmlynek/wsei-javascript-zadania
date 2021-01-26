//1

let firstNumber = 2;
let secondNumber = 6;

if (firstNumber>secondNumber)
  {
    console.log(firstNumber);
  }
else
  {
    console.log(secondNumber);
  }

//2

let firstNumber = 3;
let secondNumber = 4;
let thirdNumber = 5;

if (firstNumber>secondNumber && firstNumber>thirdNumber)
  {
    console.log(firstNumber);
  }
else if (secondNumber>firstNumber && secondNumber>thirdNumber)
  {
    console.log(secondNumebr);
  }
else
  {
    console.log(thirdNumber);
  }

//3

for (let i =0; i<10; i++)
  {
    console.log('Lubię JavaScript');
  }

//4

let result = 0;
for (let i =0; i<10; i++)
  {
    result += 1;
    console.log(result);
  }

//5

let value = 5;

for (let i=1; i<6; i++)
  {
    if (i%2 === 0)
      {
      console.log(i + " - parzysta")
      }
    else
      {
        console.log(i + " - nieparzysta")
      }
  }
