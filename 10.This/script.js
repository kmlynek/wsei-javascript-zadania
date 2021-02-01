// 1

function Person(firstName, secondName, age, country, city) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
    this.country = country;
    this.city = city;
}

const person = new Person("Jak", "Kowalski", 20, "Polska", "Warszawa");
const person1 = new Person("Karolina", "Kowalkiewicz", 35, "Polska", "Kraków");

console.log(person);
console.log(person1);
