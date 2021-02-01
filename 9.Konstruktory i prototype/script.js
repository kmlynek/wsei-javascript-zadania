// 1

function Person(name, lastname, age, country, city, language){
    this.name = name;
    this.language = language;
    this.lastname = lastname;
    this.age = age;
    this.country = country;
    this.city = city;
}

Person.prototype.changeAge = function (age) {
    this.age = age;
}


Person.prototype.changeCity = function (city) {
    this.city = city;
}

const marek = new Person("Marek", "Kowalski", 12, "Polska", "Gdansk", "Polski");
const wiktoria = new Person("Wiktoria", "Nowak", 23, "Rosja", "Moskwa", "Rosyjski");
const bogdan = new Person("Bogdan", "Ubranski", 32, "Ukraina", "Minsk", "Rosyjski");
const thomson = new Person("Thomson", "Gate", 33, "USA", "Hollywood", "Angielski");
const karolina = new Person("Karolina", "Mazurek", 42, "Czechy", "Praga", "Czeski");

marek.changeAge(9);
wiktoria.changeCity("Warszawa");

console.log(marek.age);
console.log(wiktoria.city);

// 2

function Calculator(){
	this.operationHistory = [];
	
	this.sum = (a, b) => {
		this.operationHistory.push(a + " + " + b);
		return a + b;
	};
	
	this.substract = (a, b) => {
		this.operationHistory.push(a + " - " + b);
		return a - b;
	};
	
	this.divide = (a, b) => {
		if(b === 0){
			return "b cannot be 0";
		}
		this.operationHistory.push(a + " / " + b);
		return a / b;
	};
	
	this.multiply = (a, b) => {
		this.operationHistory.push(a + " * " + b);
		return a * b;
	}
}

let calc1 = new Calculator();
let calc2 = new Calculator();

calc1.multiply(2, 4);
calc1.multiply(2, 8);
console.log(calc1.operationHistory);

// 3

function Game(){
	this.lastNumber = 0;
	this.number = 0;
	this.generator = null;
	
	this.startGenerator = () => {
		this.generator = setInterval(() => {
			this.lastNumber = this.number;
			this.number = Math.floor((Math.random() * 10) + 1);
			
			console.log(this.number);
			this.checkWin();
		}, 1000)
	}
	
	this.checkWin = () => {
		if(this.lastNumber + 5 === this.number){
			console.log("Wygrałeś");
			clearInterval(this.generator);
		}
	}
}

let game1 = new Game();
game1.startGenerator();
