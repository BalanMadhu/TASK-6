//person class
class Person {
  constructor(name, age, gender, address, phone) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.address = address;
    this.phone = phone;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Address: ${this.address}, Phone: ${this.phone}`;
  }
}

//Uber Price Calculation Class
const person1 = new Person(
  "John Doe",
  30,
  "Male",
  "123 Main St, Cityville",
  "123-456-7890"
);
console.log(person1.getDetails());

class UberPriceCalculator {
  constructor(baseFare, costPerKm) {
    this.baseFare = baseFare;
    this.costPerKm = costPerKm;
  }

  calculatePrice(distance) {
    return this.baseFare + this.costPerKm * distance;
  }
}

const uberCalculator = new UberPriceCalculator(5, 2);
const distance = 10; // distance in km
console.log(
  `Total Uber price for ${distance} km: $${uberCalculator.calculatePrice(
    distance
  )}`
);

//Combined Example
class Person {
  constructor(name, age, gender, address, phone) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.address = address;
    this.phone = phone;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Address: ${this.address}, Phone: ${this.phone}`;
  }
}

class UberPriceCalculator {
  constructor(baseFare, costPerKm) {
    this.baseFare = baseFare;
    this.costPerKm = costPerKm;
  }

  calculatePrice(distance) {
    return this.baseFare + this.costPerKm * distance;
  }
}

const person1 = new Person(
  "John Doe",
  30,
  "Male",
  "123 Main St, Cityville",
  "123-456-7890"
);
console.log(person1.getDetails());

const uberCalculator = new UberPriceCalculator(5, 2);
const distance = 10;
console.log(
  `Total Uber price for ${distance} km: $${uberCalculator.calculatePrice(
    distance
  )}`
);
