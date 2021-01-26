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

//6

for (i = 0; i <= 4; i++)
{
    for (j = 0; j <= 5; j++)
    {
        console.log("i= " + i + ", j= " + j);
    }
}

//7

for (let i = 0; i <= 100; i++)
  {
    if (i % 3 === 0 && i % 5 === 0)
      {
        console.log("FizzBuzz");
      }
    else if (i % 3 === 0)
      {
        console.log("Fizz");
      }
    else if (i % 5 === 0)
      {
        console.log("Buzz")
      }
    else
      {
        console.log(i);
      }
  }

//8

//a)

const star = '*'
for (let i = 0; i < 5; i++) {
    let result = '';
    for (let j = 0; j < i; j++) {
        result += star;
    }
    console.log(result)
}

// b)

for (let i = 1; i <= 5; i++) {
    
    const tab = [];
    for (let j = i; j < 5; j++) {
      tab.push(" ");
    }
    for (let k = 0; k < (2 * i - 1); k++) {
      const value = k % 2 === 0 ? "*" : " ";
      tab.push(value);
    }
  
    const row = tab.join("")
    console.log(row);
}
  


//c)

for ( let i=1; i<= 5; i++ ){
    let empty = ' '.repeat( 5-i );
    let stars = '*'. repeat( 2*i-1 )
    console.log( empty + stars );
}


//d)

for(let i=1;i<=6;i++){
    let row = "";
    for(let j=0; j<i ;j++){
        row += "*";
    }

    let number = i;
    for(let k=6; k>i ;k--){
        row += number;
        number ++;
    }
    console.log(row);
    
}
console.log("------")
for(let i=6;i>0;i--){
   
    let row = "";

    for(let k=1; k<=i ; k++){
        row += "*";
    }
    let number = i
    for(let j=6; j>i ; j--){
      row += number;
       number++;
    }
    console.log(row);
}



//e

for (let i = 1; i <= 5; i++) {
    
    const tab = [];
    for (let j = i; j < 5; j++) {
      tab.push(" ");
    }
    for (let k = 0; k < (2 * i - 1); k++) {
      const value = k % 2 === 0 ? "*" : " ";
      tab.push(value);
    }
  
    const row = tab.join("")
    console.log(row);
}

for ( let i=1; i<3; i++ ){

    const tab = [];
    for (let j = 0; j < 4; j++) {
        tab.push(" ");
    }

    tab.push("*");
    const row = tab.join("");
    console.log(row);
}
