//1

let i =1;
  let myTimer = setInterval(() =>
  {
    console.log("Cześć po raz: " + i);
    i++;
    if (i > 15)
      {
        clearInterval(myTimer);
      };
  }, 3000)
