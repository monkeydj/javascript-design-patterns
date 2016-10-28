// ----------------------------------
// Simple Example
// ----------------------------------

// A vehicle constructor
function Vehicle(vehicleType) {
  this.vehicleType = vehicleType || "car";
  this.model = "default";
  this.license = "00000-000";
}

// Test instance for a basic vehicle
var testInstance = new Vehicle("car");
console.log(testInstance);

// Create a new instance of vehicle, to be decorated
var truck = new Vehicle("truck");

// New functionality to decorate the vehicle
truck.setModel = function(modelName) {
  this.model = modelName;
}

truck.setColor = function(color) {
  this.color = color;
}

// Testing the decorated setters
truck.setModel("CAT");
truck.setColor("blue");

console.log(truck);

var secondInstance = new Vehicle("car");
console.log(secondInstance);


// ------------------------------------------
// Example 2
// ------------------------------------------
// The constructor to decorate
function MacBook() {
 
  this.cost = function () { return 997; };
  this.screenSize = function () { return 11.6; };
 
}
 
// Decorator 1
function memory( macbook ) {
 
  var v = macbook.cost();
  macbook.cost = function() {
    return v + 75;
  };
 
}
 
// Decorator 2
function engraving( macbook ){
 
  var v = macbook.cost();
  macbook.cost = function(){
    return v + 200;
  };
 
}
 
// Decorator 3
function insurance( macbook ){
 
  var v = macbook.cost();
  macbook.cost = function(){
     return v + 250;
  };
 
}
 
var mb = new MacBook();
memory( mb );
engraving( mb );
insurance( mb );
 
// Outputs: 1522
console.log( mb.cost() );
 
// Outputs: 11.6
console.log( mb.screenSize() );