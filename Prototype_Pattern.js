//----- Prototype Pattern -------------

var myCar = {
  name  : "VW Golf",
  
  drive : function() {
    console.log("Weeee. I'm driving");
  },
  
  panic : function() {
    console.log("Wait. How do I stop this thing?");
  }
};

// Use Object.create to instanciate a new car
var yourCar = Object.create(myCar);

var yourCar = Object.create(myCar, {"speed": {value: 1500}});

//yourCar.speed = 1500;

console.log(yourCar);
console.log(yourCar.name);
console.log(yourCar.speed);
console.log(myCar.speed);