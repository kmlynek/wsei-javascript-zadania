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
