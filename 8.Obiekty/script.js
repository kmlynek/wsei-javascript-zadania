// 1

let car = {
  name: "BMW",
  model: "M2",
  age: 10,
}

console.log(car.name);
console.log(car.model);
console.log(car.age);

// 2

let car = {
    name: 'BMW',
    model: "M2",
    age: 10,
  
    changeName: function (name) {
      this.name = name;
    }
};

car.changeName("Audi");
console.log(car.name);

// 3

let exampleArray = [1,2,3,4];

let calculator = {

    sum: 0,

    sumArray: function (array) {
    this.sum = array.reduce( (i, x) => {
      return i + x;
    })
  }

}

calculator.sumArray(exampleArray);
console.log(calculator.sum);

// 4

let car = {
    name: 'BMW',
    model: "E46",
    age: 12,
  
};

Object.keys(car).forEach((item) => {
    console.log(item + ": " + car[item]);
  })

// 5

let car = {
    name: 'BMW',
    model: "E46",
    age: 12,
    
    engine: {
      type: "petrol",
      name: "M52"
    }
};

console.log(car.engine.type, car.engine.name);

// 6

let car = {
    name: 'BMW',
    model: "E46",
    age: 12,
    
    engine: {
      type: "petrol",
      name: "M2"
    }
};

car.displayHello = function (){
  console.log("Hello")
}; 

car.displayHello();
