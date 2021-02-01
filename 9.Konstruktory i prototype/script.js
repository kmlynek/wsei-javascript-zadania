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

