// Three ways to create an object
var objectA = {};

var objectB = Object.create(Object.prototype);

var objectC = new Object();

console.log(objectA);
console.log(objectB);
console.log(objectC);


// Four ways to assign a value to an object

// 1) Dot syntax
objectA.myKey = "Hello JS";
var value = objectA.myKey;
console.log(value);

// 2) Square bracket syntax
objectA["anotherKey"] = "Hello brackets";
var value = objectA["anotherKey"];
console.log(value);

// 3) Define property
Object.defineProperty(objectA, "oneMoreKey", {
  value: "for more control of the property's behavior",
  writable: true,
  enumerable: true,
  configurable: true
});
var value = objectA.oneMoreKey;
console.log(value);

// 4) Define properties

var objectD = {};
Object.defineProperties(objectD, {
  "someKey" : {
    value : "Hello World",
    writable: true
  },
  
  "anotherKey" : {
    value : "OK",
    writable: false
  }
});
var valueA = objectD.someKey;
var valueB = objectD.anotherKey;

console.log(valueA + ' ' + valueB);



// --------Basic constructors------------
function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
  
  this.toString = function() {
    return this.model + " had done " + this.miles + " miles";
  };
}

var golf = new Car("VW Golf", 2012, 20000);
var aventador = new Car("Lamborghini Aventador", 2016, 100);

console.log(golf.toString());
console.log(aventador.toString());


// -------PATTERN: Constructor with prototypes------------
function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
  
  Car.prototype.toString = function() {
    return this.model + " had done " + this.miles + " miles";
  };
}

var golf = new Car("VW Golf", 2012, 20000);
var aventador = new Car("Lamborghini Aventador", 2016, 100);

console.log(golf.toString());
console.log(aventador.toString());
