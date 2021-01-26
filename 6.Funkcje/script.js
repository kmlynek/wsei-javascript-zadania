//1

function showText(){
  console.log("Udało się!")
}
showText();

//2

function showParam (param) {
  console.log(param)
}
showParam('ex.2')

//3

const exampleArray = ["bla", "add", "fsa"];

function returnArray(array) {
  return array;
}

returnArray(exampleArray);

//4

function exampleString (paramString) {
       let i = 0;
       let myInterval = setInterval(() => {
           if (i < 5) {
               console.log(paramString)
               i++
           }
           else {
               console.log("Koniec")
               clearInterval(myInterval)
           }
       },3000)
    }
exampleString('ex.4')
