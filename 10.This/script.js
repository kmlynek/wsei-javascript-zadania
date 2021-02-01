// 1

function Person(firstName, secondName, age, country, city) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
    this.country = country;
    this.city = city;
}

const person = new Person("Jak", "Kowalski", 20, "Polska", "Warszawa");
const person1 = new Person("Karolina", "Kowalska", 35, "Polska", "Kraków");

// 2

console.log(person);
console.log(person1);

person['dishes'] = [];
person1['dishes'] = [];

console.log(person);
console.log(person1);

const showDishes = function(){
    this.dishes.forEach(item => (console.log(item)));
};

const addDishes = function(){
    this.dishes.push(arguments);
};

person['showDishes'] = showDishes;
person1['showDishes'] = showDishes;
person['addDishes'] = addDishes;
person1['addDishes'] = addDishes;

person.addDishes("dish", "dish1", "dish2")
person1.addDishes("dish", "dish1", "dish2", "dish3")
person.showDishes();
person1.showDishes();

// 3

function Calculator(){
	this.a;
	this.b;
	
	this.sum = () => {
		return this.a + this.b;
	};
	
	this.substract = () => {
		return this.a - this.b;
	};
	
	this.divide = () => {
		if(this.b === 0){
			return "b cannot be 0";
		}
		return this.a / this.b;
	};
	
	this.multiply = () => {
		return this.a * this.b;
	}
}

let calc = new Calculator();
calc.a = 2;
calc.b = 20;

console.log(calc.sum());

calc.b = 0;
console.log(calc.divide());

// 4
function ladder(height){
	
	this.height = height;
	this.currentStep = 0;
	this.isOnLadder = false;
	
	this.goOnLadder = () => {
		this.isOnLadder = true;
	}
	
	this.goUp = () => {
		if(this.currentStep >= height){
			this.isOnLadder = false;
			console.log("You are on top");
		}
		else{
			this.currentStep += 1;
			console.log("You stepped up");
		}
	}
	
	this.goDown = () => {
		if(this.currentStep - 1 <= 0){
			this.isOnLadder = false;
			console.log("You are on bottom");
		}
		else{
			this.currentStep -= 1;
			console.log("You stepped down");
		}
	}
}

let ladder1 = new ladder(5);

ladder1.goUp();
ladder1.goUp();
ladder1.goDown();
ladder1.goDown();
ladder1.goUp();
ladder1.goUp();
ladder1.goUp();
ladder1.goUp();
ladder1.goUp();



