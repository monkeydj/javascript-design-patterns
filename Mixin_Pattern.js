//----------- Mixin Pattern -------------------
var Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.gender = "male";
};

var batman = new Person("Mr.", "Batman");

var Superhero = function(firstName, lastName, powers) {
  Person.call(this, firstName, lastName);
  this.powers = powers;
}

Superhero.prototype = Object.create(Person.prototype);
var superman = new Superhero("Mr.", "Batman", ["flight"]);

console.log(superman);


//------------- Mixin Pattern in action (augmenting) ----------

var Car = function(settings) {
  this.model = settings.model || "no model provided";
  this.color = settings.color || "no color provided";
};

var Mixin = function() {};

Mixin.prototype = {
  driveForward: function() {
    console.log("drive forward");
  },
  driveBackward: function() {
    console.log("drive backward");
  },
  driveSideways: function() {
    console.log("drive sideways");
  }  
};

// Extend an existing object with a method from another
function augment(receivingClass, givingClass) {
  //only provide certain methods
  if (arguments[2]) {
    for (var i=2, len=arguments.length; i<len; i++) {
      receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
    }
  }
  // provide all methods
  else {
    for (var methodName in givingClass.prototype) {
      if (!Object.hasOwnProperty.call(receivingClass.prototype, methodName)) {
        receivingClass.prototype[methodName] = givingClass.prototype[methodName];
      }
    }
  }
}  
  
  // Augment the Car constructor to include "driveForward" and "driveBackward
  
  augment(Car, Mixin, "driveForward", "driveBackward");
  
  // Create a new Car
  var myCar = new Car({
    model: "Ford Escort",
    color: "blue"
  });
  
  // Test to make sure we now have access to the methods
  myCar.driveForward();
  myCar.driveBackward();


augment(Car, Mixin);

var mySportsCar = new Car({
  model: "Porsche",
  color: "red"
});

mySportsCar.driveSideways();


